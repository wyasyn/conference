import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { SessionTicket } from "@/components/session-ticket";
import { SpeakerCard } from "@/components/speaker-card";
import {
  featuredSpeakers,
  scheduleHighlights,
  trackColors,
  tracks,
  venue,
} from "@/lib/conference";

function Hero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[780fr_548fr] lg:gap-8">
      <div className="flex min-h-55 flex-col justify-between gap-8 bg-neutral-100 p-4 text-neutral-900 md:min-h-90 md:p-6 lg:min-h-100 lg:p-8">
        <div className="relative">
          <p
            aria-hidden="true"
            className="absolute top-[55%] left-5 font-display text-[4rem] leading-none font-bold text-transparent [-webkit-text-stroke:1px_var(--color-neutral-200)] md:left-[12%] md:text-[8rem]"
          >
            HORIZON
          </p>
          <h1 className="relative text-preset-1-mobile md:text-preset-1">
            where code meets the machine_
          </h1>
        </div>
        <p className="flex justify-between border-t-2 border-neutral-900 pt-4 text-preset-6 uppercase">
          <span>{venue.dates}</span>
          <span>{venue.name}, SF</span>
        </p>
      </div>

      <div className="relative flex overflow-hidden bg-cyan-100 text-neutral-900 md:h-100">
        <div className="relative z-10 flex w-full flex-col justify-between gap-8 p-4 md:max-w-80 md:p-6">
          <div className="flex flex-col gap-3">
            <p className="text-preset-6 uppercase">
              <span aria-hidden="true">{"// "}</span>Featured keynote
            </p>
            <h2 className="text-preset-2-tablet lowercase">Elena Vasquez</h2>
            <p className="text-preset-6 uppercase text-neutral-600">
              Principal Frontend Engineer @ByteCraft
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-preset-5 font-medium uppercase">
              The Next Frontier of Web Development
            </p>
            <p className="text-preset-6 uppercase text-neutral-600">
              Nov 15 / 9:00 / Room A
            </p>
          </div>
          <ButtonLink
            href="/schedule"
            variant="dark"
            className="w-full md:w-fit"
          >
            View talk
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
              <path
                d="M2 8h12M9 3l5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </ButtonLink>
        </div>
        <Image
          src="/speakers/elena-vasquez-keynote.jpg"
          alt=""
          width={280}
          height={400}
          fetchPriority="high"
          className="absolute right-0 bottom-0 hidden h-full w-auto md:block"
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="site-container flex flex-col gap-12 pt-8 md:pt-10 lg:pt-16">
      <Hero />

      <section aria-labelledby="tracks" className="flex flex-col gap-6">
        <SectionHeading id="tracks">Tracks</SectionHeading>
        <ul className="grid gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {tracks.map((track) => (
            <li key={track.slug} className="flex">
              <Link
                href={`/schedule?track=${track.slug}`}
                className="flex w-full flex-col gap-2 border border-white p-5 shadow-hard shadow-white transition focus-visible:border-dashed focus-visible:border-green-200 focus-visible:shadow-green-200 focus-visible:outline-none"
              >
                <h3
                  className={`text-preset-3 lowercase ${trackColors[track.slug].text}`}
                >
                  {track.name}
                </h3>
                <p className="text-preset-6 whitespace-pre-line uppercase text-neutral-200">
                  {track.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="featured-speakers"
        className="flex flex-col gap-6"
      >
        <SectionHeading id="featured-speakers">
          Featured_Speakers
        </SectionHeading>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredSpeakers.map((speaker) => (
            <li key={speaker.slug} className="flex">
              <SpeakerCard speaker={speaker} />
            </li>
          ))}
        </ul>
        <ButtonLink href="/speakers" className="mt-6 self-center">
          View all speakers
        </ButtonLink>
      </section>

      <section
        aria-labelledby="schedule-highlights"
        className="flex flex-col gap-6"
      >
        <SectionHeading id="schedule-highlights">
          Schedule_Highlights
        </SectionHeading>
        <ul className="flex flex-col gap-4">
          {scheduleHighlights.map((session) => (
            <li key={session.title}>
              <SessionTicket session={session} />
            </li>
          ))}
        </ul>
        <ButtonLink href="/schedule" className="mt-6 self-center">
          View full schedule
        </ButtonLink>
      </section>
    </div>
  );
}
