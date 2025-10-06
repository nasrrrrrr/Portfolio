import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SettingsPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsPanel = ({ open, onOpenChange }: SettingsPanelProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.aside
            className="fixed right-4 top-4 z-[60] w-full max-w-sm overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-6 backdrop-blur-2xl shadow-[0_32px_72px_rgba(18,26,64,0.4)] dark:bg-background/90"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-foreground/60">
                  Settings
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Make it yours
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-foreground/5 text-foreground/70 transition hover:text-foreground"
                aria-label="Close settings"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 space-y-6 text-sm text-foreground/70">
              <div className="rounded-2xl border border-border/60 bg-foreground/5 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Dark mode</p>
                    <p className="text-xs text-foreground/60">
                      Switch between bright and deep looks.
                    </p>
                  </div>
                  <Switch
                    checked={isDark}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    aria-label="Toggle dark mode"
                  />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border border-border/50 px-4 py-3 text-left transition hover:border-primary/40",
                      !isDark && "border-primary/60 bg-primary/15 text-primary-foreground"
                    )}
                  >
                    <Sun className="h-4 w-4" />
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border border-border/50 px-4 py-3 text-left transition hover:border-primary/40",
                      isDark && "border-primary/60 bg-primary/20 text-primary-foreground"
                    )}
                  >
                    <Moon className="h-4 w-4" />
                    Dark
                  </button>
                </div>
              </div>
              <p className="text-xs text-foreground/55">
                Tip: the preview updates as soon as you flip the switch. Come back any time to tweak the vibe.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
