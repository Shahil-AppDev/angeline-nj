'use client';

export default function FloatingSigils() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="floating-sigil-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
          <path d="M12 2v20M2 12h20" strokeWidth="1"/>
        </svg>
      </div>

      <div className="floating-sigil-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="floating-sigil-3">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="floating-sigil-4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-focus">
          <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="1.5"/>
          <path d="M7 8V6a5 5 0 0 1 10 0v2" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="floating-sigil-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
          <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
          <path d="M12 1v6m0 6v6M1 12h6m6 0h6" strokeWidth="1"/>
          <circle cx="12" cy="12" r="8" strokeWidth="1" strokeDasharray="2 3"/>
        </svg>
      </div>

      <div className="floating-sigil-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="floating-sigil-7">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
          <circle cx="12" cy="12" r="4" strokeWidth="1.5"/>
          <path d="M12 8c-2 0-4 1-4 4s2 4 4 4" strokeWidth="1"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      </div>

      <div className="floating-sigil-8">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
          <path d="M12 2c5 0 10 4 10 10s-5 10-10 10" strokeWidth="1.5"/>
          <path d="M12 6c3 0 6 2.5 6 6s-3 6-6 6" strokeWidth="1"/>
          <circle cx="12" cy="12" r="2" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="floating-sigil-9">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-focus">
          <path d="M4 8h4M4 12h4M4 16h4" strokeWidth="1.5"/>
          <path d="M16 8h4M16 12h4M16 16h4" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="6" strokeWidth="1" strokeDasharray="3 2"/>
        </svg>
      </div>

      <div className="floating-sigil-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
          <path d="M12 2l10 18H2z" strokeWidth="1.5"/>
          <circle cx="12" cy="14" r="3" strokeWidth="1"/>
          <path d="M12 8v3" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}
