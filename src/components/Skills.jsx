import React from 'react';
import { PenTool, Image as ImageIcon, Smartphone } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const ICONS = [PenTool, ImageIcon, Smartphone];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-surface-card/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Capabilities & Workflow
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Skills & Design Tools
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Core creative, typesetting, photo retouching, and video editing capabilities backed by hands-on project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={group.group}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card p-6 sm:p-7 shadow-sm hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {group.group}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 shrink-0">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
