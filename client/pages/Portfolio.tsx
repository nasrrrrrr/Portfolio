import { Fragment, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Code,
  Palette,
  Bot,
  ExternalLink,
} from "lucide-react";

const heroStats = [
  { label: "Projects completed", value: "50+" },
  { label: "Response time", value: "24h" },
  { label: "Client satisfaction", value: "100%" },
];

const featuredProjects = [
  {
    title: "Agrumium",
    description:
      "💡 A group of Roblox developers who love making fun and unique games. We mix creativity 🎨, coding 💻, and player feedback 🎮 to build awesome experiences.",
    detail: "Roblox • Game Development",
    tags: ["Roblox", "Game Dev", "Team Project"],
    accent: "from-primary/40 via-primary/20 to-transparent",
    image: "/agrumium_logo.png",
    featured: true,
  },
  {
    title: "Webhook Sender",
    description:
      "Advanced Discord message sender via webhook or bot. Features a clean interface with powerful automation capabilities built for the Agrumium development team.",
    detail: "Discord • Automation",
    tags: ["Discord API", "Python", "Automation"],
    accent: "from-accent/40 via-accent/20 to-transparent",
    image: "/discord.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio with smooth animations, dark mode toggle, and optimized performance. Built with React and modern web technologies.",
    detail: "Web • Frontend",
    tags: ["React", "TypeScript", "TailwindCSS"],
    accent: "from-foreground/20 via-white/10 to-primary/10",
  },
  {
    title: "Game Assets",
    description:
      "Collection of low-poly 3D models and assets optimized for indie games. Focus on performance without compromising visual appeal.",
    detail: "3D • Assets",
    tags: ["3D Modeling", "Low Poly", "Game Dev"],
    accent: "from-accent/30 via-white/10 to-transparent",
    image: "/roblox-logo.png",
  },
];

const skills = [
  "💻 Python, Lua, HTML, CSS, JavaScript",
  "🤖 Custom Discord bots built to your specs",
  "🌐 Portfolio, studio, and link-in-bio sites",
  "🎨 3D logo models and low poly game props",
];

const services = [
  {
    icon: Code,
    title: "Coding Projects",
    summary: "Full-stack development with modern technologies and best practices.",
    bullets: ["Custom Discord Bots (your specs)", "Portfolio / Studio / Linktree Websites", "Discord Bot Websites (extra cost)"],
    technologies: ["Python", "JavaScript", "HTML/CSS", "Lua"],
  },
  {
    icon: Palette,
    title: "3D Modeling",
    summary: "Professional 3D assets and custom designs for games and branding.",
    bullets: ["3D Logo Models", "Low Poly Assets for Games", "Custom 3D Designs"],
    technologies: ["Blender", "Low Poly", "Game Assets"],
  },
];

const timeline = [
  {
    period: "2023 — Now",
    role: "Freelance Developer & 3D Artist",
    description:
      "Creating custom Discord bots, modern websites, and low-poly 3D assets for studios and communities.",
  },
  {
    period: "2022 — 2023",
    role: "Agrumium Co-Founder",
    description: "Leading a team of Roblox developers to create engaging games with focus on player experience.",
  },
  {
    period: "2020 — 2022",
    role: "Discord Bot Developer",
    description: "Specialized in automation tools and server management bots for gaming communities.",
  },
];

const contactPoints = [
  {
    label: "Discord",
    value: "Preferred for quick chats",
    href: "https://discord.com/users/1308117682259759205",
  },
  {
    label: "Roblox Profile",
    value: "Check out my games",
    href: "https://www.roblox.com/users/2760340076/profile",
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-32 pb-12">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <div className="flex flex-col gap-8">
        <motion.span
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-foreground/70 shadow-sm backdrop-blur-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden />
          Available for projects
        </motion.span>
        <div className="space-y-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hey! I&apos;m Nasr 👋
          </h1>
          <div className="space-y-3 text-base text-foreground/80 sm:text-lg">
            <p>
              I create custom Discord bots, stunning websites, and low-poly 3D assets.
              Let's bring your creative vision to life with code and creativity.
            </p>
            <div className="rounded-2xl border border-border/70 bg-white/5 p-5 text-sm text-foreground/70 backdrop-blur-xl sm:text-base">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                What I offer
              </p>
              <ul className="mt-3 space-y-2">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
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
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Get in touch
            <MessageCircle className="h-4 w-4" />
          </motion.a>
        </div>
        <dl className="grid gap-6 sm:grid-cols-3">
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
        <div className="relative flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
            Featured Project
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Agrumium - Building the next generation of Roblox experiences.
          </h2>
          <div className="flex justify-center">
            <img
              src="/agrumium_logo.png"
              alt="Agrumium Logo"
              className="w-24 h-24 object-contain rounded-2xl bg-white/10 p-4"
            />
          </div>
        </div>
        <div className="relative grid gap-4">
          {["Fast Discord helpers", "Friendly dashboards", "Sharp low poly art"].map((item) => (
            <motion.div
              key={item}
              className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/8 px-5 py-4 text-sm text-foreground/80 transition hover:border-primary/40 hover:bg-white/15"
              whileHover={{ scale: 1.02 }}
            >
              <span>{item}</span>
              <ArrowUpRight className="h-4 w-4 text-foreground/40 transition group-hover:text-foreground/80" />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="relative mt-auto flex items-center gap-6 rounded-2xl border border-border/50 bg-white/10 px-6 py-5"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background text-lg font-semibold">
            <img src="/nsr.png" alt="Nasr" className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Booking new coding and art work for 2024.</p>
            <p className="text-xs text-foreground/60">Remote • Worldwide</p>
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
        eyebrow="Portfolio"
        title="Featured projects I&apos;m proud of."
        description="A showcase of my recent work combining Discord automation, web development, and 3D art."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
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
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_24px_48px_rgba(15,23,42,0.34)] will-change-transform ${
        project.featured ? 'md:col-span-2 xl:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } }}
      viewport={{ once: true, margin: "-80px" }}
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: index * 0.4 }}
      exit={{ opacity: 0, y: 20 }}
      style={{ rotateX, rotateY, transformPerspective: "1000px" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <motion.div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              {project.detail}
            </span>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          </div>
          {project.featured && (
            <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        {project.image && (
          <motion.div
            className="overflow-hidden rounded-2xl border border-border/60 bg-white/20 p-4 flex justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={`${project.title} logo`}
              className="h-20 w-20 object-contain"
              loading="lazy"
            />
          </motion.div>
        )}
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
      <motion.div
        className="relative mt-8 flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer"
        whileHover={{ x: 4 }}
      >
        View project
        <ExternalLink className="h-4 w-4" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-6 top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, delay: index * 0.6 }}
      />
    </motion.article>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="space-y-12">
      <SectionHeader
        eyebrow="Services"
        title="How I can support your project."
        description="I keep things fast, friendly, and easy to ship for your team."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/70 bg-white/8 p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-white/20 text-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-foreground/60">{service.summary}</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-foreground/70">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-foreground/10 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-foreground/60"
                >
                  {tech}
                </span>
              ))}
            </div>
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
        eyebrow="Journey"
        title="Building with passion and purpose."
        description="From Discord communities to Roblox games, I bring ideas to life with clean code and creative design."
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
            Every project starts with understanding your vision. What problem are we solving? Who are we building for? How can we make it feel effortless?
          </p>
          <p className="mt-6">
            I work closely with clients through Discord, provide regular updates, and ensure every detail meets your standards. Whether it's a Discord bot, website, or 3D asset, quality comes first.
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
        eyebrow="Let&apos;s work together"
        title="Ready to start your project?"
        description="Message me for Discord bots, websites, or custom 3D art. I respond within 24 hours."
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
              I work with gamers, developers, and creators who value quality and clear communication.
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
                Contact on Discord
                <MessageCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-3">
            {contactPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/60 bg-white/10 p-4 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith('https://discord.com') ? '_blank' : undefined}
                  rel={item.href.startsWith('https://discord.com') ? 'noopener noreferrer' : undefined}
                  className="mt-3 block text-sm font-medium text-foreground hover:text-primary"
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
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="max-w-2xl text-balance text-sm text-foreground/65 sm:text-base"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      >
        {description}
      </motion.p>
    </div>
  );
};
