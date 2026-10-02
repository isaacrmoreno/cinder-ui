import { About, FAQ, Footer, Gallery, Header, Hero, Projects, Services, Testimonials } from "@isaacrmoreno/cinder-ui";
import type { ReactNode } from "react";
import { StyleGuide } from "./style-guide";

const brand = { name: "fieldwork.", href: "#top" };
const links = [
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#heroes" },
  { label: "Contact", href: "mailto:hello@example.com" },
];
const action = { label: "Let’s talk", href: "mailto:hello@example.com" };
const items = [
  { title: "Spaces to call your own", description: "Considered new builds that bring your everyday life into focus, from first ideas to the final details.", label: "01 / New homes", image: { src: "/photos/architecture.jpg", alt: "A bright contemporary office interior", position: "30% center" }, action: { label: "Discuss a new build", href: "mailto:hello@example.com?subject=New%20home" } },
  { title: "Room for what’s next", description: "Thoughtful renovations that keep what you love and make room for the way you want to live.", label: "02 / Renovations", image: { src: "/photos/interiors.jpg", alt: "A bright living room with natural materials", position: "center" }, action: { label: "Plan a renovation", href: "mailto:hello@example.com?subject=Renovation" } },
  { title: "A little closer to nature", description: "Outdoor spaces that feel like a natural extension of home. Built for slow mornings and shared evenings.", label: "03 / Outdoor living", image: { src: "/photos/botanical.jpg", alt: "Green foliage against a light background", position: "90% center" }, action: { label: "Explore your outdoors", href: "mailto:hello@example.com?subject=Outdoor%20living" } },
];
const groups = [
  { title: "Explore", links: [{ label: "Our services", href: "#services" }, { label: "Our approach", href: "#heroes" }, { label: "Back to top", href: "#top" }] },
  { title: "Say hello", links: [{ label: "hello@example.com", href: "mailto:hello@example.com" }, { label: "Start a project", href: "mailto:hello@example.com?subject=New%20project" }] },
];

const sampleQuotes = [
  { quote: "They listened to how we wanted to live, not just what we wanted to build. Every corner feels like us.", name: "Alex & Morgan", detail: "Home renovation · Fictional testimonial", image: { src: "/person-1.svg", alt: "Illustrated fictional customer" } },
  { quote: "The whole process felt clear and considered. We always knew what was happening and what came next.", name: "Jordan Lee", detail: "New home · Fictional testimonial", image: { src: "/person-2.svg", alt: "Illustrated fictional customer" } },
  { quote: "Our garden has become our favorite room. We spend more time outside than we ever imagined.", name: "Sam Taylor", detail: "Garden design · Fictional testimonial", image: { src: "/person-3.svg", alt: "Illustrated fictional customer" } },
];
const team = [
  { name: "Alex Parker", role: "Design director", bio: "Bringing the big picture and the smallest details together.", image: { src: "/person-1.svg", alt: "Illustrated fictional team member Alex" } },
  { name: "Jordan Ellis", role: "Project lead", bio: "A steady hand from the first conversation to the final walkthrough.", image: { src: "/person-2.svg", alt: "Illustrated fictional team member Jordan" } },
  { name: "Sam Rivera", role: "Landscape designer", bio: "Making a little more room for nature in everyday life.", image: { src: "/person-3.svg", alt: "Illustrated fictional team member Sam" } },
];
const questions = [
  { question: "Where do we begin?", answer: "Start with a conversation about your space, your priorities, and what you have in mind. From there, we agree on the next steps together." },
  { question: "Do we need a finished brief?", answer: "Not at all. A few ideas, photographs, or a list of things that are not working can be a useful starting point. We help you turn those into a clear brief." },
  { question: "Can you work with our existing home?", answer: "Yes. Renovations start with understanding what makes your home special, then looking at what could work better for your everyday life." },
  { question: "How is the budget agreed?", answer: "We discuss your budget early and explain what is included in the proposed scope. Any changes are discussed before additional work goes ahead." },
  { question: "How long will our project take?", answer: "Timing depends on the scope, approvals, and availability of materials. We outline an expected schedule once we understand the project and keep you informed as it develops." },
  { question: "Will we be involved along the way?", answer: "Absolutely. We agree on regular check-ins and the decisions you will need to make, so you always know where things stand." },
];
const galleryImages = [
  { image: { src: "/photos/architecture.jpg", alt: "A spacious contemporary office interior" }, caption: "01 / At home in the landscape" },
  { image: { src: "/photos/interiors.jpg", alt: "A bright living room with natural materials" }, caption: "02 / Light, warmth, and a little quiet" },
  { image: { src: "/photos/botanical.jpg", alt: "Green foliage on a light background" }, caption: "03 / A slower pace outside" },
  { image: { src: "/photos/interiors.jpg", alt: "A bright furnished living room", position: "left center" }, caption: "04 / Space for everyday rituals" },
  { image: { src: "/photos/botanical.jpg", alt: "A close view of green foliage", position: "right center" }, caption: "05 / Made for long afternoons" },
];
const sampleProjects = [
  { title: "The hillside house", category: "New home", detail: "Concept project / 2026", description: "A home that follows the landscape, with open living spaces and a quieter connection to the outdoors.", image: galleryImages[0].image, action: { label: "Discuss a similar project", href: "mailto:hello@example.com?subject=Hillside%20house" } },
  { title: "A warmer welcome", category: "Renovation", detail: "Concept project / 2026", description: "Natural materials, thoughtful storage, and a brighter plan give a familiar home room to grow.", image: galleryImages[1].image, action: { label: "Discuss a renovation", href: "mailto:hello@example.com?subject=Renovation" } },
  { title: "The everyday escape", category: "Landscape", detail: "Concept project / 2026", description: "A sheltered garden that turns an overlooked corner into a place to gather, unwind, and stay a while.", image: galleryImages[2].image, action: { label: "Discuss a garden", href: "mailto:hello@example.com?subject=Garden" } },
];

const copyright = "© 2026 Fieldwork. Fictional business for demonstration.";
function ExampleLabel({ children }: { children: ReactNode }) {
  return <p className="demo-example-label">{children}</p>;
}
function GroupTitle({ number, title }: { number: string; title: string }) {
  return <div className="demo-group-title"><p>{number} / THE COLLECTION</p><h2>{title}</h2></div>;
}
export default function Home() {
  return <main id="top" className="demo-gallery">
    <div className="demo-intro"><a href="#top" className="demo-wordmark">cinder</a><h1>The building blocks.</h1><nav aria-label="Component collection"><a href="#styles">Color & type ↗</a><a href="#headers">Headers ↗</a><a href="#heroes">Heroes ↗</a><a href="#services">Services ↗</a><a href="#testimonials">Testimonials ↗</a><a href="#about">About ↗</a><a href="#faq">FAQ ↗</a><a href="#gallery">Gallery ↗</a><a href="#projects">Projects ↗</a><a href="#footers">Footers ↗</a></nav></div>
    <StyleGuide />
    <section id="headers" aria-label="Header examples">
      <GroupTitle number="01" title="Headers" />
      <ExampleLabel>01 / Classic navigation</ExampleLabel>
      <Header brand={brand} links={links} action={action} />
      <ExampleLabel>02 / Centered brand</ExampleLabel>
      <Header variant="centered" theme="forest" brand={brand} links={links} action={action} />
      <ExampleLabel>03 / Compact bar</ExampleLabel>
      <Header variant="compact" theme="cobalt" brand={brand} links={links.slice(0, 2)} action={action} tagline="Spaces for a life well lived." />
    </section>
    <section id="heroes" aria-label="Hero examples">
      <GroupTitle number="02" title="Heroes" />
      <ExampleLabel>01 / Split</ExampleLabel>
      <Hero
        id="split"
        variant="split"
        headingLevel="h2"
        eyebrow="Built on trust. Backed by craft."
        title="A better home starts right here."
        description="From the first sketch to the finishing touches, we make thoughtful spaces for the way you really live."
        primaryAction={{ label: "Tell us about your project", href: "mailto:hello@example.com" }}
        secondaryAction={{ label: "View next example", href: "#centered" }}
        image={{
          src: "/photos/architecture.jpg",
          alt: "An airy office interior with architectural details",
        }}
        note="A fictional business, built to show what’s possible."
      />
      <ExampleLabel>02 / Centered</ExampleLabel>
      <Hero
        id="centered"
        variant="centered"
        theme="forest"
        headingLevel="h2"
        eyebrow="Rooted in the everyday"
        title="Outside is where life opens up."
        description="Gardens made for slow mornings, long evenings, and everything in between. Let’s make a little space for more."
        primaryAction={{ label: "Find your fresh start", href: "mailto:hello@example.com" }}
        secondaryAction={{ label: "View next example", href: "#image-overlay" }}
        note="Thoughtful design. Lasting relationships."
      />
      <ExampleLabel>03 / Image overlay</ExampleLabel>
      <Hero
        id="image-overlay"
        variant="image-overlay"
        theme="slate"
        headingLevel="h2"
        eyebrow="Considered spaces. Remarkable living."
        title="Make yourself somewhere."
        description="Architecture that belongs to its landscape. Spaces that belong to you. A new perspective on coming home."
        primaryAction={{ label: "Start a conversation", href: "mailto:hello@example.com" }}
        secondaryAction={{ label: "Back to first example", href: "#split" }}
        image={{
          src: "/photos/architecture.jpg",
          alt: "A sunlit shared office interior",
          position: "65% center",
        }}
      />
    </section>
    <section id="services" aria-label="Services examples">
      <GroupTitle number="03" title="Services" />
      <ExampleLabel>01 / Card grid</ExampleLabel>
      <Services eyebrow="What we do" title="Good spaces. Better living." description="A thoughtful approach to every part of your home, inside and out." items={items} />
      <ExampleLabel>02 / Alternating image rows</ExampleLabel>
      <Services variant="rows" theme="forest" eyebrow="From the ground up" title="Made around your everyday." description="Big ideas, careful details, and a team that sees the whole picture." items={items} />
      <ExampleLabel>03 / Numbered list</ExampleLabel>
      <Services variant="numbered" theme="citrus" eyebrow="Our expertise" title="Your next chapter starts here." description="Three ways to make more of the place you call home." items={items.map(({ label, ...item }) => item)} />
    </section>
    <section id="testimonials" aria-label="Testimonials examples">
      <GroupTitle number="04" title="Testimonials" />
      <ExampleLabel>01 / Quote cards</ExampleLabel>
      <Testimonials headingLevel="h3" eyebrow="Kind words" title="The best part? Happy clients." items={sampleQuotes} />
      <ExampleLabel>02 / Featured quote</ExampleLabel>
      <Testimonials headingLevel="h3" variant="featured" theme="forest" eyebrow="In their words" title="A place that feels like you." items={sampleQuotes} />
      <ExampleLabel>03 / Portrait and quote</ExampleLabel>
      <Testimonials headingLevel="h3" variant="portrait" theme="orchid" eyebrow="Behind every project" title="Good work. Better relationships." items={sampleQuotes.slice(0, 1)} />
    </section>
    <section id="about" aria-label="About examples">
      <GroupTitle number="05" title="About" />
      <ExampleLabel>01 / Photo and story</ExampleLabel>
      <About headingLevel="h3" eyebrow="A little about us" title="Built around people." image={galleryImages[1].image} paragraphs={["We believe the best spaces begin with a little curiosity. How do you spend your mornings? Where does everyone gather? What would make life easier?", "Those small details shape everything we do, from a single room to a whole new home."]} action={action} />
      <ExampleLabel>02 / Story and key facts</ExampleLabel>
      <About headingLevel="h3" variant="facts" theme="forest" eyebrow="Small team. Shared values." title="Good things take care." paragraphs={["We keep our practice intentionally personal. You know who is working on your project, and we know why it matters to you."]} facts={[{ value: "01", label: "Dedicated point of contact" }, { value: "03", label: "Design disciplines, one team" }, { value: "You", label: "At the center of every decision" }, { value: "Care", label: "In every detail" }]} />
      <ExampleLabel>03 / Team grid</ExampleLabel>
      <About headingLevel="h3" variant="team" theme="slate" eyebrow="Meet the team" title="Different skills. One shared outlook." description="Illustrated team profiles for this fictional studio." members={team} />
    </section>
    <section id="faq" aria-label="FAQ examples">
      <GroupTitle number="06" title="FAQ" />
      <ExampleLabel>01 / Accordion</ExampleLabel>
      <FAQ headingLevel="h3" eyebrow="Good questions" title="Wondering where to start?" items={questions.slice(0, 4)} />
      <ExampleLabel>02 / Open two-column layout</ExampleLabel>
      <FAQ headingLevel="h3" variant="columns" theme="orchid" title="A little clarity goes a long way." items={questions.slice(0, 4)} />
      <ExampleLabel>03 / Grouped accordions</ExampleLabel>
      <FAQ headingLevel="h3" variant="grouped" theme="slate" eyebrow="The details" title="Let’s make it simple." groups={[{ title: "Getting started", items: questions.slice(0, 3) }, { title: "Working together", items: questions.slice(3) }]} />
    </section>
    <section id="gallery" aria-label="Gallery examples">
      <GroupTitle number="07" title="Gallery" />
      <ExampleLabel>01 / Image grid</ExampleLabel>
      <Gallery headingLevel="h3" eyebrow="A closer look" title="Small details. Lasting impressions." items={galleryImages.slice(0, 3)} />
      <ExampleLabel>02 / Editorial mosaic</ExampleLabel>
      <Gallery headingLevel="h3" variant="mosaic" theme="forest" title="Room to see things differently." items={galleryImages} />
      <ExampleLabel>03 / Scrollable image strip</ExampleLabel>
      <Gallery headingLevel="h3" variant="strip" theme="cobalt" title="A few moments worth keeping." description="Swipe, scroll horizontally, or focus the image strip and use your arrow keys." items={galleryImages} />
    </section>
    <section id="projects" aria-label="Projects examples">
      <GroupTitle number="08" title="Projects" />
      <ExampleLabel>01 / Project cards</ExampleLabel>
      <Projects headingLevel="h3" eyebrow="Selected work" title="Different spaces. The same care." items={sampleProjects} />
      <ExampleLabel>02 / Featured project</ExampleLabel>
      <Projects headingLevel="h3" variant="featured" theme="forest" eyebrow="In focus" title="A new perspective on home." items={sampleProjects} />
      <ExampleLabel>03 / Project list</ExampleLabel>
      <Projects headingLevel="h3" variant="list" theme="citrus" title="Good ideas, brought to life." description="A collection of spaces made for the people who use them." items={sampleProjects} />
    </section>
    <section id="footers" aria-label="Footer examples">
      <GroupTitle number="09" title="Footers" />
      <ExampleLabel>01 / Minimal</ExampleLabel>
      <Footer brand={brand} copyright={copyright} legalLinks={[{ label: "Contact", href: "mailto:hello@example.com" }, { label: "Back to top ↑", href: "#top" }]} />
      <ExampleLabel>02 / Link columns</ExampleLabel>
      <Footer variant="columns" theme="slate" brand={brand} description="Thoughtful homes. Lasting relationships. We make spaces for the way you really live." groups={groups} copyright={copyright} />
      <ExampleLabel>03 / Call to action</ExampleLabel>
      <Footer variant="cta" theme="forest" brand={brand} headline="Something good starts with a conversation." action={action} description="Considered spaces for your next chapter." groups={groups} copyright={copyright} />
    </section>
  </main>;
}
