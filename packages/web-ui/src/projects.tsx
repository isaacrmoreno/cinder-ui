import { SectionHeading, SectionPhoto } from "./section-heading.js";
import type { SectionContentProps, SectionImage } from "./section-heading.js";
import type { LinkItem } from "./shared.js";
export type ProjectItem = { title: string; category?: string; description: string; image: SectionImage; detail?: string; action?: LinkItem };
export type ProjectsProps = SectionContentProps & { variant?: "cards" | "featured" | "list"; items: ProjectItem[] };
export function Projects({ variant = "cards", items, theme = "warm", id, className = "", style, ...heading }: ProjectsProps) {
  const ProjectHeading = heading.headingLevel === "h3" ? "h4" : "h3";
  return <section id={id} className={`cinder-section cinder-block cinder-projects cinder-projects--${variant} ${className}`} data-theme={theme} style={style}>
    <SectionHeading {...heading} />
    <div className="cinder-projects__items">{items.map((item, i) => <article className="cinder-project" key={i}><div className="cinder-project__image"><SectionPhoto image={item.image} /></div><div className="cinder-project__body">{item.category && <p className="cinder-kicker">{item.category}</p>}<ProjectHeading>{item.title}</ProjectHeading>{item.detail && <p className="cinder-project__detail">{item.detail}</p>}<p className="cinder-project__description">{item.description}</p>{item.action && <a className="cinder-service__link" href={item.action.href}>{item.action.label}<span aria-hidden="true">↗</span></a>}</div></article>)}</div>
  </section>;
}
