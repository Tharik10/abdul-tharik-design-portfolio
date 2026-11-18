import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Phone, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Poster / Advertisement Design',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Design Inquiry: ${formData.projectType} — from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-surface-card/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Get In Touch
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Let’s Collaborate on Your Next Visual Project
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Available for freelance graphic design, bilingual Tamil & English poster layouts, product advertisements, event creatives, photo retouching, and video editing.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 group min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate group-hover:text-amber-500 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-colors shrink-0"
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-500">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    'Copy'
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card flex items-center gap-3.5 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card hover:border-amber-500 text-sm font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4 text-amber-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card hover:border-amber-500 text-sm font-semibold transition-colors"
              >
                <Github className="w-4 h-4 text-amber-500" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Direct Email Compose Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-card p-6 sm:p-8 shadow-sm space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Design Service Needed
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-amber-500"
                >
                  <option>Poster / Advertisement Design</option>
                  <option>Event & Symposium Design</option>
                  <option>Invitation / Certificate Design</option>
                  <option>Social Media Creative</option>
                  <option>Photo Editing & Retouching</option>
                  <option>Video Editing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your poster, advertisement, event, or editing requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors shadow-md shadow-amber-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email to {PERSONAL_INFO.email}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
