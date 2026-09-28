import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false },
};

const colors = [
  ["Neutral 900", "bg-neutral-900", "#00151D"],
  ["Neutral 800", "bg-neutral-800", "#001A24"],
  ["Neutral 600", "bg-neutral-600", "#33444A"],
  ["Neutral 500", "bg-neutral-500", "#49616A"],
  ["Neutral 200", "bg-neutral-200", "#C2C5C2"],
  ["Neutral 100", "bg-neutral-100", "#FCEFE8"],
  ["Green 200", "bg-green-200", "#D1FF66"],
  ["Yellow 100", "bg-yellow-100", "#FFE6BA"],
  ["Red 100", "bg-red-100", "#FEC9C3"],
  ["Red 300", "bg-red-300", "#FF8080"],
  ["Cyan 100", "bg-cyan-100", "#B5E9FC"],
  ["Purple 100", "bg-purple-100", "#CCC4FD"],
  ["Blue 100", "bg-blue-100", "#BBD8FF"],
] as const;

const radii = [
  ["radius-0", "rounded-0"],
  ["radius-4", "rounded-4"],
  ["radius-6", "rounded-6"],
  ["radius-8", "rounded-8"],
  ["radius-10", "rounded-10"],
  ["radius-12", "rounded-12"],
  ["radius-16", "rounded-16"],
  ["radius-20", "rounded-20"],
  ["radius-24", "rounded-24"],
  ["radius-full", "rounded-full"],
] as const;

const spacing = [
  ["spacing-025", "w-0.5", 2],
  ["spacing-050", "w-1", 4],
  ["spacing-075", "w-1.5", 6],
  ["spacing-100", "w-2", 8],
  ["spacing-125", "w-2.5", 10],
  ["spacing-150", "w-3", 12],
  ["spacing-200", "w-4", 16],
  ["spacing-250", "w-5", 20],
  ["spacing-300", "w-6", 24],
  ["spacing-400", "w-8", 32],
  ["spacing-500", "w-10", 40],
  ["spacing-600", "w-12", 48],
  ["spacing-800", "w-16", 64],
  ["spacing-1000", "w-20", 80],
  ["spacing-1200", "w-24", 96],
  ["spacing-1400", "w-28", 112],
  ["spacing-1600", "w-32", 128],
  ["spacing-1800", "w-35", 140],
] as const;

const presets = [
  ["text-preset-1", "Chakra Petch Bold, 80px / 100%, -2px"],
  ["text-preset-1-mobile", "Chakra Petch Bold, 38px / 100%, -2px"],
  ["text-preset-2", "Chakra Petch Bold, 32px / 120%"],
  ["text-preset-2-tablet", "Chakra Petch Bold, 28px / 110%"],
  ["text-preset-2-mobile", "Chakra Petch Bold, 24px / 110%"],
  ["text-preset-3", "Chakra Petch SemiBold, 24px / 130%"],
  ["text-preset-4", "Chakra Petch Bold, 20px / 140%"],
  ["text-preset-5", "JetBrains Mono Regular, 16px / 140%"],
  ["text-preset-5-bold", "JetBrains Mono Bold, 16px / 140%"],
  ["text-preset-6", "JetBrains Mono Regular, 14px / 140%"],
  ["text-preset-6-medium", "JetBrains Mono Medium, 14px / 140%"],
  ["text-preset-6-extrabold", "JetBrains Mono ExtraBold, 14px / 140%"],
  ["text-preset-7", "JetBrains Mono Regular, 12px / 140%, 0.5px"],
] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="border-b border-neutral-200 pb-4 text-preset-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="min-h-full bg-white text-neutral-900">
      <div className="mx-auto flex max-w-300 flex-col gap-20 px-5 py-16 md:px-20">
        <Section title="Color">
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {colors.map(([name, className, hex]) => (
              <li key={name} className="flex flex-col gap-3">
                <div
                  className={`h-16 rounded-8 border border-neutral-200 ${className}`}
                />
                <div>
                  <p className="text-preset-6-extrabold">{name}</p>
                  <p className="text-preset-7 text-neutral-500">{hex}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Typography">
          <ul className="flex flex-col gap-10">
            {presets.map(([className, spec]) => (
              <li key={className} className="flex flex-col gap-2">
                <p className="text-preset-7 text-neutral-500">
                  {className}: {spec}
                </p>
                <p className={className}>
                  the quick brown fox jumps over the lazy dog.
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Radius">
          <ul className="flex flex-col gap-4">
            {radii.map(([name, className]) => (
              <li key={name} className="flex items-center gap-8">
                <span className="w-32 text-preset-6">{name}</span>
                <div
                  className={`h-14 w-56 border border-dashed border-neutral-900 bg-neutral-200 ${className}`}
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Spacing">
          <ul className="flex flex-col gap-4">
            {spacing.map(([name, className, px]) => (
              <li key={name} className="flex items-center gap-8">
                <span className="w-32 text-preset-6">{name}</span>
                <span className="w-16 text-preset-6 text-neutral-500">
                  {px}px
                </span>
                <div className={`h-10 bg-neutral-900 ${className}`} />
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
