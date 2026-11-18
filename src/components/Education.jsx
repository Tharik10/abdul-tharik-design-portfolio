import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Academic Background
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-card p-6 sm:p-8 shadow-sm hover:border-amber-500/40 transition-colors flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base">
                  <GraduationCap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{edu.institution}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
