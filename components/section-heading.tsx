export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="text-preset-6-extrabold uppercase text-green-200">
      <span aria-hidden="true">{"// "}</span>
      {children}
    </h2>
  );
}
