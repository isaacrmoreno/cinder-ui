# Cinder UI

Reusable React sections for small-business websites, with a Next.js demo to explore layouts and styles.

## What’s included

- Nine sections, each with three variants: Header, Hero, Services, Testimonials, About, FAQ, Gallery, Projects, and Footer.
- Six themes: Warm, Forest, Slate, Cobalt, Citrus, and Orchid.
- A live style preview with font, heading weight, spacing, corner, and photography controls.
- Copyable component examples in the demo.

## Run locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

After editing shared components or styles, rebuild them in another terminal and refresh:

```sh
npm run build -w @isaacrmoreno/cinder-ui
```

## Project structure

- `packages/web-ui` — reusable components and themes.
- `apps/demo` — component gallery and style preview.

See the [component reference](packages/web-ui/README.md) for props and usage examples.
