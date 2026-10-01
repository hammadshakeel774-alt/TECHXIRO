import { useState } from "react";
import {
  Database, Cpu, Lightbulb, ShieldCheck, Network, Eye, BrainCircuit, Bot, MessageSquareText, BarChart3, Workflow,
  ScanSearch, BookOpen, TrendingUp, Scale, Zap, Gauge, ArrowRight, ShoppingBag, Users, LineChart, Layers,
} from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Database, t: "Data Captured", d: "Cameras, sensors, documents and business systems stream into one pipeline.", more: "Structured and unstructured inputs are ingested, timestamped and normalized automatically." },
  { icon: Cpu, t: "AI Processing", d: "Models analyze every input the moment it arrives.", more: "Vision, language and predictive models run in parallel, scaled to the volume of incoming data." },
  { icon: Lightbulb, t: "Insights Generated", d: "Patterns and anomalies become clear, ranked insights.", more: "Findings are scored by confidence and business impact so teams see what matters first." },
  { icon: ShieldCheck, t: "Decisions Validated", d: "Rules and human-in-the-loop checks confirm every output.", more: "Validation layers cross-check results against policy, history and expert review where needed." },
  { icon: Network, t: "Systems Connected", d: "Results flow into the tools your teams already use.", more: "Dashboards, ERPs, CRMs and alerts receive actions through secure APIs and integrations." },
];

export function Architecture() {
  const [active, setActive] = useState(0);
  const A = steps[active];
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader eyebrow="System Architecture" title="One Intelligent Workflow. Complete Business Visibility." />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <ol className="relative space-y-2 border-l border-border pl-6 lg:pl-8">
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              <span className={cn("absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full border border-primary transition-all lg:-left-[37px]", i <= active ? "bg-primary shadow-glow" : "bg-background")} />
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn("w-full rounded-xl border p-5 text-left transition-all duration-300", active === i ? "border-primary/40 bg-accent/40" : "border-transparent hover:bg-secondary/40")}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <s.icon className={cn("h-5 w-5 transition-colors", active === i ? "text-primary" : "text-muted-foreground")} />
                  <span className="font-medium">{s.t}</span>
                </div>
                <p className="mt-2 pl-[52px] text-sm text-muted-foreground">{s.d}</p>
                <div className={cn("grid transition-all duration-500", active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="overflow-hidden pl-[52px] pt-2 text-sm text-foreground/80">{s.more}</p>
                </div>
              </button>
            </li>
          ))}
        </ol>
        <Reveal className="glass relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-8">
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>PIPELINE / STAGE 0{active + 1}</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />ACTIVE</span>
          </div>
          <div className="relative flex items-center justify-between gap-1 py-10">
            {steps.map((s, i) => (
              <div key={s.t} className="flex flex-1 items-center">
                <div className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-all duration-500 sm:h-14 sm:w-14", i === active ? "scale-110 border-primary bg-primary text-primary-foreground shadow-glow" : i < active ? "border-primary/50 text-primary" : "border-border text-muted-foreground")}>
                  <s.icon className="h-5 w-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className="relative mx-1 h-px flex-1 bg-border">
                    <div className={cn("absolute inset-y-0 left-0 bg-primary transition-all duration-700", i < active ? "w-full" : "w-0")} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div key={active} className="relative animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h3 className="text-2xl font-semibold">{A.t}</h3>
            <p className="mt-2 max-w-md text-muted-foreground">{A.more}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const techs = [
  { icon: Eye, t: "Computer Vision", d: "Detect objects, movements, environments and behavioral patterns from visual data." },
  { icon: BrainCircuit, t: "Machine Learning", d: "Transform historical and real-time data into predictive intelligence." },
  { icon: Bot, t: "AI Agents", d: "Build autonomous systems capable of reasoning, executing tasks and improving workflows." },
  { icon: MessageSquareText, t: "Natural Language Processing", d: "Understand documents, conversations, queries and unstructured information." },
  { icon: BarChart3, t: "Data Intelligence", d: "Convert complex datasets into useful business insights." },
  { icon: Workflow, t: "Automation", d: "Connect AI intelligence directly to business workflows and operational systems." },
];

export function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader eyebrow="Core Technology" title="AI-Driven Technology Built for Real-World Impact" />
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {techs.map((t, i) => (
          <Reveal key={t.t} delay={i * 60} className="group relative h-full bg-background p-8 transition-colors duration-300 hover:bg-surface">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-border transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:border-primary/60 group-hover:shadow-glow">
              <t.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-6 text-lg font-medium">{t.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const pairs = [
  ["Manual Processing", "Teams spend valuable time collecting, cleaning and analyzing information manually.", "Instant AI Processing", "AI systems process large amounts of information automatically and provide results in real time."],
  ["Human Error", "Manual workflows introduce mistakes and inconsistent results.", "Intelligent Validation", "AI-powered validation continuously checks information and improves consistency."],
  ["Disconnected Systems", "Data remains trapped across different platforms and departments.", "Connected Intelligence", "TECHXIRO connects data, AI models, dashboards and business workflows into one intelligent ecosystem."],
];

export function ProblemSolution() {
  const [solved, setSolved] = useState<boolean[]>([false, false, false]);
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader eyebrow="Problem vs Solution" title="Traditional Systems Are Slowing Businesses Down" text="Select a challenge to see how intelligent systems replace it." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pairs.map(([p, pd, s, sd], i) => (
            <Reveal key={p} delay={i * 80}>
              <button
                onClick={() => setSolved((x) => x.map((v, j) => (j === i ? !v : v)))}
                aria-pressed={solved[i]}
                className={cn("relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border p-8 text-left transition-colors duration-500", solved[i] ? "border-primary/40 bg-accent/30" : "border-border bg-background")}
              >
                <div className={cn("transition-all duration-500", solved[i] ? "-translate-y-6 opacity-0" : "opacity-100")}>
                  <p className="font-mono text-xs text-destructive">PROBLEM 0{i + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{p}</h3>
                  <p className="mt-3 text-muted-foreground">{pd}</p>
                </div>
                <div className={cn("absolute inset-8 transition-all duration-500", solved[i] ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0")}>
                  <p className="font-mono text-xs text-primary">SOLUTION 0{i + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{s}</h3>
                  <p className="mt-3 text-muted-foreground">{sd}</p>
                </div>
                <span className="absolute bottom-6 left-8 flex items-center gap-2 text-sm text-primary">
                  {solved[i] ? "Show problem" : "See the solution"} <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const caps = [
  [ScanSearch, "Detect", "Identify patterns, objects, events and anomalies from real-time data."],
  [BookOpen, "Understand", "Transform raw information into meaningful context."],
  [TrendingUp, "Predict", "Forecast trends and potential outcomes."],
  [Scale, "Decide", "Generate intelligent recommendations from available evidence."],
  [Zap, "Automate", "Execute repetitive workflows without manual intervention."],
  [Gauge, "Optimize", "Continuously improve operational performance."],
] as const;

export function Capabilities() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader eyebrow="AI Capabilities" title="What TECHXIRO Intelligence Can Do" />
      <div className="mt-14 flex flex-col gap-3 lg:h-[380px] lg:flex-row">
        {caps.map(([Icon, t, d], i) => (
          <button
            key={t}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            onClick={() => setOpen(i)}
            aria-expanded={open === i}
            className={cn("group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 lg:p-7", open === i ? "border-primary/40 bg-accent/30 lg:flex-[3]" : "border-border bg-surface/40 lg:flex-1")}
          >
            <Icon className={cn("h-6 w-6 transition-colors", open === i ? "text-primary" : "text-muted-foreground")} />
            <p className="mt-4 font-mono text-xs text-muted-foreground lg:absolute lg:bottom-7 lg:mt-0">0{i + 1}</p>
            <h3 className={cn("mt-2 text-xl font-semibold uppercase tracking-wider lg:mt-6", open !== i && "lg:[writing-mode:vertical-rl] lg:rotate-180")}>{t}</h3>
            <p className={cn("mt-3 max-w-xs text-muted-foreground transition-opacity duration-500", open === i ? "opacity-100" : "hidden lg:block lg:opacity-0")}>{d}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

const process = [
  ["Discover", "Understand the organization's challenges, workflows and data."],
  ["Build", "Design and develop customized AI systems."],
  ["Integrate", "Connect AI with existing software, databases and business tools."],
  ["Scale", "Monitor performance and continuously improve the system."],
];

export function Process() {
  return (
    <section id="how-it-works" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader eyebrow="How It Works" title="A clear path from first conversation to production AI." />
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map(([t, d], i) => (
            <Reveal key={t} delay={i * 150} className="group">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 font-mono text-sm text-primary">0{i + 1}</span>
                <div className="relative h-px flex-1 overflow-hidden bg-border">
                  <div className="reveal-bar absolute inset-y-0 left-0 w-full origin-left bg-primary transition-transform duration-[1200ms] [.in_&]:scale-x-100 scale-x-0" style={{ transitionDelay: `${i * 300 + 300}ms` }} />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const uses = [
  [ShoppingBag, "Retail Intelligence", "Understand footfall, shelf activity and shopper behavior across locations."],
  [Eye, "Computer Vision", "Turn camera feeds into structured, searchable operational events."],
  [Users, "Customer Analytics", "Segment, score and anticipate customer needs from every touchpoint."],
  [Zap, "AI Automation", "Remove repetitive work from back-office and operational workflows."],
  [LineChart, "Predictive Analytics", "Forecast demand, risk and resource needs before they surface."],
  [Bot, "Enterprise AI Agents", "Deploy agents that research, reason and act inside your tools."],
  [Layers, "Data Intelligence", "Unify scattered datasets into one decision-ready layer."],
  [Workflow, "Workflow Automation", "Orchestrate multi-step processes across teams and systems."],
] as const;

export function UseCases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Use Cases" title="Intelligence applied where it matters." text="Scroll horizontally to explore how TECHXIRO systems fit different industries and teams." />
      </div>
      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:thin]" tabIndex={0} aria-label="Use cases">
        {uses.map(([Icon, t, d]) => (
          <a key={t} href="#contact" className="group glass relative flex w-[280px] shrink-0 snap-start flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:w-[320px]">
            <div className="grid h-28 place-items-center rounded-xl bg-accent/30">
              <Icon className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="mt-6 text-lg font-medium">{t}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
            <span className="mt-6 flex items-center gap-2 text-sm text-primary">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
