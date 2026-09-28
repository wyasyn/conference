import Image from "next/image";
import type { Speaker } from "@/lib/conference";

export function SpeakerCard({
  speaker,
  titleAs: Title = "h3",
  eager = false,
  onOpen,
}: {
  speaker: Speaker;
  titleAs?: "h2" | "h3";
  /** Load the photo right away, for cards in the first viewport. */
  eager?: boolean;
  /** Makes the whole card a button that opens the speaker's details. */
  onOpen?: () => void;
}) {
  return (
    <article
      className={`relative flex w-full flex-col border border-neutral-600 bg-neutral-800 ${onOpen ? "transition hover:border-white hover:shadow-hard hover:shadow-neutral-100 has-focus-visible:border-dashed has-focus-visible:border-green-200 has-focus-visible:shadow-hard has-focus-visible:shadow-green-200" : ""}`}
    >
      <div className={`bg-grid relative aspect-318/250 ${speaker.color}`}>
        <Image
          src={`/speakers/${speaker.slug}.png`}
          alt=""
          fill
          sizes="(min-width: 64rem) 25vw, (min-width: 48rem) 50vw, 100vw"
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover object-bottom"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex flex-1 flex-col gap-1">
          <Title className="text-preset-3 lowercase">
            {onOpen ? (
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={onOpen}
                className="cursor-pointer text-left lowercase outline-none after:absolute after:inset-0"
              >
                {speaker.name}
              </button>
            ) : (
              speaker.name
            )}
          </Title>
          <p className="text-preset-6 uppercase text-neutral-200">
            {speaker.role} @{speaker.company}
          </p>
        </div>
        <p className="border-t border-neutral-600 pt-4 text-preset-6-medium uppercase text-green-200">
          {speaker.talk}
        </p>
      </div>
    </article>
  );
}
