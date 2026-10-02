import type { CSSProperties } from "react";
import type { Theme } from "./shared.js";

export type HeroAction = { label: string; href: string };
export type HeroImage = { src: string; alt: string; position?: string };
export type HeroTheme = Theme;
type SharedProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  theme?: HeroTheme;
  /** Optional supporting text beneath the actions. */
  note?: string;
  /** Defaults to h1. Use h2 when another section owns the page heading. */
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
  /** Override --cinder-* CSS variables to apply customer branding. */
  style?: CSSProperties & { [key: `--cinder-${string}`]: string | number };
};
export type HeroProps = SharedProps & (
  | { variant?: "centered"; image?: HeroImage }
  | { variant: "split" | "image-overlay"; image: HeroImage }
);

export function Hero({
  variant = "centered", eyebrow, title, description, primaryAction,
  secondaryAction, image, theme = "warm", note, headingLevel: Heading = "h1",
  className = "", style, id,
}: HeroProps) {
  return (
    <section id={id} className={`cinder-hero cinder-hero--${variant} ${className}`.trim()} data-theme={theme} style={style}>
      {image && (
        <div className="cinder-hero__media">
          <img className="cinder-hero__image" src={image.src} alt={image.alt}
            style={{ objectPosition: image.position }} width={1600} height={1100}
            fetchPriority={Heading === "h1" ? "high" : "auto"} loading={Heading === "h1" ? "eager" : "lazy"} />
        </div>
      )}
      <div className="cinder-hero__content">
        {eyebrow && <p className="cinder-hero__eyebrow"><span aria-hidden="true" />{eyebrow}</p>}
        <Heading className="cinder-hero__title">{title}</Heading>
        {description && <p className="cinder-hero__description">{description}</p>}
        {(primaryAction || secondaryAction) && <div className="cinder-hero__actions">
          {primaryAction && <a className="cinder-hero__action cinder-hero__action--primary" href={primaryAction.href}>{primaryAction.label}<span aria-hidden="true">↗</span></a>}
          {secondaryAction && <a className="cinder-hero__action cinder-hero__action--secondary" href={secondaryAction.href}>{secondaryAction.label}<span aria-hidden="true">→</span></a>}
        </div>}
        {note && <p className="cinder-hero__note">{note}</p>}
      </div>
    </section>
  );
}
