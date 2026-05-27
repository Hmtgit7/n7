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

export function InsightsSection() {
  return (
    <section className="insights-section" aria-labelledby="insights-title">
      <div className="insights-section__intro">
        <div className="insights-section__glow" aria-hidden="true" />
        <h2 id="insights-title">Get yourself up-to-speed on all the things happening in fintech</h2>
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
  );
}
