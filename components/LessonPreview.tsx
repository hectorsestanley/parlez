'use client';

import { Lesson } from '@/lib/lessons';

interface LessonPreviewProps {
  lesson: Lesson;
  onStart: () => void;
  onBack: () => void;
}

export default function LessonPreview({ lesson, onStart, onBack }: LessonPreviewProps) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="mb-8">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-ocean mb-3">
          {lesson.level}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">{lesson.title}</h2>
        <p className="text-midnight/40 text-sm mt-1">{lesson.titleFr}</p>
        <p className="text-midnight/60 mt-3">{lesson.scenario}</p>
      </div>

      {/* Key Vocabulary */}
      <section className="mb-6">
        <h3 className="font-display font-semibold text-sm text-midnight/50 uppercase tracking-wider mb-3">
          Key Vocabulary
        </h3>
        <div className="grid gap-2">
          {lesson.keyVocab.map((vocab) => (
            <div
              key={vocab.fr}
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-midnight/5"
            >
              <div>
                <span className="font-semibold text-sm">{vocab.fr}</span>
                <span className="text-midnight/30 text-xs ml-2">/{vocab.phonetic}/</span>
              </div>
              <span className="text-sm text-midnight/50">{vocab.en}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Phrases */}
      <section className="mb-6">
        <h3 className="font-display font-semibold text-sm text-midnight/50 uppercase tracking-wider mb-3">
          Key Phrases
        </h3>
        <div className="grid gap-2">
          {lesson.keyPhrases.map((phrase) => (
            <div
              key={phrase.fr}
              className="p-3 bg-ocean/[0.03] rounded-xl border border-ocean/10"
            >
              <p className="font-semibold text-sm">{phrase.fr}</p>
              <p className="text-xs text-midnight/30 mt-0.5">/{phrase.phonetic}/</p>
              <p className="text-sm text-midnight/50 mt-1">{phrase.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grammar Tip */}
      <section className="mb-8">
        <h3 className="font-display font-semibold text-sm text-midnight/50 uppercase tracking-wider mb-3">
          Grammar Tip
        </h3>
        <div className="p-4 bg-sage/5 rounded-xl border border-sage/10">
          <p className="text-sm text-midnight/70 leading-relaxed">{lesson.grammarTip}</p>
        </div>
      </section>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-gradient-to-r from-ocean to-midnight text-white font-display font-semibold text-lg rounded-2xl hover:shadow-lg hover:shadow-ocean/20 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
      >
        Start Conversation
      </button>
    </main>
  );
}
