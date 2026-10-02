import { SectionHeading, SectionPhoto } from "./section-heading.js";
import type { SectionContentProps, SectionImage } from "./section-heading.js";
export type GalleryItem = { image: SectionImage; caption?: string; href?: string };
export type GalleryProps = SectionContentProps & { variant?: "grid" | "mosaic" | "strip"; items: GalleryItem[] };
export function Gallery({ variant = "grid", items, theme = "warm", id, className = "", style, ...heading }: GalleryProps) {
  return <section id={id} className={`cinder-section cinder-block cinder-gallery cinder-gallery--${variant} ${className}`} data-theme={theme} style={style}>
    <SectionHeading {...heading} />
    <div className="cinder-gallery__items" {...(variant === "strip" ? {tabIndex:0, role:"region", "aria-label":`${heading.title} — horizontally scrollable images`} : {})}>{items.map((item, i) => <figure key={i}>{item.href ? <a className="cinder-gallery__image" href={item.href} aria-label={item.caption || item.image.alt || `View image ${i + 1}`}><SectionPhoto image={item.image} /></a> : <div className="cinder-gallery__image"><SectionPhoto image={item.image} /></div>}{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div>
  </section>;
}
