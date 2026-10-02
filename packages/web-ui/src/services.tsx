import type { LinkItem, SectionStyleProps } from "./shared.js";
export type ServiceItem = {
  title: string;
  description: string;
  image?: { src: string; alt: string; position?: string };
  action?: LinkItem;
  label?: string;
};
export type ServicesProps = SectionStyleProps & {
  variant?: "cards" | "rows" | "numbered";
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
  headingLevel?: "h2" | "h3";
};
export function Services({ variant = "cards", eyebrow, title, description, items, headingLevel = "h2", theme = "warm", id, className = "", style }: ServicesProps) {
  const Heading = headingLevel;
  const ItemHeading = headingLevel === "h2" ? "h3" : "h4";
  return <section id={id} className={`cinder-section cinder-services cinder-services--${variant} ${className}`} data-theme={theme} style={style}>
    <div className="cinder-services__intro"><div>{eyebrow && <p className="cinder-kicker">{eyebrow}</p>}<Heading>{title}</Heading></div>{description && <p className="cinder-services__description">{description}</p>}</div>
    <div className="cinder-services__items">{items.map((item, i) => <article className="cinder-service" key={i}>
      {variant === "numbered" ? <span className="cinder-service__number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span> : item.image && <div className="cinder-service__media"><img src={item.image.src} alt={item.image.alt} style={{objectPosition:item.image.position}} width={800} height={560} loading="lazy" /></div>}
      <div className="cinder-service__body">{item.label && <p className="cinder-kicker">{item.label}</p>}<ItemHeading>{item.title}</ItemHeading><p className="cinder-service__description">{item.description}</p>{item.action && <a className="cinder-service__link" href={item.action.href}>{item.action.label}<span aria-hidden="true">↗</span></a>}</div>
    </article>)}</div>
  </section>;
}
