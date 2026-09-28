"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SessionTicket } from "@/components/session-ticket";
import { StarButton } from "@/components/star-button";
import {
  type Day,
  days,
  sessions,
  type TrackSlug,
  trackColors,
  tracks,
} from "@/lib/conference";
import { useMySchedule } from "@/lib/use-my-schedule";

type Filters = { day: Day; tracks: TrackSlug[]; mine: boolean };

const trackSlugs = tracks.map((track) => track.slug);

function parseFilters(query: string): Filters {
  const params = new URLSearchParams(query);
  const day = Number(params.get("day"));
  return {
    day: days.includes(day as Day) ? (day as Day) : 1,
    tracks: params
      .getAll("track")
      .filter((slug): slug is TrackSlug =>
        trackSlugs.includes(slug as TrackSlug),
      ),
    mine: params.get("mine") === "1",
  };
}

function toQuery(filters: Filters) {
  const params = new URLSearchParams();
  if (filters.day !== 1) params.set("day", String(filters.day));
  for (const slug of filters.tracks) params.append("track", slug);
  if (filters.mine) params.set("mine", "1");
  const query = params.toString();
  return query ? `?${query}` : "";
}

const pillBase =
  "flex h-9 cursor-pointer items-center rounded-full border px-4 text-preset-6 uppercase transition";

/**
 * Filters live in the URL (?day=2&track=frontend&mine=1) so footer links
 * and shared links land on the right view. Without a query (the prerendered
 * fallback) it shows day 1 unfiltered.
 */
export function ScheduleBoard({ query = "" }: { query?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const filters = parseFilters(query);
  const mySchedule = useMySchedule();

  function update(next: Partial<Filters>) {
    router.replace(`${pathname}${toQuery({ ...filters, ...next })}`, {
      scroll: false,
    });
  }

  function toggleTrack(slug: TrackSlug) {
    update({
      tracks: filters.tracks.includes(slug)
        ? filters.tracks.filter((t) => t !== slug)
        : [...filters.tracks, slug],
    });
  }

  const visible = sessions.filter(
    (session) =>
      session.day === filters.day &&
      (filters.tracks.length === 0 ||
        filters.tracks.includes(session.track as TrackSlug)) &&
      (!filters.mine || mySchedule.ids.includes(session.id)),
  );

  return (
    <>
      <fieldset className="flex min-w-0 flex-wrap items-center gap-2 border-b border-neutral-600 pb-6 md:gap-2.5">
        <legend className="sr-only">Filter sessions</legend>
        {days.map((day) => (
          <button
            key={day}
            type="button"
            aria-pressed={filters.day === day}
            onClick={() => update({ day })}
            className="flex h-9 cursor-pointer items-center border border-white px-4 text-preset-6 uppercase transition not-aria-pressed:hover:border-green-200 not-aria-pressed:hover:text-green-200 not-aria-pressed:hover:shadow-hard-sm not-aria-pressed:hover:shadow-green-200 focus-visible:outline-none focus-visible:border-dashed focus-visible:shadow-hard-sm focus-visible:shadow-green-200 not-aria-pressed:focus-visible:border-green-200 not-aria-pressed:focus-visible:text-green-200 aria-pressed:border-green-200 aria-pressed:bg-green-200 aria-pressed:text-neutral-900"
          >
            Day {String(day).padStart(2, "0")}
          </button>
        ))}

        <span aria-hidden="true" className="mx-1 h-6 w-px bg-neutral-600" />

        {tracks.map((track) => (
          <button
            key={track.slug}
            type="button"
            aria-pressed={filters.tracks.includes(track.slug)}
            onClick={() => toggleTrack(track.slug)}
            className={`${pillBase} border-white not-aria-pressed:hover:border-green-200 not-aria-pressed:hover:text-green-200 not-aria-pressed:hover:shadow-hard-sm not-aria-pressed:hover:shadow-green-200 focus-visible:outline-none focus-visible:border-dashed focus-visible:shadow-hard-sm focus-visible:shadow-green-200 not-aria-pressed:focus-visible:border-green-200 not-aria-pressed:focus-visible:text-green-200 aria-pressed:text-neutral-900 ${trackColors[track.slug].pressed}`}
          >
            {track.slug === "accessibility" ? (
              <>
                <span aria-hidden="true">A11y</span>
                <span className="sr-only">{track.name}</span>
              </>
            ) : (
              track.name
            )}
          </button>
        ))}

        <button
          type="button"
          aria-pressed={filters.mine}
          onClick={() => update({ mine: !filters.mine })}
          className={`${pillBase} border-dashed border-green-200 text-green-200 hover:shadow-hard-sm hover:shadow-green-200 focus-visible:outline-none focus-visible:border-solid focus-visible:shadow-hard-sm focus-visible:shadow-green-200 aria-pressed:border-solid aria-pressed:bg-green-200 aria-pressed:text-neutral-900`}
        >
          My schedule
        </button>

        <button
          type="button"
          onClick={() => update({ tracks: [], mine: false })}
          className={`${pillBase} border-red-300 text-red-300 hover:shadow-hard-sm hover:shadow-red-300 focus-visible:outline-none focus-visible:border-dashed focus-visible:shadow-hard-sm focus-visible:shadow-red-300`}
        >
          Clear
        </button>
      </fieldset>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "session" : "sessions"} on day{" "}
        {filters.day}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-4">
          {visible.map((session) => (
            <li key={session.id}>
              <SessionTicket
                session={session}
                titleAs="h2"
                action={<StarButton session={session} />}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 flex flex-col items-start gap-4 border border-dashed border-neutral-600 p-6 md:p-10">
          <p className="text-preset-4 lowercase">no sessions match_</p>
          <p className="text-preset-6 text-neutral-200">
            {filters.mine
              ? "Star a session to add it to your schedule, or clear the filters to see everything on this day."
              : "Try another track or clear the filters."}
          </p>
          <button
            type="button"
            onClick={() => update({ tracks: [], mine: false })}
            className={`${pillBase} border-red-300 text-red-300 hover:shadow-hard-sm hover:shadow-red-300 focus-visible:outline-none focus-visible:border-dashed focus-visible:shadow-hard-sm focus-visible:shadow-red-300`}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}

export function ScheduleBoardFromUrl() {
  const searchParams = useSearchParams();
  return <ScheduleBoard query={searchParams.toString()} />;
}
