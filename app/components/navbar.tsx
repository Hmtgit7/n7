"use client";

import { useEffect, useRef, useState } from "react";

const NavChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path
      d="M2 3.5L5 6.5L8 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    {open ? (
      <>
        <path d="M4 4L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M3 5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 15H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative z-10 flex justify-center px-4 pt-5 pb-0 md:px-8">
      <div className="w-full max-w-[900px]" ref={ref}>
        <nav
          className="flex w-full items-center justify-between rounded-[14px] border border-white/[0.07] px-3 py-2 font-normal md:py-3"
          style={{
            background: "rgba(47,47,47,0.698)",
            fontFamily: "'Chivo Mono', monospace",
          }}
        >
          <span className="select-none text-[18px] font-bold tracking-normal text-white">N7</span>

          <div className="hidden items-center gap-9 md:flex">
            {["Solutions", "Resources"].map((item) => (
              <button
                key={item}
                type="button"
                className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/70"
              >
                {item}
                <NavChevron />
              </button>
            ))}
            <button
              type="button"
              className="text-[11px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/70"
            >
              About Us
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 text-[10px] tracking-[0.16em] text-white uppercase transition-all hover:bg-white/5 md:px-6 md:py-2.5 md:text-[11px]"
              style={{ border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8 }}
            >
              Request Demo
            </button>

            <button
              className="rounded-lg p-1.5 transition-all hover:bg-white/5 md:hidden"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </nav>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
          style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
        >
          <div
            className="mt-1 flex flex-col gap-3 rounded-[14px] border border-white/[0.07] px-4 py-3"
            style={{
              background: "rgba(47,47,47,0.95)",
              fontFamily: "'Chivo Mono', monospace",
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: "transform 0.3s ease",
            }}
          >
            {["Solutions", "Resources"].map((item) => (
              <button
                key={item}
                type="button"
                className="flex items-center gap-1.5 text-left text-[11px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/70"
              >
                {item}
                <NavChevron />
              </button>
            ))}
            <button
              type="button"
              className="text-left text-[11px] tracking-[0.16em] text-white uppercase transition-colors hover:text-white/70"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
