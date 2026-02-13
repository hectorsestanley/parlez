'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LessonCard from '@/components/LessonCard';
import LessonPreview from '@/components/LessonPreview';
import ChatInterface from '@/components/ChatInterface';
import { lessons, levels, getLessonsByLevel, Lesson } from '@/lib/lessons';

function useLocalProgress() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [wordsLearned, setWordsLearned] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('parlez_progress');
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedLessons(new Set(data.completedLessons || []));
        setWordsLearned(new Set(data.wordsLearned || []));
        setStreak(data.streak || 0);
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }, []);

  function saveProgress(completed: Set<string>, words: Set<string>, s: number) {
    try {
      localStorage.setItem('parlez_progress', JSON.stringify({
        completedLessons: Array.from(completed),
        wordsLearned: Array.from(words),
        streak: s,
      }));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }

  function markComplete(lessonId: string, newWords: string[]) {
    const updatedLessons = new Set(completedLessons);
    updatedLessons.add(lessonId);

    const updatedWords = new Set(wordsLearned);
    newWords.forEach(w => updatedWords.add(w));

    const today = new Date().toISOString().split('T')[0];
    const lastActive = localStorage.getItem('parlez_last_active');
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak = 1;
    if (lastActive === today) {
      newStreak = streak;
    } else if (lastActive === yesterdayStr) {
      newStreak = streak + 1;
    }

    localStorage.setItem('parlez_last_active', today);

    setCompletedLessons(updatedLessons);
    setWordsLearned(updatedWords);
    setStreak(newStreak);
    saveProgress(updatedLessons, updatedWords, newStreak);
  }

  return { completedLessons, wordsLearned, streak, markComplete };
}

type ViewState =
  | { type: 'home' }
  | { type: 'preview'; lesson: Lesson }
  | { type: 'chat'; lesson: Lesson };

export default function Home() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const { completedLessons, wordsLearned, streak, markComplete } = useLocalProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl block mb-3">🇫🇷</span>
          <p className="font-display text-lg text-midnight/40">Loading Parlez...</p>
        </div>
      </div>
    );
  }

  const stats = {
    lessonsCompleted: completedLessons.size,
    wordsLearned: wordsLearned.size,
    streak: streak,
  };

  return (
    <div className="min-h-screen">
      <Header
        currentView={view.type === 'home' ? 'home' : view.type === 'preview' ? 'lesson' : 'chat'}
        onBack={() => {
          if (view.type === 'chat') {
            if (confirm('Leave this conversation? Your progress in this lesson won\'t be saved.')) {
              setView({ type: 'home' });
            }
          } else {
            setView({ type: 'home' });
          }
          window.scrollTo(0, 0);
        }}
        stats={stats}
      />

      {/* HOME VIEW */}
      {view.type === 'home' && (
        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Hero */}
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold mb-2 tracking-tight">
              Apprenez en parlant
            </h2>
            <p className="text-midnight/50 text-lg">
              Learn French through AI conversations — speak first, type second.
            </p>
          </div>

          {/* Progress overview */}
          {completedLessons.size > 0 && (
            <div className="grid grid-cols-3 gap-3 mb-10">
              <div className="bg-white rounded-2xl p-4 text-center border border-midnight/5">
                <p className="text-2xl font-display font-bold text-ocean">{completedLessons.size}</p>
                <p className="text-xs text-midnight/40 mt-0.5">Lessons</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-midnight/5">
                <p className="text-2xl font-display font-bold text-sage">{wordsLearned.size}</p>
                <p className="text-xs text-midnight/40 mt-0.5">Words</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-midnight/5">
                <p className="text-2xl font-display font-bold text-coral">{streak}</p>
                <p className="text-xs text-midnight/40 mt-0.5">Day streak</p>
              </div>
            </div>
          )}

          {/* Lessons by level */}
          {levels.map((level) => {
            const levelLessons = getLessonsByLevel(level.id);
            const completedInLevel = levelLessons.filter(l => completedLessons.has(l.id)).length;

            return (
              <section key={level.id} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${level.color}`}>
                    {level.id}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg leading-tight">{level.name}</h3>
                    <p className="text-xs text-midnight/40">{level.description}</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-midnight/30">
                    {completedInLevel}/{levelLessons.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-midnight/5 rounded-full mb-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${level.color} transition-all duration-500`}
                    style={{ width: `${(completedInLevel / levelLessons.length) * 100}%` }}
                  />
                </div>

                <div className="grid gap-3">
                  {levelLessons.map((lesson, i) => {
                    // Unlock first lesson of each level, plus any lesson after a completed one
                    const prevLesson = i > 0 ? levelLessons[i - 1] : null;
                    const isLocked = i > 0 && prevLesson && !completedLessons.has(prevLesson.id);

                    return (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        isCompleted={completedLessons.has(lesson.id)}
                        isLocked={!!isLocked}
                        index={i}
                        onClick={() => handleLessonClick(lesson)}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Footer */}
          <footer className="text-center py-8 border-t border-midnight/5">
            <p className="text-xs text-midnight/25">
              Parlez — Built with Gemini AI & Web Speech API
            </p>
          </footer>
        </main>
      )}

      {/* LESSON PREVIEW VIEW */}
      {view.type === 'preview' && (
        <LessonPreview
          lesson={view.lesson}
          onStart={() => setView({ type: 'chat', lesson: view.lesson })}
          onBack={() => {
            setView({ type: 'home' });
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* CHAT VIEW */}
      {view.type === 'chat' && (
        <ChatInterface
          lesson={view.lesson}
          onComplete={(words, summary) => {
            markComplete(view.lesson.id, words);
            setView({ type: 'home' });
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );

  function handleLessonClick(lesson: Lesson) {
    setView({ type: 'preview', lesson });
    window.scrollTo(0, 0);
  }
}
