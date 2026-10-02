import type { Brand, LinkItem, SectionStyleProps } from "./shared.js";
export type HeaderProps = SectionStyleProps & {
  variant?: "classic" | "centered" | "compact";
  brand: Brand;
  links?: LinkItem[];
  action?: LinkItem;
  tagline?: string;
  navigationLabel?: string;
};
export function Header({ variant = "classic", brand, links = [], action, tagline, navigationLabel = "Main navigation", theme = "warm", id, className = "", style }: HeaderProps) {
  return <header id={id} className={`cinder-section cinder-header cinder-header--${variant} ${className}`} data-theme={theme} style={style}>
    <div className="cinder-header__bar">
      <a className="cinder-brand" href={brand.href}>{brand.logo ? <img src={brand.logo.src} alt={brand.logo.alt} /> : brand.name}</a>
      {tagline && <p className="cinder-header__tagline">{tagline}</p>}
      {links.length > 0 && <nav className="cinder-header__desktop" aria-label={navigationLabel}>{links.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}</nav>}
      {action && <a className="cinder-button cinder-header__action" href={action.href}>{action.label}<span aria-hidden="true">↗</span></a>}
      {links.length > 0 && <details className="cinder-header__mobile"><summary>Menu <span aria-hidden="true">＋</span></summary><nav aria-label={`${navigationLabel} mobile`}>{links.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}</nav></details>}
    </div>
  </header>;
}
