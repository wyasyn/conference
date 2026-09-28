"use client";

import { useId, useState } from "react";
import { Barcode } from "@/components/barcode";
import { type Session, trackColors, trackLabels } from "@/lib/conference";

export function SessionTicket({
  session,
  titleAs: Title = "h3",
  action,
  details = true,
}: {
  session: Session;
  titleAs?: "h2" | "h3" | "h4";
  /** Shown at the end of the stub. Defaults to the day label. */
  action?: React.ReactNode;
  /** Show the abstract and room behind a toggle. */
  details?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const colors = trackColors[session.track];

  return (
    <article className="flex flex-col border border-neutral-600 md:flex-row">
      <p
        className={`flex h-8 shrink-0 items-center justify-center text-preset-7 uppercase md:h-auto md:w-10 md:rotate-180 md:[writing-mode:vertical-rl] ${colors.text}`}
      >
        <span className="sr-only">Track: </span>
        {trackLabels[session.track]}
      </p>

      <div
        className={`flex flex-1 flex-col text-neutral-900 md:flex-row ${colors.bg}`}
      >
        <div className="flex flex-1 flex-col gap-2 p-4 md:p-6">
          <Title className="text-preset-2-mobile lowercase md:text-preset-2-tablet lg:text-preset-2">
            {session.title}
          </Title>
          <p className="text-preset-6 uppercase text-neutral-600 lg:text-preset-5">
            <span className="text-preset-6-extrabold text-neutral-900 lg:text-preset-5-bold">
              {session.speaker}
            </span>{" "}
            {"// "}
            {session.company}
          </p>

          {details && (
            <>
              <div
                id={detailsId}
                hidden={!open}
                className="mt-2 border-t border-neutral-900/15 pt-4"
              >
                <p className="max-w-280 text-preset-6">{session.abstract}</p>
                <p className="mt-4 text-preset-6 uppercase">
                  Location: {session.room}
                </p>
              </div>

              <button
                type="button"
                aria-expanded={open}
                aria-controls={detailsId}
                onClick={() => setOpen(!open)}
                className="mt-2 flex w-fit cursor-pointer items-center gap-2 text-preset-7 uppercase text-neutral-600 hover:text-neutral-900 focus-visible:outline-neutral-900"
              >
                <svg
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className="size-2.5"
                >
                  <path
                    d={open ? "M0 6h12" : "M0 6h12M6 0v12"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                {open ? "Hide details" : "Show details"}
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-dashed border-neutral-900 px-4 py-3 md:w-38 md:flex-col md:gap-1.5 md:border-t-0 md:border-l md:py-2.5">
          <p className="flex flex-col md:items-center">
            <span className="text-preset-4">
              <time>{session.start}</time>
            </span>
            <span className="text-preset-7">
              <span className="sr-only">to </span>
              <time>{session.end}</time>
            </span>
          </p>
          <Barcode className="h-10 w-29 text-neutral-900/85" />
          {action ?? (
            <p className="text-preset-7 uppercase">Day {session.day}</p>
          )}
        </div>
      </div>
    </article>
  );
}
