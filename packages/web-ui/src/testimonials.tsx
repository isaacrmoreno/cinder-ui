import { SectionHeading, SectionPhoto } from "./section-heading.js";
import type { SectionContentProps, SectionImage } from "./section-heading.js";
export type TestimonialItem = { quote: string; name: string; detail?: string; image?: SectionImage };
export type TestimonialsProps = SectionContentProps & { variant?: "cards" | "featured" | "portrait"; items: TestimonialItem[] };
export function Testimonials({ variant = "cards", items, theme = "warm", id, className = "", style, ...heading }: TestimonialsProps) {
  return <section id={id} className={`cinder-section cinder-block cinder-testimonials cinder-testimonials--${variant} ${className}`} data-theme={theme} style={style}>
    <SectionHeading {...heading} />
    <div className="cinder-testimonials__items">{items.map((item, i) => <figure className="cinder-quote" key={i}>
      {variant === "portrait" && item.image && <div className="cinder-quote__photo"><SectionPhoto image={item.image} /></div>}
      <div className="cinder-quote__body"><span className="cinder-quote__mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><figcaption>{variant !== "portrait" && item.image && <span className="cinder-quote__avatar"><SectionPhoto image={item.image} /></span>}<span><strong>{item.name}</strong>{item.detail && <span className="cinder-quote__detail">{item.detail}</span>}</span></figcaption></div>
    </figure>)}</div>
  </section>;
}
