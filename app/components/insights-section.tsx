"use client";

import { useState } from "react";
import Image from "next/image";

const insightPosts = [
  {
    tag: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    tag: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const caseStudies = [
  {
    tag: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    tag: "Getting Started",
    title: "How we helped a fintech startup scale operations",
    company: "Shells",
  },
  {
    tag: "Case Study",
    title: "Digital transformation for modern banking",
    company: "SmartFinder",
  },
  {
    tag: "Getting Started",
    title: "How modern teams launch banking products faster",
    company: "ArtVenue",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 9H14M10 4.5L14.5 9L10 13.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SliderArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
      className={direction === "previous" ? "case-studies__arrow-icon--previous" : undefined}
    >
      <path
        d="M5 13H21M14.5 6.5L21 13L14.5 19.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <span className="case-card__company-icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M10.8 1.5 3.9 10.1h4.8L7.2 16.5l6.9-8.6H9.3l1.5-6.4Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function InsightCard({ post }: { post: (typeof insightPosts)[number] }) {
  return (
    <article className={post.featured ? "insight-card insight-card--featured" : "insight-card"}>
      {post.featured ? (
        <div className="insight-card__media" aria-hidden="true">
          <Image
            src="/assets/squares.png"
            alt=""
            width={430}
            height={430}
            sizes="(max-width: 767px) 80vw, 320px"
          />
        </div>
      ) : null}

      <div className="insight-card__body">
        <div className="insight-card__content">
          <p className="insight-card__category">{post.tag}</p>
          <h3>{post.title}</h3>
          <p className="insight-card__meta">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </p>
        </div>

        <a className="insight-card__button" href="#read-more">
          READ MORE
        </a>
      </div>
    </article>
  );
}

function CaseStudyCard({
  study,
  position,
}: {
  study: (typeof caseStudies)[number];
  position: "previous" | "active" | "next";
}) {
  return (
    <article className={`case-card case-card--${position}`} aria-hidden={position !== "active"}>
      <div className="case-card__media" aria-hidden="true">
        <Image
          src="/assets/squares.png"
          alt=""
          width={430}
          height={430}
          sizes="(max-width: 767px) 86vw, 420px"
        />
      </div>

      <div className="case-card__content">
        <p className="case-card__category">{study.tag}</p>
        <h3>{study.title}</h3>
        <p className="case-card__company">
          <SparkIcon />
          <span>{study.company}</span>
        </p>
        <a className="case-card__button" href="#case-study">
          READ MORE
        </a>
      </div>
    </article>
  );
}

export function InsightsSection() {
  const [caseIndex, setCaseIndex] = useState(0);

  const goToCase = (index: number) => {
    setCaseIndex((index + caseStudies.length) % caseStudies.length);
  };

  const visibleCases = [
    { position: "previous" as const, index: caseIndex - 1 },
    { position: "active" as const, index: caseIndex },
    { position: "next" as const, index: caseIndex + 1 },
  ];

  return (
    <>
      <section className="insights-section" aria-labelledby="insights-title">
        <div className="insights-section__intro">
          <div className="insights-section__glow" aria-hidden="true" />
          <h2 id="insights-title">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a className="insights-section__button" href="#insights">
            INSIGHTS
          </a>
        </div>

        <div className="insights-section__grid">
          <InsightCard post={insightPosts[0]} />

          <div className="insights-section__small-grid">
            {insightPosts.slice(1).map((post, index) => (
              <InsightCard post={post} key={`${post.title}-${index}`} />
            ))}
          </div>

          <a className="insights-section__all" href="#all-insights">
            <span>READ ALL</span>
            <span>INSIGHTS</span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="case-studies-section" aria-labelledby="case-studies-title">
        <h2 id="case-studies-title">Our Case Studies</h2>

        <div className="case-studies__carousel" aria-live="polite">
          {visibleCases.map((item) => {
            const normalizedIndex = (item.index + caseStudies.length) % caseStudies.length;
            return (
              <CaseStudyCard
                key={`${item.position}-${normalizedIndex}`}
                study={caseStudies[normalizedIndex]}
                position={item.position}
              />
            );
          })}
        </div>

        <div className="case-studies__controls">
          <button
            className="case-studies__nav"
            type="button"
            onClick={() => goToCase(caseIndex - 1)}
            aria-label="Previous case study"
          >
            <SliderArrowIcon direction="previous" />
          </button>

          <div className="case-studies__dots" aria-label="Case study slides">
            {caseStudies.map((study, index) => (
              <button
                key={study.company}
                type="button"
                className={
                  index === caseIndex ? "case-studies__dot is-active" : "case-studies__dot"
                }
                onClick={() => goToCase(index)}
                aria-label={`Show ${study.company} case study`}
                aria-current={index === caseIndex}
              />
            ))}
          </div>

          <button
            className="case-studies__nav"
            type="button"
            onClick={() => goToCase(caseIndex + 1)}
            aria-label="Next case study"
          >
            <SliderArrowIcon direction="next" />
          </button>

          <a className="case-studies__all" href="#case-studies">
            <span>VIEW ALL</span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="paperless-cta-section" aria-labelledby="paperless-cta-title">
        <div className="paperless-cta-section__copy">
          <h2 id="paperless-cta-title">Take the full advantage of going paper-less now.</h2>
          <p>
            CB7 helps your financial institution improve the client experience, automate and
            optimize procedures, simplify banking operations
          </p>
        </div>

        <div className="paperless-cta-section__actions">
          <a
            className="paperless-cta-section__button paperless-cta-section__button--outline"
            href="#contact-us"
          >
            CONTACT US
          </a>
          <a
            className="paperless-cta-section__button paperless-cta-section__button--primary"
            href="#request-demo"
          >
            REQUEST DEMO
          </a>
        </div>
      </section>
    </>
  );
}
