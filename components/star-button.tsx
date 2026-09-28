"use client";

import type { Session } from "@/lib/conference";
import { useMySchedule } from "@/lib/use-my-schedule";

/** Saves a session to "My schedule" in this browser. */
export function StarButton({ session }: { session: Session }) {
  const mySchedule = useMySchedule();
  const starred = mySchedule.ids.includes(session.id);

  return (
    <button
      type="button"
      aria-pressed={starred}
      onClick={() => mySchedule.toggle(session.id)}
      className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white hover:text-green-200 aria-pressed:text-green-200 focus-visible:outline-neutral-900"
    >
      <span className="sr-only">Save {session.title} to my schedule</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"
          fill={starred ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
