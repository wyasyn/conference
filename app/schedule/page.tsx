import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ScheduleBoard,
  ScheduleBoardFromUrl,
} from "@/components/schedule-board";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Three days of talks on frontend, performance, accessibility and tooling.",
};

export default function SchedulePage() {
  return (
    <div className="site-container flex flex-col gap-6 pt-8 md:pt-10">
      <h1 className="text-preset-2-mobile lowercase text-green-200 md:text-preset-2-tablet lg:text-preset-2">
        <span aria-hidden="true">{"// "}</span>
        schedule
      </h1>
      <div>
        <Suspense fallback={<ScheduleBoard />}>
          <ScheduleBoardFromUrl />
        </Suspense>
      </div>
    </div>
  );
}
