"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-IE", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/Dublin" });

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 15000);
  return () => window.clearInterval(interval);
}

const readTime = () => formatter.format(new Date());
const readServerTime = () => "";

export function LocalTime() {
  const time = useSyncExternalStore(subscribe, readTime, readServerTime);

  return (
    <p className="min-h-6 font-mono text-sm">
      {time && <>It&apos;s <time>{time}</time> in Portlaoise right now.</>}
    </p>
  );
}
