import React, { useState, useMemo } from 'react';
import { Eye, FolderOpen, Sparkles } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolioData';
import LightboxModal from './LightboxModal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Works') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { 'All Works': PORTFOLIO_ITEMS.length };
    PORTFOLIO_CATEGORIES.slice(1).forEach((cat) => {
      counts[cat] = PORTFOLIO_ITEMS.filter((i) => i.category === cat).length;
    });
    return counts;
  }, []);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            My Design Portfolio
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Original Graphic Design & Visual Works
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Explore my original posters, bilingual Tamil & English product advertisements, symposium brochures, formal invitations, and photo compositions. Click any design to inspect it in full resolution.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const count = categoryCounts[category] || 0;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white dark:bg-surface-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[11px] ${
                    isActive
                      ? 'bg-slate-950/15 text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Natural Aspect Ratio Grid */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className="break-inside-avoid group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-card overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Image Wrapper Preserving Natural Aspect Ratio */}
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                      <span>Preview Full Design</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {item.category}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {item.aspectHint}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center max-w-xl mx-auto space-y-3">
            <FolderOpen className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Category Reserved for Upcoming Samples
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I have practical freelance experience designing{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {activeCategory}
              </span>
              . Additional samples in this category will be uploaded here soon.
            </p>
            <button
              onClick={() => setActiveCategory('All Works')}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View All 9 Available Works</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Preview Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <LightboxModal
          item={filteredItems[selectedIndex]}
          currentIndex={selectedIndex}
          total={filteredItems.length}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
