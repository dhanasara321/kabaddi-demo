export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-overlay" aria-hidden>
      <div className="absolute inset-0 bg-noise animate-grainShift" />
    </div>
  );
}
