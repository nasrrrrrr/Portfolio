import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <motion.div
        className="max-w-lg rounded-3xl border border-border/60 bg-white/80 p-12 text-center backdrop-blur-xl shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          404 — Off the grid
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
          The page you’re seeking hasn’t been crafted yet.
        </h1>
        <p className="mt-4 text-sm text-foreground/65">
          Explore the main portfolio or drop me a line and we can shape this corner of the experience together.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            Return home
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Link>
          <a
            href="mailto:hello@nasr.design"
            className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-medium text-foreground/70 transition hover:border-foreground/40 hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
