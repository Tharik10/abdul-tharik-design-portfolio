import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-slate-50 dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.name}</span>. All original design works reserved.
        </p>
        <p>{PERSONAL_INFO.subtitle}</p>
      </div>
    </footer>
  );
}
