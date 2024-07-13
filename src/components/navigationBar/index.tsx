import { useState } from "react";
import { clsx } from "clsx";

import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { NAVIGATION_LIST } from "@/data/navigationList";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = (status: boolean) => setIsMenuOpen(status);

  return (
    <nav className="flex w-full items-center justify-between py-5">
      <div
        className={clsx("absolute left-0 top-0 overflow-hidden bg-primary transition-all duration-300 lg:hidden", {
          "h-0 w-0 rounded-ee-full": !isMenuOpen,
          "h-screen w-full rounded-none": isMenuOpen,
        })}
      >
        <div className="flex h-full flex-col gap-y-6 px-4 py-6 text-white sm:px-8">
          <button type="button" className="" onClick={() => onMenuClick(false)}>
            <X className="size-10 sm:size-8" />
          </button>
          <ul className="flex-1 flex flex-col items-center justify-center gap-y-6">
            {NAVIGATION_LIST.map((item, idx) => {
              if (item.isVariant) return null;

              return (
                <li key={idx} className="font-semibold">
                  <a
                    href={item.path}
                    onClick={() => onMenuClick(false)}
                    className="relative block text-4xl after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-white after:transition-all hover:after:w-[90%]"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button type="button" className="lg:hidden" onClick={() => onMenuClick(true)}>
          <Menu className="size-10 sm:size-8" />
        </button>
        <div className="flex items-center gap-x-1.5">
          <Logo className="size-8" />
          <span className="text-3xl font-bold">Cashierc</span>
        </div>
      </div>
      <ul className="hidden lg:block">
        {NAVIGATION_LIST.map((item, idx) => (
          <li
            key={idx}
            className={clsx("inline-block font-semibold", {
              "ml-4": idx !== 0,
              "mr-4": idx !== NAVIGATION_LIST.length - 1,
            })}
          >
            <a
              href={item.path}
              className={clsx({
                "rounded-xl bg-primary px-6 py-2.5 text-white": item.isVariant,
                "relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-foreground after:transition-all hover:after:w-[90%]":
                  !item.isVariant,
              })}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
