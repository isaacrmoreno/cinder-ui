import { SectionHeading } from "./section-heading.js";
import type { SectionContentProps } from "./section-heading.js";
export type FAQItem = { question: string; answer: string };
export type FAQProps = SectionContentProps & (
  | { variant?: "accordion" | "columns"; items: FAQItem[]; groups?: never }
  | { variant: "grouped"; groups: { title: string; items: FAQItem[] }[]; items?: never }
);
function Questions({ items }: { items: FAQItem[] }) {
  return <div className="cinder-faq__questions">{items.map((item, i) => <details className="cinder-faq__question" key={i}><summary>{item.question}<span className="cinder-faq__toggle" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>;
}
export function FAQ({ variant = "accordion", items, groups, theme = "warm", id, className = "", style, ...heading }: FAQProps) {
  const QuestionHeading = heading.headingLevel === "h3" ? "h4" : "h3";
  return <section id={id} className={`cinder-section cinder-block cinder-faq cinder-faq--${variant} ${className}`} data-theme={theme} style={style}>
    <SectionHeading {...heading} />
    {variant === "grouped" ? <div className="cinder-faq__groups">{groups?.map((group, i) => <div className="cinder-faq__group" key={i}><QuestionHeading>{group.title}</QuestionHeading><Questions items={group.items} /></div>)}</div> : variant === "columns" ? <div className="cinder-faq__columns">{items?.map((item, i) => <article key={i}><QuestionHeading>{item.question}</QuestionHeading><p>{item.answer}</p></article>)}</div> : <Questions items={items ?? []} />}
  </section>;
}
