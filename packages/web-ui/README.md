# @isaacrmoreno/cinder-ui

Reusable React website sections for Cinder. Requires React 19.

## Components

| Component | Variants |
| --- | --- |
| Header | classic, centered, compact |
| Hero | centered, split, image-overlay |
| Services | cards, rows, numbered |
| Testimonials | cards, featured, portrait |
| About | story, facts, team |
| FAQ | accordion, columns, grouped |
| Gallery | grid, mosaic, strip |
| Projects | cards, featured, list |
| Footer | minimal, columns, cta |

## Usage

Import the stylesheet once in your app layout, then add a component:

```tsx
import { Hero } from '@isaacrmoreno/cinder-ui';
import '@isaacrmoreno/cinder-ui/styles.css';

<Hero
  variant="split"
  theme="warm"
  title="Your business. Your story."
  image={{ src: '/hero.jpg', alt: 'Your business at work' }}
  primaryAction={{ label: 'Contact us', href: '/contact' }}
/>
```

## Styling

Choose from six themes: **warm, forest, slate, cobalt, citrus, orchid**.

Each theme sets colors, typography defaults, spacing, and corners. Customize any section with the `style` prop:

```tsx
style={{
  '--cinder-font': 'Georgia, serif',
  '--cinder-accent': '#75402f',
  '--cinder-heading-weight': '700',
  '--cinder-radius': '8px',
}}
```

Load custom fonts and provide images in your own app. No Tailwind setup is required.

Use the demo to compare all 27 variants and copy styling props. Component prop types are exported from the package.
