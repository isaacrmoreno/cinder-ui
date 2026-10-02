import "@fontsource-variable/lora";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import type { Metadata } from "next";
import "./globals.css";
import "@isaacrmoreno/cinder-ui/styles.css";
export const metadata: Metadata = { title: "Cinder — A foundation for what’s next", description: "Three considered starting points for your next small-business website." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
