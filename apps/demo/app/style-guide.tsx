"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Header, Hero, themePresets } from "@isaacrmoreno/cinder-ui";
import type { Theme } from "@isaacrmoreno/cinder-ui";

const fonts = {
  sans: { label: "Arial", family: "Arial, Helvetica, sans-serif", package: null },
  serif: { label: "Georgia", family: "Georgia, 'Times New Roman', serif", package: null },
  inter: { label: "Inter", family: "'Inter Variable', sans-serif", package: "@fontsource-variable/inter" },
  manrope: { label: "Manrope", family: "'Manrope Variable', sans-serif", package: "@fontsource-variable/manrope" },
  dmSans: { label: "DM Sans", family: "'DM Sans Variable', sans-serif", package: "@fontsource-variable/dm-sans" },
  lora: { label: "Lora", family: "'Lora Variable', serif", package: "@fontsource-variable/lora" },
};
type Font = keyof typeof fonts;
const photos = {
  interiors: { label: "Warm interiors", src: "/photos/interiors.jpg", alt: "A bright living room with natural materials", position: "center" },
  botanical: { label: "Botanical details", src: "/photos/botanical.jpg", alt: "Green foliage against a light background", position: "center" },
  architecture: { label: "Architectural lines", src: "/photos/architecture.jpg", alt: "An open workspace with strong architectural lines", position: "center" },
  workspace: { label: "Work & collaboration", src: "/photos/workspace.jpg", alt: "A contemporary shared office space", position: "center" },
  fitness: { label: "Sport & movement", src: "/photos/fitness.jpg", alt: "A person training in a gym", position: "center" },
  portrait: { label: "People & lifestyle", src: "/photos/portrait.jpg", alt: "An outdoor lifestyle portrait", position: "center 35%" },
};
type Photo = keyof typeof photos;
const directions: Record<Theme, { label: string; mood: string; font: Font; photo: Photo; title: string }> = {
  warm: { label: "Warm", mood: "Editorial / terracotta / fine edges", font: "lora", photo: "interiors", title: "Spaces with a little more soul." },
  forest: { label: "Forest", mood: "Botanical / deep green / organic curves", font: "serif", photo: "botanical", title: "Make room for something living." },
  slate: { label: "Slate", mood: "Monochrome / precise / architectural", font: "inter", photo: "architecture", title: "Considered down to the detail." },
  cobalt: { label: "Cobalt", mood: "Electric blue / heavy type / sharp edges", font: "manrope", photo: "workspace", title: "Big ideas. Built to move you." },
  citrus: { label: "Citrus", mood: "Lime / compact / high energy", font: "dmSans", photo: "fitness", title: "More energy. More possibility." },
  orchid: { label: "Orchid", mood: "Lavender / expressive / rounded", font: "dmSans", photo: "portrait", title: "A little different. Entirely you." },
};
const colors = ["background", "foreground", "muted", "accent", "on-accent", "border"] as const;
const spacingOptions = { Compact: "40px", Balanced: "64px", Airy: "88px" };
const cornerOptions = { Square: ["0px", "0px"], Soft: ["8px", "8px"], Rounded: ["20px", "36px"], Organic: ["999px", "80px 8px 80px 8px"] } as const;
function Control({ title, children }: { title: string; children: ReactNode }) {
  return <fieldset className="demo-style-controls"><legend>{title}</legend><div>{children}</div></fieldset>;
}
export function StyleGuide() {
  const [theme, setTheme] = useState<Theme>("warm");
  const [font, setFont] = useState<Font>("lora");
  const [photo, setPhoto] = useState<Photo>("interiors");
  const [weight, setWeight] = useState<string | null>(null);
  const [spacing, setSpacing] = useState<string | null>(null);
  const [corners, setCorners] = useState<keyof typeof cornerOptions | null>(null);
  const [naturalPhoto, setNaturalPhoto] = useState(false);
  const preset = themePresets[theme];
  const direction = directions[theme];
  const selectedPhoto = photos[photo];
  function selectTheme(next: Theme) {
    setTheme(next); setFont(directions[next].font); setPhoto(directions[next].photo);
    setWeight(null); setSpacing(null); setCorners(null); setNaturalPhoto(false);
  }
  const sectionStyle = {
    "--cinder-font": fonts[font].family,
    ...(weight ? { "--cinder-heading-weight": weight } : {}),
    ...(spacing ? { "--cinder-section-space": spacing, "--cinder-gap": spacing === "40px" ? "16px" : spacing === "88px" ? "32px" : "24px" } : {}),
    ...(corners ? { "--cinder-radius": cornerOptions[corners][0], "--cinder-image-radius": cornerOptions[corners][1] } : {}),
    ...(naturalPhoto ? { "--cinder-image-filter": "none" } : {}),
  };
  const selectedFont = fonts[font];
  const code = `${selectedFont.package ? `// npm install ${selectedFont.package}\nimport "${selectedFont.package}";\n` : ""}import { Header, Hero } from "@isaacrmoreno/cinder-ui";\nimport "@isaacrmoreno/cinder-ui/styles.css";\n\nconst brandStyle = ${JSON.stringify(sectionStyle, null, 2)};\n\n<Hero\n  variant="split"\n  theme="${theme}"\n  style={brandStyle}\n  title="${direction.title}"\n  image={${JSON.stringify({ src: selectedPhoto.src, alt: selectedPhoto.alt, position: selectedPhoto.position })}}\n  primaryAction={{ label: "Let’s talk", href: "mailto:hello@example.com" }}\n/>`;
  return <section id="styles" className="demo-style-guide" aria-labelledby="style-guide-title">
    <div className="demo-group-title"><p>REFERENCE</p><h2 id="style-guide-title">Six distinct directions</h2></div>
    <div className="demo-direction-grid" role="group" aria-label="Theme presets">{(Object.keys(directions) as Theme[]).map((name) => {
      const tokens = themePresets[name]; const info = directions[name];
      return <button key={name} className="demo-direction" aria-pressed={theme === name} onClick={() => selectTheme(name)} style={{background:tokens.background,color:tokens.foreground,fontFamily:fonts[info.font].family}}>
        <img src={photos[info.photo].src} alt="" width={320} height={180} loading="lazy" style={{filter:tokens["image-filter"],borderRadius:tokens["image-radius"]}} />
        <strong style={{fontWeight:Number(tokens["heading-weight"])}}>{info.label}</strong><span>{info.mood}</span><span className="demo-direction-colors" aria-hidden="true">{[tokens.foreground,tokens.accent,tokens.border].map((color,i) => <i key={i} style={{background:color}} />)}</span>
      </button>;
    })}</div>
    <p className="demo-style-note">Choose a direction to load its defaults. Then mix the font, weight, spacing, corners, and photography independently. Controls change this preview only.</p>
    <div className="demo-style-layout">
      <div>
        <Control title="Font">{(Object.keys(fonts) as Font[]).map((name) => <button key={name} aria-pressed={font === name} onClick={() => setFont(name)} style={{fontFamily:fonts[name].family}}>{fonts[name].label}</button>)}</Control>
        <Control title="Heading weight"><button aria-pressed={weight === null} onClick={() => setWeight(null)}>Theme · {preset["heading-weight"]}</button>{[400,500,700,800].map(value => <button key={value} aria-pressed={weight === String(value)} onClick={() => setWeight(String(value))}>{value}</button>)}</Control>
        <Control title="Spacing"><button aria-pressed={spacing === null} onClick={() => setSpacing(null)}>Theme · {preset["section-space"]}</button>{Object.entries(spacingOptions).map(([label,value]) => <button key={label} aria-pressed={spacing === value} onClick={() => setSpacing(value)}>{label}</button>)}</Control>
        <Control title="Corners"><button aria-pressed={corners === null} onClick={() => setCorners(null)}>Theme default</button>{(Object.keys(cornerOptions) as Array<keyof typeof cornerOptions>).map(name => <button key={name} aria-pressed={corners === name} onClick={() => setCorners(name)}>{name}</button>)}</Control>
      </div>
      <div>
        <Control title="Photography">{(Object.keys(photos) as Photo[]).map(name => <button key={name} aria-pressed={photo === name} onClick={() => setPhoto(name)}>{photos[name].label}</button>)}</Control>
        <Control title="Image treatment"><button aria-pressed={!naturalPhoto} onClick={() => setNaturalPhoto(false)}>Theme treatment</button><button aria-pressed={naturalPhoto} onClick={() => setNaturalPhoto(true)}>Original colors</button></Control>
        <dl className="demo-swatches">{colors.map(name => <div key={name}><dt><span style={{background:preset[name]}} />{name}</dt><dd>{preset[name]}</dd></div>)}</dl>
        <p className="demo-style-note">These are actual photos served locally by the demo. In a client project, choose photography that fits the business and supply your own image path. Images and fonts are not bundled with the UI package.</p>
        <button className="demo-reset" onClick={() => selectTheme(theme)}>Reset this direction ↺</button>
      </div>
    </div>
    <div className="demo-brand-preview">
      <Header variant="compact" theme={theme} style={sectionStyle} brand={{name:"Your business",href:"#styles"}} action={{label:"Let’s talk",href:"mailto:hello@example.com"}} />
      <Hero variant="split" headingLevel="h3" theme={theme} style={sectionStyle} eyebrow="YOUR STORY. YOUR WAY." title={direction.title} description="A considered starting point, shaped around your business. Your words, your photographs, your point of view." primaryAction={{label:"Let’s talk",href:"mailto:hello@example.com"}} image={selectedPhoto} />
    </div>
    <details className="demo-style-overrides"><summary>Copy this look — component props & imports</summary><pre className="demo-style-code"><code>{code}</code></pre><p className="demo-style-note">The image path above belongs to this demo; copy the image or replace it in your client app. Pass the same theme and brandStyle to your other Cinder sections. Load only the font you choose.</p></details>
    <details className="demo-style-overrides"><summary>Token reference & photography notes</summary><pre className="demo-style-code"><code>{JSON.stringify(Object.fromEntries(Object.entries(preset).map(([key,value]) => [`--cinder-${key}`,value])),null,2)}</code></pre><p className="demo-style-note">Override any token in the style prop. Heading weights depend on the font’s available weights; Arial and Georgia typically map to regular or bold. Image-overlay Heroes keep light text over a dark scrim. Demo photos: <a href="/photos/SOURCES.md">source credits</a>.</p></details>
  </section>;
}
