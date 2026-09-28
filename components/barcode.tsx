// Alternating bar and gap widths, so every ticket shows the same code.
const pattern = [
  3, 2, 2, 2, 4, 2, 2, 3, 5, 2, 2, 2, 3, 3, 2, 2, 4, 3, 2, 2, 3, 2, 5, 2, 2, 3,
  3,
];

const bars = pattern.reduce<{ x: number; width: number }[]>((acc, width, i) => {
  const x = pattern.slice(0, i).reduce((sum, w) => sum + w, 0);
  if (i % 2 === 0) acc.push({ x, width });
  return acc;
}, []);
const total = pattern.reduce((sum, w) => sum + w, 0);

export function Barcode({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${total} 40`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`fill-current ${className}`}
    >
      {bars.map((bar) => (
        <rect key={bar.x} x={bar.x} width={bar.width} height="40" />
      ))}
    </svg>
  );
}
