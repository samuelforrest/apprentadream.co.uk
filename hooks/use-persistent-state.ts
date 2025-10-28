"use client";

import { useEffect, useState } from "react";

type Options = {
  version?: string;
  ttlMs?: number;
};

type Box<T> = {
  v?: string;
  exp?: number | null;
  value: T;
};

export function usePersistentState<T>(
  key: string,
  initialValue: T,
  { version, ttlMs }: Options = {}
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return;

      const box: Box<T> = JSON.parse(raw);

      const expired = box.exp != null && Date.now() > box.exp;
      const versionChanged = version && box.v !== version;

      if (expired || versionChanged) {
        window.localStorage.removeItem(key);
        return;
      }

      setValue(box.value);
    } catch {}
  }, [key, version]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const box: Box<T> = {
      v: version,
      exp: ttlMs ? Date.now() + ttlMs : null,
      value,
    };

    try {
      window.localStorage.setItem(key, JSON.stringify(box));
    } catch {}
  }, [key, value, version, ttlMs]);

  const clear = () => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      // do nothing
    }
    setValue(initialValue);
  };

  return [value, setValue, clear];
}
