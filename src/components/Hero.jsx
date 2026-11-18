import React from 'react';
import { ArrowDownRight, Mail, MapPin, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[340px] rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{PERSONAL_INFO.subtitle}</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-600 dark:text-amber-400">
                {PERSONAL_INFO.heroTitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:border-amber-500 text-slate-900 dark:text-white font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Showcase Card (Real Portfolio Preview Collage — No Fake Avatar) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-surface-card/90 p-5 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Selected Original Works
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  9 Original Samples
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="#portfolio"
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  <img
                    src="/assets/portfolio/1000634785.jpg"
                    alt="Noora Homemade Products Ghee Biscuit Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 translate-y-3"
                >
                  <img
                    src="/assets/portfolio/1000628858.jpg"
                    alt="Zayn Mens Wear Grand Opening Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  <img
                    src="/assets/portfolio/1000628864.jpg"
                    alt="Halal Heaven Fast Food Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Tamil & Eng
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bilingual Layout</p>
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Print & Web
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Posters & Ads</p>
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Photo & Video
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Retouch & Edit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
