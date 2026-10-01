import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Btn, Logo, Reveal, useInView, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "#home"],
  ["Solutions", "#solutions"],
  ["Technology", "#technology"],
  ["How It Works", "#how-it-works"],
  ["Benefits", "#benefits"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent")}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block"><Btn href="#contact" className="px-5 py-2">Book a Demo</Btn></div>
        <button className="rounded-md p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border px-5 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {links.map(([l, h]) => (
              <li key={h}><a onClick={() => setOpen(false)} href={h} className="block py-3 text-lg">{l}</a></li>
            ))}
          </ul>
          <Btn href="#contact" className="w-full">Book a Demo</Btn>
        </div>
      )}
    </header>
  );
}

function HeroViz() {
  const nodes: [number, number][] = [[60, 80], [200, 40], [330, 110], [110, 220], [260, 240], [380, 300], [70, 340], [210, 380]];
  const edges: [number, number][] = [[0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 5], [4, 5], [3, 6], [6, 7], [4, 7], [7, 5]];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full bg-glow/20 blur-3xl" />
      <svg viewBox="0 0 440 440" className="relative h-full w-full" aria-hidden>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a]![0]} y1={nodes[a]![1]} x2={nodes[b]![0]} y2={nodes[b]![1]} className="animate-dash stroke-primary/50" strokeWidth="1" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" className="fill-primary/10 animate-pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
            <circle cx={x} cy={y} r="3.5" className="fill-primary" />
          </g>
        ))}
        <rect x="150" y="150" width="120" height="90" rx="6" className="fill-none stroke-primary" strokeWidth="1.2" strokeDasharray="14 60" />
      </svg>
      <div className="glass animate-float absolute left-0 top-[18%] rounded-xl px-4 py-3 text-xs">
        <p className="font-mono text-muted-foreground">MODEL ACCURACY</p>
        <p className="mt-1 text-xl font-semibold">99.2%</p>
      </div>
      <div className="glass animate-float absolute bottom-[14%] right-0 rounded-xl px-4 py-3 text-xs" style={{ animationDelay: "1.5s" }}>
        <p className="flex items-center gap-2 font-mono text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />LIVE STREAM</p>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[5, 8, 4, 9, 6, 10, 7].map((h, i) => (
            <span key={i} className="w-1.5 rounded-sm bg-primary animate-bar" style={{ height: `${h * 10}%`, animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
      <div className="glass absolute right-[10%] top-[6%] rounded-lg px-3 py-2 font-mono text-[10px] text-primary">object: person · 0.97</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <Reveal><p className="eyebrow">AI • Data • Automation • Intelligence</p></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Turn Complex Data Into <span className="text-gradient">Intelligent Decisions.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              TECHXIRO builds intelligent AI systems that transform data, automate operations, and deliver actionable insights in real time.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
            <Btn href="#contact">Start Your AI Journey <ArrowRight className="h-4 w-4" /></Btn>
            <Btn href="#technology" variant="ghost">Explore Our Technology</Btn>
          </Reveal>
        </div>
        <Reveal delay={200}><HeroViz /></Reveal>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal><p className="eyebrow">About TECHXIRO</p></Reveal>
        <div>
          <Reveal>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              From Data. <span className="text-muted-foreground">To Intelligence.</span> <span className="text-primary">To Action.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Most organizations are rich in data and short on clarity. TECHXIRO designs AI systems that read across your operations, surface what matters, and turn it into decisions your teams can act on — faster, more consistently, and at scale.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{v}{suffix}</>;
}

export function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const items: [number, string, string][] = [
    [99, "%+", "AI Processing Accuracy"],
    [10, "x", "Faster Data Analysis"],
    [24, "/7", "Intelligent Automation"],
    [40, "%", "Operational Efficiency"],
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map(([n, s, l], i) => (
          <div key={l} className={cn("px-5 py-12 lg:px-8 lg:py-16", i % 2 === 1 && "border-l border-border", i >= 2 && "border-t border-border lg:border-t-0", i === 2 && "lg:border-l")}>
            <p className="text-4xl font-semibold tracking-tight sm:text-6xl"><Counter to={n} suffix={s} run={inView} /></p>
            <p className="mt-3 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { SectionHeader };
