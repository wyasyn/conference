import Link from "next/link";

const variants = {
  /** On the dark page background. */
  light:
    "border-white text-white shadow-hard shadow-white hover:-translate-0.5 hover:shadow-hard-lg focus-visible:border-green-200 focus-visible:shadow-green-200",
  /** On light cards. */
  dark: "border-neutral-900 text-neutral-900 shadow-hard shadow-neutral-900 hover:bg-neutral-900 hover:text-white hover:shadow-neutral-500",
};

export function ButtonLink({
  href,
  variant = "light",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 border px-6 py-4 text-preset-5 font-medium uppercase transition focus-visible:outline-none focus-visible:border-dashed active:translate-0.5 active:shadow-none ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
