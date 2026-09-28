import Link from "next/link";
import { navLinks, tracks, venue } from "@/lib/conference";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-preset-6-medium uppercase text-green-200">
        <span aria-hidden="true">{"// "}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

const linkClass = "text-preset-6 text-neutral-200 hover:text-white focus-visible:text-white focus-visible:outline-1 focus-visible:outline-dashed";

export function SiteFooter() {
  return (
    <footer className="site-container mt-16">
      <div className="flex flex-col gap-8 border-t border-neutral-600 pt-10 pb-10 lg:flex-row lg:justify-between">
        <div className="flex max-w-100 flex-col gap-4">
          <Link href="/" className="w-fit text-preset-2-mobile text-green-200">
            DEVHORIZON_26
          </Link>
          <p className="text-preset-6 text-neutral-200">
            A three-day conference for engineers who build the interfaces humans
            use every day.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-20">
          <FooterColumn title="Navigate">
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Tracks">
            <ul className="flex flex-col gap-3">
              {tracks.map((track) => (
                <li key={track.slug}>
                  <Link
                    href={`/schedule?track=${track.slug}`}
                    className={linkClass}
                  >
                    {track.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Venue">
            <address className="text-preset-6 not-italic text-neutral-200">
              {venue.name}
              <br />
              {venue.city}
              <br />
              {venue.dates}
            </address>
          </FooterColumn>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-neutral-600 py-6 text-preset-7 uppercase text-neutral-200 md:flex-row md:justify-between">
        <p>© 2026 DevHorizon. All rights reserved.</p>
        <a href="#top" className="hover:text-white focus-visible:text-white focus-visible:outline-1 focus-visible:outline-dashed">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
