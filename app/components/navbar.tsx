"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "solutions", hasMenu: true },
  { label: "resources", hasMenu: true },
  { label: "About us", hasMenu: false },
];

function NavChevron() {
  return (
    <svg className="nav-chevron" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3.2 5.1 7 8.9l3.8-3.8" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="nav-menu-icon" viewBox="0 0 20 20" aria-hidden="true">
      {open ? (
        <>
          <path d="M5 5 15 15" />
          <path d="M15 5 5 15" />
        </>
      ) : (
        <>
          <path d="M4 6h12" />
          <path d="M4 10h12" />
          <path d="M4 14h12" />
        </>
      )}
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="site-nav__brand" href="/" aria-label="N7 home">
          N7
        </Link>

        <div className="site-nav__content">
          <div className="site-nav__links">
            {navLinks.map((item) => (
              <a className="site-nav__link" href="#" key={item.label}>
                <span>{item.label}</span>
                {item.hasMenu ? <NavChevron /> : null}
              </a>
            ))}
          </div>

          <div className="site-nav__actions">
            <a className="site-nav__contact" href="#contact">
              Contact Us
            </a>
            <a className="site-nav__demo" href="#request-demo">
              request demo
            </a>
          </div>
        </div>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <div className="site-nav__mobile-panel" data-open={open}>
        {navLinks.map((item) => (
          <a className="site-nav__mobile-link" href="#" key={item.label}>
            <span>{item.label}</span>
            {item.hasMenu ? <NavChevron /> : null}
          </a>
        ))}
        <a className="site-nav__mobile-demo" href="#request-demo">
          request demo
        </a>
      </div>
    </header>
  );
}
