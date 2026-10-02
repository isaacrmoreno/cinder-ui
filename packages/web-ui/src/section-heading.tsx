import type { SectionStyleProps } from "./shared.js";
export type SectionContentProps = SectionStyleProps & {
  title: string;
  eyebrow?: string;
  description?: string;
  headingLevel?: "h2" | "h3";
};
export type SectionImage = { src: string; alt: string; position?: string };
export function SectionHeading({ title, eyebrow, description, headingLevel: Heading = "h2" }: SectionContentProps) {
  return <div className="cinder-heading"><div>{eyebrow && <p className="cinder-kicker">{eyebrow}</p>}<Heading>{title}</Heading></div>{description && <p className="cinder-heading__description">{description}</p>}</div>;
}
export function SectionPhoto({ image }: { image: SectionImage }) {
  return <img src={image.src} alt={image.alt} style={{objectPosition:image.position}} width={1000} height={750} loading="lazy" />;
}
