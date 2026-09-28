"use client";

import { useSyncExternalStore } from "react";

const storageKey = "devhorizon:my-schedule";
const listeners = new Set<() => void>();

function read() {
  try {
    return localStorage.getItem(storageKey) ?? "";
  } catch {
    return "";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Starred session ids, kept in this browser only. */
export function useMySchedule() {
  const raw = useSyncExternalStore(subscribe, read, () => "");
  const ids = raw ? raw.split(",") : [];

  function toggle(id: string) {
    const next = ids.includes(id)
      ? ids.filter((saved) => saved !== id)
      : [...ids, id];
    try {
      localStorage.setItem(storageKey, next.join(","));
    } catch {
      // Storage can be blocked. Starring just won't persist.
    }
    for (const listener of listeners) listener();
  }

  return { ids, toggle };
}
