'use client';

export default function StarfieldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0">
        <div className="starfield-layer-1" />
        <div className="starfield-layer-2" />
      </div>
    </div>
  );
}
