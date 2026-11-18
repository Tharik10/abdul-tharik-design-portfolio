import React from 'react';
import { CheckCircle2, Globe, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_HIGHLIGHTS } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-surface-card/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                About Me
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Structured Visual Communication & Bilingual Design
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium">
                <Globe className="w-4 h-4 text-amber-500" />
                <span>Working Languages:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.languages.join(' & ')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Practical Freelance Experience */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {EXPERIENCE_HIGHLIGHTS[0].role}
                  </h3>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    {EXPERIENCE_HIGHLIGHTS[0].type}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {EXPERIENCE_HIGHLIGHTS[0].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
