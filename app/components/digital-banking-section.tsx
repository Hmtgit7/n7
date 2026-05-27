import Image from "next/image";

const firstFeatures = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const secondFeatures = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const thirdFeatures = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

const tickerItems = [
  { type: "brand", label: "N7" },
  { type: "text", label: "Say \u{1F44B}" },
  { type: "text", label: "to the new way of banking" },
  { type: "brand", label: "CB7" },
  { type: "text", label: "Say \u{1F44B}" },
  { type: "text", label: "to the new way of banking" },
];

function TickerStar() {
  return (
    <svg
      className="digital-ticker__star"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M28 0V56M0 28H56M8.2 8.2L47.8 47.8M47.8 8.2L8.2 47.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

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

function CheckIcon() {
  return (
    <span className="digital-check" aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path
          d="M3.2 7.2 5.8 9.8 10.9 4.4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="digital-feature-list">
      {items.map((item) => (
        <div className="digital-feature-list__item" key={item}>
          <CheckIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section className="digital-banking-section" aria-labelledby="digital-banking-title">
      <div className="digital-ticker" aria-label="N7 and CB7 banking message">
        <div className="digital-ticker__track">
          {[0, 1].map((group) => (
            <div className="digital-ticker__group" key={group} aria-hidden={group === 1}>
              {tickerItems.map((item, index) => (
                <span className="digital-ticker__item" key={`${group}-${item.label}-${index}`}>
                  <TickerStar />
                  <span className={item.type === "brand" ? "digital-ticker__brand" : undefined}>
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          ))}
          <TickerStar />
          <span className="digital-ticker__brand">N7</span>
          <TickerStar />
          <span>Say 👋</span>
          <span>to the new way of banking</span>
          <TickerStar />
          <span className="digital-ticker__brand">CB7</span>
          <TickerStar />
          <span>Say</span>
        </div>
      </div>

      <div className="digital-banking-section__canvas">
        <div className="digital-ghost digital-ghost--n7" aria-hidden="true">
          N7
        </div>
        <div className="digital-ghost digital-ghost--spin" aria-hidden="true" />
        <div className="digital-ghost digital-ghost--seven" aria-hidden="true">
          7
        </div>

        <div className="digital-intro">
          <h2 id="digital-banking-title">Digital banking out-of-the-box</h2>
          <p>
            N7 helps your financial institution improve the client experience, automate and optimize
            procedures
          </p>
          <a className="digital-button digital-button--primary" href="#request-demo">
            REQUEST DEMO
          </a>
          <a className="digital-link" href="#learn-more">
            <span>LEARN MORE</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="digital-phone digital-phone--one" aria-hidden="true">
          <Image src="/assets/svg/mob-1.svg" alt="" width={265} height={520} priority />
        </div>

        <article className="digital-copy digital-copy--one">
          <h3>Fully compliant with regulatory requirement</h3>
          <p>
            The governance of risk management with regulations is achieved by our risk management
            framework that is fully integrated to work with digital bank&apos;s operational-risk
            protocols and procedures.
          </p>
          <FeatureList items={firstFeatures} />
        </article>

        <article className="digital-copy digital-copy--two">
          <h3>No legacy IT systems</h3>
          <p>
            Our Digital Banking solution and multilayered approach help financial institutions take
            advantage of digital transformation by ensuring customer trust and regulatory
            compliance.
          </p>
          <FeatureList items={secondFeatures} />
        </article>

        <div className="digital-phone digital-phone--two" aria-hidden="true">
          <Image src="/assets/svg/mob-2.svg" alt="" width={265} height={520} />
        </div>

        <div className="digital-phone digital-phone--three" aria-hidden="true">
          <Image src="/assets/svg/mob-3.svg" alt="" width={265} height={520} />
        </div>

        <article className="digital-copy digital-copy--three">
          <h3>No traditional branches</h3>
          <p>
            Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing
            risks and optimising operational costs for a seamless branchless experience.
          </p>
          <FeatureList items={thirdFeatures} />
        </article>

        <div className="digital-cta">
          <div className="digital-cta__ghost" aria-hidden="true">
            N7
          </div>
          <div className="digital-cta__copy">
            <h2>Take the full advantage of going paper-less now.</h2>
            <p>
              N7 helps your financial institution improve the client experience, automate and
              optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="digital-cta__actions">
            <a className="digital-button digital-button--outline" href="#contact-us">
              CONTACT US
            </a>
            <a className="digital-button digital-button--primary" href="#request-demo">
              REQUEST DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
