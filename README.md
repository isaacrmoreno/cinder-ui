# Cinder

A small npm workspace containing a reusable React package and a Next.js demo.

## Start

Requires Node 22+ and npm. From this folder:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. `npm run dev` builds the package first. After editing package code, run `npm run build -w @cinder/web-ui` to refresh the demo. For continuous TypeScript compilation use `npm run dev:ui` in another terminal; CSS edits still require the build command.

```sh
npm run build       # package + production demo
npm run typecheck
npm run pack:ui     # creates cinder-web-ui-0.1.0.tgz, without publishing
```

## What lives where

- `packages/web-ui`: @cinder/web-ui, the thing you will publish.
- `apps/demo`: an actual Next.js app importing the package by name.

A **scope** is the namespace (`@cinder`). A **package** is the installable product (`@cinder/web-ui`). A **workspace** lets this app use the local package without downloading it. A **tarball** is the exact archive npm installs. A **registry** hosts published versions. A Git repository is optional for all of this, but useful for tracking changes.

The root and demo have `private: true` to prevent publication. The library deliberately does not: that flag would block even private publication. Instead, its `publishConfig.access` is `restricted`.

## Use in another Next.js app

Import CSS once in `app/layout.tsx`:

```tsx
import '@cinder/web-ui/styles.css';
```

Then use a section:

```tsx
import { Hero } from '@cinder/web-ui';

export default function Page() {
  return <Hero
    variant="split"
    eyebrow="Locally owned & trusted"
    title="Quality roofing without the headaches."
    description="Thoughtful work, from the first call to the final inspection."
    primaryAction={{ label: 'Get a free estimate', href: '#contact' }}
    image={{ src: '/hero.jpg', alt: 'A completed roof on a local home' }}
    theme="warm"
  />;
}
```

Split and image-overlay require an image object. Centered works with or without one. Themes are warm, forest, slate, cobalt, citrus, and orchid. Use `headingLevel="h2"` when the page already has its main h1. Images come from the consuming app. Supply meaningful alt text, or an empty string for decorative images. Provide actual CTA destinations in your customer site.

Brand overrides use inline variables, e.g. `style={{ '--cinder-accent': '#75402f', '--cinder-radius': '8px' }}`. Keep contrast accessible when overriding colors. Cinder CSS is scoped and bundled; consumers need neither Tailwind nor shadcn. The demo uses Tailwind. No low-level component system is needed for these headings, images, and links; add shadcn when an interactive primitive is required.

## Publish privately (when your npm account is ready)

You must control the `@cinder` namespace; a package name in package.json does not reserve it. Private organization packages require the appropriate paid npm organization. Do not change to public access to get around account setup.

```sh
npm login
npm whoami
npm publish --workspace @cinder/web-ui --access restricted --dry-run
npm publish --workspace @cinder/web-ui --access restricted
```

The final command uploads to npm. No credentials belong in this repository. See [npm private-package documentation](https://docs.npmjs.com/creating-and-publishing-private-packages/).

## Make and install an update

After editing and verifying the component:

```sh
npm version patch --workspace @cinder/web-ui --no-git-tag-version
npm publish --workspace @cinder/web-ui --access restricted
# In each separately deployed customer app:
npm install @cinder/web-ui@0.1.1 --save-exact
npm run build
```

For this workspace demo, also update its dependency version to match the package and run `npm install`. Each deployed site needs an explicit dependency update and deployment. A release never automatically changes existing sites. During 0.x development the API may change; pin versions. Once stable, patch versions are fixes, minor versions add compatible functionality, and major versions carry breaking changes.

The local demo contains fictional businesses, local photography and original SVG illustrations, and an example.com contact address. Replace those with customer content before delivery.

## Component collection

The demo groups 27 examples under Headers, Heroes, Services, Testimonials, About, FAQ, Gallery, Projects, and Footers. Import `Header`, `Hero`, `Services`, `Testimonials`, `About`, `FAQ`, `Gallery`, `Projects`, and `Footer` from `@cinder/web-ui`; their prop types are exported as well. See `packages/web-ui/README.md` for available variants and usage examples.

## Six visual directions

| Theme | Color | Type and shape | Photography direction |
| --- | --- | --- | --- |
| warm | Cream and terracotta | Light serif, generous spacing, fine edges | Warm interiors |
| forest | Deep green and pale lime | Serif, airy spacing, organic corners | Botanical close-ups |
| slate | White, black and grey | Medium sans, straight edges | Monochrome architecture |
| cobalt | Electric-blue surface, white type | Heavy sans, tighter spacing, square edges | Crisp workspaces |
| citrus | Lime surface, dark ink | Heavy sans, compact rhythm, pill buttons | Sport and movement |
| orchid | Lavender and violet | Bold sans, airy spacing, rounded edges | People and lifestyle |

The six supported values are `warm`, `forest`, `slate`, `cobalt`, `citrus`, and `orchid`. The experimental jade, khaki, and espresso presets were replaced during pre-release development. Theme tokens are defined once in `src/theme-presets.ts` and exported as `themePresets`; the package build generates CSS from the same data used by the demo.

A theme sets package-wide color, default font stack, heading weight, tracking, spacing, corners, and image treatment. It does not load fonts or pick image subjects for you. The demo pairs each direction with a font and photo; its selector shows the exact imports and overrides needed to reproduce the preview. Arial and Georgia are system choices; Inter, Manrope, DM Sans, and Lora are loaded only by the demo. Customer sites load their chosen font.

```tsx
const brandStyle = {
  "--cinder-font": "'Manrope Variable', sans-serif",
  "--cinder-heading-weight": "800",
  "--cinder-section-space": "48px",
  "--cinder-gap": "16px",
  "--cinder-radius": "0px",
  "--cinder-image-radius": "0px",
  "--cinder-image-filter": "none",
};

<Hero variant="split" theme="cobalt" style={brandStyle}
  title="Big ideas. Built to move you."
  image={{ src: "/your-photo.jpg", alt: "Describe your own photograph" }} />
```

Pass the same theme and style object to the other sections. All `--cinder-*` color tokens remain overridable. `--cinder-radius` controls buttons/cards, while `--cinder-image-radius` controls image frames. Image filters affect content imagery, not brand logos. Image-overlay Heroes preserve light text over their scrim; CTA footers now respect the selected palette. Header and layout-specific spacing remains responsive. Font weights depend on loaded faces; system serif fonts may map numeric weights to regular/bold.

The demo's photography is stored under `apps/demo/public/photos`, with source URLs in `SOURCES.md`. These assets are not included in the npm package. Use client-owned or appropriately licensed photography for customer delivery. The six preset cards and preview controls do not globally restyle the separate component gallery below.
# cinder-ui
