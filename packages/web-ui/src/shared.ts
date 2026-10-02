import type { themePresets } from "./theme-presets.js";
import type { CSSProperties } from "react";
export type Theme = keyof typeof themePresets;
export type LinkItem = { label: string; href: string };
export type Brand = { name: string; href: string; logo?: { src: string; alt: string } };
export type SectionStyleProps = {
  id?: string;
  theme?: Theme;
  className?: string;
  style?: CSSProperties & { [key: `--cinder-${string}`]: string | number };
};
