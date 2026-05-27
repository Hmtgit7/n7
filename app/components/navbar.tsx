"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-shell" ref={ref} data-scrolled={scrolled}>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar__brand">
          <Image
            className="select-none"
            src="/assets/svg/logo.svg"
            alt="N7"
            width={29}
            height={17}
            priority
          />
        </div>

        <div className="navbar__links">
          {["Solutions", "Resources"].map((item) => (
            <button key={item} type="button" className="navbar__link">
              {item}
              <NavChevron />
            </button>
          ))}
          <button type="button" className="navbar__link navbar__link--plain">
            About Us
          </button>
        </div>

        <div className="navbar__actions">
          <button type="button" className="navbar__demo">
            Request Demo
          </button>

          <button
            className="navbar__toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </nav>

      <div className="navbar__mobile-panel" data-open={open}>
        {["Solutions", "Resources"].map((item) => (
          <button key={item} type="button" className="navbar__mobile-link">
            {item}
            <NavChevron />
          </button>
        ))}
        <button type="button" className="navbar__mobile-link">
          About Us
        </button>
        <button type="button" className="navbar__mobile-demo">
          Request Demo
        </button>
      </div>
    </div>
  );
}
