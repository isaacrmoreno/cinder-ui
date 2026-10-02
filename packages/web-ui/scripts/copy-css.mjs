import { readFileSync, writeFileSync } from "node:fs";
import { themePresets } from "../dist/theme-presets.js";
const themes = Object.entries(themePresets).map(([name, tokens]) => {
  const declarations = Object.entries(tokens).map(([key, value]) => `--cinder-${key}:${value};`).join(" ");
  return `.cinder-hero[data-theme="${name}"], .cinder-section[data-theme="${name}"] { ${declarations} }`;
}).join("\n");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
writeFileSync(new URL("../dist/styles.css", import.meta.url), `${themes}\n${styles}`);
