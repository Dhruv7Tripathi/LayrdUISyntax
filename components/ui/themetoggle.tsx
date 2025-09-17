"use client";

import * as React from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Themetoggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        "flex h-10 w-10  items-center text-3xl justify-center rounded-xl bg-transparent text-black hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-800",
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <RxMoon size={22} className="hidden  dark:block" />
      <RxSun size={22} className="block dark:hidden" />
    </button>
  );
}
