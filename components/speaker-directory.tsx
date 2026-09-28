"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { SessionTicket } from "@/components/session-ticket";
import { SpeakerCard } from "@/components/speaker-card";
import { StarButton } from "@/components/star-button";
import { type Speaker, sessions, speakers } from "@/lib/conference";

function SpeakerDetails({
  speaker,
  titleId,
  onClose,
}: {
  speaker: Speaker;
  titleId: string;
  onClose: () => void;
}) {
  const session = sessions.find((s) => s.speakerSlug === speaker.slug);

  return (
    <div className="relative flex flex-col p-6 md:p-8 lg:p-10">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 flex size-10 cursor-pointer items-center justify-center border border-white transition-colors hover:border-green-200 hover:text-green-200 md:top-5 md:right-5"
      >
        <span className="sr-only">Close</span>
        <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3">
          <path
            d="m1 1 10 10M11 1 1 11"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      <div className="flex flex-col gap-4 border-b border-neutral-600 pb-5 md:flex-row md:items-center md:gap-4 md:pr-14">
        <div
          className={`bg-grid relative aspect-318/250 w-38 shrink-0 ${speaker.color}`}
        >
          <Image
            src={`/speakers/${speaker.slug}.png`}
            alt=""
            fill
            sizes="152px"
            className="object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 id={titleId} className="text-preset-3 lowercase">
            {speaker.name}
          </h2>
          <p className="text-preset-6 uppercase text-neutral-200">
            {speaker.role} @{speaker.company}
          </p>
        </div>
      </div>

      <p className="border-b border-neutral-600 py-5 text-preset-6">
        {speaker.bio}
      </p>

      {session && (
        <section aria-labelledby={`${titleId}-talk`} className="pt-5">
          <h3
            id={`${titleId}-talk`}
            className="mb-4 text-preset-6-extrabold uppercase text-green-200"
          >
            <span aria-hidden="true">{"// "}</span>Talk
          </h3>
          <SessionTicket
            session={session}
            titleAs="h4"
            details={false}
            action={<StarButton session={session} />}
          />
        </section>
      )}
    </div>
  );
}

/** The speaker grid. Each card opens a modal with the bio and talk. */
export function SpeakerDirectory() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [selected, setSelected] = useState<Speaker | null>(null);

  function open(speaker: Speaker) {
    setSelected(speaker);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {speakers.map((speaker, i) => (
          <li key={speaker.slug} className="flex">
            <SpeakerCard
              speaker={speaker}
              titleAs="h2"
              eager={i < 2}
              onOpen={() => open(speaker)}
            />
          </li>
        ))}
      </ul>

      {/* Escape closes the dialog natively. The click handler only adds
          "click the backdrop to close" for pointer users. */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Escape is built in */}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="modal m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-200 overflow-y-auto border border-neutral-600 bg-neutral-900 text-white md:w-[calc(100%-4rem)]"
      >
        {selected && (
          <SpeakerDetails
            speaker={selected}
            titleId={titleId}
            onClose={close}
          />
        )}
      </dialog>
    </>
  );
}
