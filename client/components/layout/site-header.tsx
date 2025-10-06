import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 flex w-full justify-center px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "relative flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-border/50 bg-background/80 px-6 py-3 text-sm text-foreground shadow-lg backdrop-blur-xl transition-all duration-300",
          scrolled &&
            "border-border/70 bg-background/90 shadow-xl"
        )}
      >
        <motion.a
          href="#top"
          className="text-lg font-semibold text-foreground transition hover:opacity-80"
          whileHover={{ opacity: 0.8 }}
        >
          Nasr
        </motion.a>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-foreground/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="https://discord.com/users/1308117682259759205"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:border-primary/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
        >
          <span>Contact</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </motion.div>
    </header>
  );
};
