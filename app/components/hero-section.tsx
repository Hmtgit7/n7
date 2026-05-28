import Image from "next/image";
import { Navbar } from "./navbar";

const trustedLogos = [
  { src: "/trusted/shells.svg", name: "SHELLS", width: 18, height: 19 },
  { src: "/trusted/smart.svg", name: "SmartFinder", width: 20, height: 19 },
  { src: "/trusted/zommer.svg", name: "Zoomerr", width: 19, height: 19 },
  { src: "/trusted/art.svg", name: "ArtVenue", width: 33, height: 19 },
  { src: "/trusted/kontra.svg", name: "kontrastr", width: 14, height: 17 },
  { src: "/trusted/waves.svg", name: "WAVESMARATHON", width: 13, height: 19 },
];

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Navbar />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy" data-reveal="fade-right">
        <div className="hero-text">
          <h1 id="hero-title">The new foundation of modern banking</h1>
          <p>
            We drive innovation and growth, provide seamless customer experience and operational
            excellence
          </p>
        </div>

        <div className="hero-actions">
          <a className="hero-button hero-button--primary" href="#request-demo">
            REQUEST DEMO
          </a>
          <a className="hero-button hero-button--secondary" href="#contact">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true" data-reveal="scale" data-parallax="-0.06">
        <Image
          src="/assets/svg/hero-banking.svg"
          alt=""
          width={599}
          height={320}
          priority
          sizes="(max-width: 767px) 92vw, (max-width: 1199px) 52vw, 562px"
        />
      </div>

      <div className="trusted-row" aria-label="Trusted by" data-reveal="fade-up">
        <p>trusted by:</p>
        <div className="trusted-row__logos">
          {trustedLogos.map((logo) => (
            <div className="trusted-logo" key={logo.name}>
              <Image src={logo.src} alt="" width={logo.width} height={logo.height} />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
