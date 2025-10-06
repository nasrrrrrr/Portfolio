import { motion } from "framer-motion";
import { Github, MessageCircle, Folder } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-white/60 backdrop-blur-xl transition dark:border-border/40 dark:bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          © {new Date().getFullYear()} Nasr. Designed with care.
        </motion.p>
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <Folder className="h-4 w-4" />
            Projects
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://discord.com/users/1308117682259759205"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
