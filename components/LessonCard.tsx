'use client';

import { Lesson } from '@/lib/lessons';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isLocked: boolean;
  index: number;
  onClick: () => void;
}

export default function LessonCard({ lesson, isCompleted, isLocked, index, onClick }: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`w-full text-left p-4 rounded-2xl border transition-all ${
        isLocked
          ? 'bg-midnight/[0.02] border-midnight/5 opacity-50 cursor-not-allowed'
          : isCompleted
          ? 'bg-sage/5 border-sage/20 hover:border-sage/40 hover:shadow-sm'
          : 'bg-white border-midnight/5 hover:border-ocean/20 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Index / status icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
            isLocked
              ? 'bg-midnight/5 text-midnight/20'
              : isCompleted
              ? 'bg-sage/10 text-sage'
              : 'bg-ocean/10 text-ocean'
          }`}
        >
          {isLocked ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : isCompleted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            index + 1
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-display font-semibold text-sm truncate">{lesson.title}</h4>
            <span className="text-xs text-midnight/25 flex-shrink-0">{lesson.titleFr}</span>
          </div>
          <p className="text-xs text-midnight/40 mt-0.5 line-clamp-1">{lesson.description}</p>
        </div>

        {/* Arrow */}
        {!isLocked && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 text-midnight/20 mt-1"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </div>
    </button>
  );
}
