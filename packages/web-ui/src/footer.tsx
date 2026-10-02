import type { Brand, LinkItem, SectionStyleProps } from "./shared.js";
export type FooterProps = SectionStyleProps & {
  variant?: "minimal" | "columns" | "cta";
  brand: Brand;
  description?: string;
  groups?: { title: string; links: LinkItem[] }[];
  legalLinks?: LinkItem[];
  copyright: string;
  headline?: string;
  action?: LinkItem;
  headingLevel?: "h2" | "h3";
};
export function Footer({ variant = "minimal", brand, description, groups = [], legalLinks = [], copyright, headline, action, headingLevel: Heading = "h2", theme = "warm", id, className = "", style }: FooterProps) {
  return <footer id={id} className={`cinder-section cinder-footer cinder-footer--${variant} ${className}`} data-theme={theme} style={style}>
    {variant === "cta" && (headline || action) && <div className="cinder-footer__cta">{headline && <Heading>{headline}</Heading>}{action && <a className="cinder-button" href={action.href}>{action.label}<span aria-hidden="true">↗</span></a>}</div>}
    <div className="cinder-footer__main">
      <div className="cinder-footer__intro"><a className="cinder-brand" href={brand.href}>{brand.logo ? <img src={brand.logo.src} alt={brand.logo.alt} /> : brand.name}</a>{description && <p>{description}</p>}</div>
      {groups.length > 0 && <div className="cinder-footer__groups">{groups.map((group, i) => <nav key={i} aria-label={group.title}><p className="cinder-kicker">{group.title}</p>{group.links.map((link, j) => <a key={j} href={link.href}>{link.label}</a>)}</nav>)}</div>}
    </div>
    <div className="cinder-footer__bottom"><small>{copyright}</small>{legalLinks.length > 0 && <nav aria-label="Footer information">{legalLinks.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}</nav>}</div>
  </footer>;
}
