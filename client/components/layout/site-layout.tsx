import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface SiteLayoutProps {
  children: ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative flex min-h-screen flex-col" id="top">
      <motion.span
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-primary via-primary/60 to-transparent"
        style={{ scaleX: scrollYProgress }}
      />
      <SiteHeader />
      <main className="flex-1 px-6 pb-24 pt-10 md:px-8">{children}</main>
      <SiteFooter />
    </div>
  );
};
