import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function LightboxModal({
  item,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && total > 1) onNext();
      if (e.key === 'ArrowLeft' && total > 1) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, total]);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Stage */}
        <div className="relative flex-1 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4 sm:p-6 min-h-[300px] max-h-[65vh] lg:max-h-[92vh]">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[60vh] lg:max-h-[84vh] w-auto h-auto object-contain rounded-lg shadow-lg"
          />

          {total > 1 && (
            <>
              <button
                onClick={onPrev}
                aria-label="Previous design"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next design"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Metadata Sidebar */}
        <div className="w-full lg:w-80 xl:w-96 p-6 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {item.category}
              </span>
              <span>
                {currentIndex + 1} / {total}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <Tag className="w-3.5 h-3.5 text-amber-500" />
                <span>Design Focus</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            Designed by <span className="font-semibold text-slate-800 dark:text-slate-200">Abdul Tharik M</span>
          </div>
        </div>
      </div>
    </div>
  );
}
