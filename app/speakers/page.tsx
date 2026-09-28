import type { Metadata } from "next";
import { SpeakerDirectory } from "@/components/speaker-directory";

export const metadata: Metadata = {
  title: "Speakers",
  description: "The engineers speaking at DevHorizon 26.",
};

export default function SpeakersPage() {
  return (
    <div className="site-container flex flex-col gap-6 pt-8 md:pt-10">
      <h1 className="border-b border-neutral-600 pb-6 text-preset-2-mobile lowercase text-green-200 md:text-preset-2-tablet lg:text-preset-2">
        <span aria-hidden="true">{"// "}</span>
        speakers
      </h1>
      <SpeakerDirectory />
    </div>
  );
}
