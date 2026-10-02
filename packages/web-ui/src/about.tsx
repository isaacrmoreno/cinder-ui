import { SectionHeading, SectionPhoto } from "./section-heading.js";
import type { SectionContentProps, SectionImage } from "./section-heading.js";
import type { LinkItem } from "./shared.js";
export type TeamMember = { name: string; role: string; image?: SectionImage; bio?: string };
export type AboutProps = SectionContentProps & {
  paragraphs?: string[];
  action?: LinkItem;
} & (
  | { variant?: "story"; image: SectionImage; facts?: never; members?: never }
  | { variant: "facts"; facts: { value: string; label: string }[]; image?: never; members?: never }
  | { variant: "team"; members: TeamMember[]; image?: never; facts?: never }
);
export function About({ variant = "story", paragraphs = [], action, theme = "warm", id, className = "", style, image, facts, members, ...heading }: AboutProps) {
  const MemberHeading = heading.headingLevel === "h3" ? "h4" : "h3";
  return <section id={id} className={`cinder-section cinder-block cinder-about cinder-about--${variant} ${className}`} data-theme={theme} style={style}>
    {variant === "story" && image && <div className="cinder-about__image"><SectionPhoto image={image} /></div>}
    <div className="cinder-about__story"><SectionHeading {...heading} />{paragraphs.map((p, i) => <p className="cinder-about__paragraph" key={i}>{p}</p>)}{action && <a className="cinder-button" href={action.href}>{action.label}<span aria-hidden="true">↗</span></a>}</div>
    {variant === "facts" && facts && <dl className="cinder-about__facts">{facts.map((fact, i) => <div key={i}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
    {variant === "team" && members && <div className="cinder-about__team">{members.map((member, i) => <article key={i}>{member.image && <div className="cinder-about__portrait"><SectionPhoto image={member.image} /></div>}<MemberHeading>{member.name}</MemberHeading><p className="cinder-kicker">{member.role}</p>{member.bio && <p className="cinder-about__paragraph">{member.bio}</p>}</article>)}</div>}
  </section>;
}
