"use client";

import { useEffect } from "react";

const getMotionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = getMotionPreference();
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;

        const speed = Number(item.dataset.parallax || 0.08);
        const distance = (rect.top + rect.height / 2 - viewportCenter) * speed;
        const clamped = Math.max(-36, Math.min(36, distance));

        item.style.setProperty("--parallax-y", `${clamped.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
