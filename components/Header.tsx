'use client';

interface HeaderProps {
  currentView: 'home' | 'lesson' | 'chat';
  onBack: () => void;
  stats: {
    lessonsCompleted: number;
    wordsLearned: number;
    streak: number;
  };
}

export default function Header({ currentView, onBack, stats }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-midnight/5">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left: back button or logo */}
        <div className="flex items-center gap-2">
          {currentView !== 'home' ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-midnight/50 hover:text-midnight transition-colors -ml-1 px-2 py-1 rounded-lg hover:bg-midnight/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xl">🇫🇷</span>
              <h1 className="font-display text-xl font-bold tracking-tight">Parlez</h1>
            </div>
          )}
        </div>

        {/* Right: stats (only on home) */}
        {currentView === 'home' && stats.lessonsCompleted > 0 && (
          <div className="flex items-center gap-3 text-xs text-midnight/40">
            <span title="Day streak">🔥 {stats.streak}</span>
            <span title="Words learned">📚 {stats.wordsLearned}</span>
          </div>
        )}
      </div>
    </header>
  );
}
