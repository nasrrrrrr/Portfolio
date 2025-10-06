import { Fragment, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers,
  Sparkles,
  Cpu,
} from "lucide-react";

const heroStats = [
  { label: "Months building", value: "10" },
  { label: "Projects finished", value: "4" },
];

const featuredProjects = [
  {
    title: "Agrumium",
    description:
      "A creative Roblox development team focused on building unique and engaging games that players love.",
    detail: "Roblox • Game Development",
    tags: ["Roblox", "Game Dev", "Team Project"],
    accent: "from-primary/30 via-primary/10 to-transparent",
    image: "/client/assets/agrumium_logo.png",
    link: "https://www.roblox.com/communities/35578337/Agrumium#!/about",
  },
  {
    title: "Webhook Sender",
    description:
      "Coming soon - A powerful Discord webhook tool for seamless message automation.",
    detail: "Discord • Automation",
    tags: ["Discord API", "Coming Soon", "Automation"],
    accent: "from-foreground/20 via-white/10 to-primary/10",
    image: null,
    placeholder: true,
  },
  {
    title: "Agrumium Helper",
    description:
      "AI-integrated Discord bot with advanced mod commands, play commands, and comprehensive raid protection for the Agrumium community.",
    detail: "Discord • Bot Development",
    tags: ["AI Integration", "Moderation", "Raid Protection"],
    accent: "from-accent/40 via-white/10 to-transparent",
    image: "/client/assets/Untitled design.png",
    link: "https://discord.gg/EYpJFNeyQ4",
  },
];

const focusNotes = [
  "Fast Discord helpers",
  "Friendly dashboards",
  "Sharp low poly art",
];

const expertiseStacks = [
  {
    icon: Sparkles,
    title: "Idea to plan",
    summary: "Break down your goal and map the easy path to a working product.",
    bullets: ["Project scope", "Task lists", "Weekly check-ins"],
  },
  {
    icon: Layers,
    title: "UI systems",
    summary: "Build clean kits so every screen feels part of the same family.",
    bullets: ["Design tokens", "Light & dark", "QA support"],
  },
  {
    icon: Cpu,
    title: "Code help",
    summary: "Prototype fast in real code using Python, Lua, HTML, CSS, and JS.",
    bullets: ["Discord bots", "Portfolio sites", "Bot dashboards"],
  },
  {
    icon: Compass,
    title: "3D art",
    summary: "Make logos and low poly props that match your game vibe.",
    bullets: ["3D logos", "Game assets", "Render setups"],
  },
];

const timeline = [
  {
    period: "Dec 2024 — Now",
    role: "Freelance Developer & 3D Artist",
    description:
      "Creating custom Discord bots, modern websites, and low-poly 3D assets for gaming communities.",
  },
];

const contactPoints = [
  {
    label: "Discord",
    value: "Message me directly",
    href: "https://discord.com/users/1308117682259759205",
    image: "/client/assets/discord.png",
  },
  {
    label: "Roblox Profile",
    value: "Check out my games",
    href: "https://www.roblox.com/users/2760340076/profile",
    image: "/client/assets/roblox-logo.png",
  },
  {
    label: "Agrumium Discord",
    value: "Join our community",
    href: "https://discord.gg/EYpJFNeyQ4",
    image: "/client/assets/agrumium_logo.png",
  },
  {
    label: "Agrumium Group",
    value: "Our Roblox group",
    href: "https://www.roblox.com/communities/35578337/Agrumium#!/about",
    image: "/client/assets/roblox-agrumium.png",
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Index() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-32 pb-12">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <StorySection />
      <ContactSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="show"
      variants={fadeVariants}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 }}
      className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <div className="flex flex-col gap-8">
        <motion.span
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-foreground/70 shadow-sm backdrop-blur-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Portfolio
        </motion.span>
        <div className="space-y-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hey! I&apos;m Nasr 👋
          </h1>
          <div className="space-y-3 text-base text-foreground/80 sm:text-lg">
            <p>
              💻 Coder: Python, Lua, HTML, CSS, JavaScript
            </p>
            <p>
              🎨 3D Artist: Logos &amp; Low Poly Game Assets
            </p>
            <div className="rounded-2xl border border-border/70 bg-white/5 p-5 text-sm text-foreground/70 backdrop-blur-xl sm:text-base">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                What I offer
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Custom Discord bots built to your specs</li>
                <li>• Portfolio, studio, and link-in-bio sites</li>
                <li>• Discord bot websites (extra polish)</li>
                <li>• 3D logo models and low poly game props</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-foreground/90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="https://discord.com/users/1308117682259759205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Contact me
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-3xl border border-border/70 bg-white/10 p-6 backdrop-blur-xl shadow-sm shadow-primary/10"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <dt className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                {stat.label}
              </dt>
              <dd className="mt-4 text-2xl font-semibold text-foreground">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
      <motion.div
        className="relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-border/60 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(15,23,42,0.25)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <div className="relative flex flex-col gap-6">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium">
              Featured Project
            </p>
            <div className="flex justify-center mb-4">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/client/assets/agrumium_logo.png"
                  alt="Agrumium Logo"
                  className="w-20 h-20 object-contain rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
            <h2 className="text-xl font-medium text-foreground leading-relaxed">
              Building innovative Roblox experiences<br />
              <span className="text-primary font-semibold">with Agrumium</span>
            </h2>
          </div>
        </div>
        <div className="relative grid gap-3">
          {focusNotes.map((item, index) => (
            <motion.div
              key={item}
              className="group flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-foreground/75 transition-all hover:bg-white/10"
              whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
              <span className="flex-1">{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="relative mt-auto flex items-center gap-3 rounded-xl border border-border/30 bg-gradient-to-r from-white/8 to-white/4 px-4 py-3"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Available for new projects</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="space-y-12">
      <SectionHeader
        eyebrow="Projects"
        title="A few builds I&apos;m proud of."
        description="Each card glows with the same blue hue from the Agrumium screenshot."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof featuredProjects)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-1, 1], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width;
    const offsetY = (event.clientY - bounds.top) / bounds.height;
    x.set((offsetX - 0.5) * 2);
    y.set((offsetY - 0.5) * 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-white/10 p-6 backdrop-blur-2xl shadow-[0_24px_48px_rgba(15,23,42,0.34)] will-change-transform"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 } }}
      viewport={{ once: true, margin: "-80px" }}
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: index * 0.3 }}
      whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      style={{ rotateX, rotateY, transformPerspective: "1200px" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <motion.div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex flex-col gap-6">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/55">
            {project.detail}
          </span>
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        </div>
        {project.image ? (
          <motion.div
            className="flex justify-center items-center rounded-2xl border border-border/60 bg-white/20 p-4"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-16 w-16 object-contain"
              loading="lazy"
            />
          </motion.div>
        ) : project.placeholder ? (
          <motion.div
            className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-white/10"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🚧</div>
              <p className="text-xs text-foreground/60">Coming Soon</p>
            </div>
          </motion.div>
        ) : null}
        <p className="text-sm text-foreground/70">{project.description}</p>
      </div>
      <div className="relative mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-foreground/10 bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.25em] text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>
      {!project.placeholder && (
        <motion.a
          href={project.link || "#"}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noopener noreferrer" : undefined}
          className="relative mt-8 flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors"
          whileHover={{ x: 6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {project.link ? "Visit" : "View project"}
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      )}
      <motion.div
        className="pointer-events-none absolute -right-6 top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, delay: index * 0.6 }}
      />
    </motion.article>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="space-y-12">
      <SectionHeader
        eyebrow="Skills"
        title="How I can support your idea."
        description="I keep things fast, friendly, and easy to ship for your team."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {expertiseStacks.map((stack, index) => (
          <motion.div
            key={stack.title}
            className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/70 bg-white/8 p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-white/20 text-foreground">
                <stack.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{stack.title}</h3>
                <p className="text-sm text-foreground/60">{stack.summary}</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-foreground/70">
              {stack.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <motion.span
              className="text-xs uppercase tracking-[0.25em] text-foreground/50"
              animate={{ opacity: [0.7, 0.4, 0.7] }}
              transition={{ repeat: Infinity, duration: 4, delay: index * 0.2 }}
            >
              Always improving
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="space-y-12">
      <SectionHeader
        eyebrow="Story"
        title="Clear steps, friendly style, strong delivery."
        description="I listen first, sketch fast, and stay close during hand-off so nothing gets lost."
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <motion.div
          className="rounded-3xl border border-border/60 bg-white/8 p-10 text-sm leading-relaxed text-foreground/75 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-base text-foreground">
            Every build starts with plain questions. Who needs this? What slows them down? Where should the interface feel quiet? I map the answers, share rough frames, then move into polished flows.
          </p>
          <p className="mt-6">
            I keep teams synced with weekly loom updates, live design sessions, and tidy specs. Motion rules, tokens, and tone guides travel with the work so hand-off feels natural.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {timeline.map((item, index) => (
            <Fragment key={item.period}>
              <div className="rounded-2xl border border-border/70 bg-white/8 p-6 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                  {item.period}
                </p>
                <h4 className="mt-3 text-base font-semibold text-foreground">
                  {item.role}
                </h4>
                <p className="mt-4 text-sm text-foreground/65">{item.description}</p>
              </div>
              {index !== timeline.length - 1 && (
                <div className="mx-6 h-8 border-l border-dashed border-border/70" />
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="space-y-10">
      <SectionHeader
        eyebrow="Let&apos;s chat"
        title="Ready when you are."
        description="Message me for Discord bots, websites, or fresh low poly art."
      />
      <motion.div
        className="overflow-hidden rounded-[40px] border border-border/60 bg-white/8 p-10 backdrop-blur-2xl shadow-[0_32px_80px_rgba(15,23,42,0.32)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-lg font-medium text-foreground">
              I work with founders, live service teams, and studios who care about polish and empathy.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://discord.com/users/1308117682259759205"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:bg-foreground/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                Start a chat
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                View projects again
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-foreground/70 grid-cols-2">
            {contactPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/60 bg-white/10 p-4 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                    {item.label}
                  </p>
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith('https://discord.com') ? '_blank' : undefined}
                  rel={item.href.startsWith('https://discord.com') ? 'noopener noreferrer' : undefined}
                  className="block text-sm font-medium text-foreground hover:text-primary"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <motion.span
        className="text-xs uppercase tracking-[0.3em] text-foreground/55"
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="max-w-2xl text-balance text-sm text-foreground/65 sm:text-base"
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, type: "spring", stiffness: 90, delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>
  );
};
