import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Activity, Bot, Database, HeartPulse } from "lucide-react";
import { Btn, Logo, Reveal, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

const benefits = [
  ["Increase Efficiency", "Automate repetitive operational processes and reduce manual workload."],
  ["Reduce Errors", "Use intelligent validation and automated processing to improve consistency."],
  ["Scale Faster", "Deploy AI capabilities across teams and locations without proportional increases in workload."],
  ["Real-Time Intelligence", "Turn live data into actionable insights."],
  ["Connected Systems", "Connect AI models, databases, dashboards and business workflows."],
];

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader eyebrow="Benefits" title="Built to Create Measurable Business Impact" />
      <div className="mt-14 divide-y divide-border border-y border-border">
        {benefits.map(([t, d], i) => (
          <Reveal key={t}>
            <div className="group grid gap-3 py-8 transition-colors sm:grid-cols-[80px_1fr_1.2fr] sm:items-center sm:gap-8 lg:py-10">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <h3 className="text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const stack = ["Python", "TensorFlow", "PyTorch", "OpenCV", "React", "Next.js", "FastAPI", "PostgreSQL", "AWS", "Docker", "REST APIs", "Machine Learning", "Generative AI", "Computer Vision", "AI Agents"];

export function TechStack() {
  return (
    <section className="border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Technology Stack" title="Technologies we work with." text="TECHXIRO selects the right tools for each engagement, working across this modern AI and engineering ecosystem." />
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((s, i) => (
            <Reveal key={s} delay={i * 30}>
              <span className="glass inline-block rounded-full px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary">{s}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Dashboard() {
  const [data, setData] = useState(() => Array.from({ length: 24 }, (_, i) => 40 + Math.round(Math.sin(i / 2) * 20 + 20)));
  const [processed, setProcessed] = useState(128430);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setData((d) => [...d.slice(1), Math.max(15, Math.min(95, d[d.length - 1]! + Math.round(Math.random() * 30 - 15)))]);
      setProcessed((p) => p + Math.round(Math.random() * 40 + 10));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const path = data.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (data.length - 1)) * 100},${100 - v}`).join(" ");
  const insights = ["Anomaly flagged in stream 14", "Demand forecast updated", "Validation pass: 1,204 records", "Agent completed reconciliation"];
  const stat = (Icon: typeof Activity, l: string, v: string) => (
    <div className="rounded-xl border border-border bg-background/50 p-4">
      <p className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{l}</p>
      <p className="mt-2 text-xl font-semibold tabular-nums">{v}</p>
    </div>
  );
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader eyebrow="Platform Preview" title="Intelligence you can see, in real time." text="An illustrative interface showing how TECHXIRO systems surface activity, health and insights." />
      <Reveal className="glass mt-14 rounded-2xl p-4 shadow-glow sm:p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /></div>
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />ALL SYSTEMS OPERATIONAL</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stat(Database, "Records processed", processed.toLocaleString("en-US"))}
          {stat(Activity, "Accuracy", "99.2%")}
          {stat(Bot, "Active agents", "12")}
          {stat(HeartPulse, "System health", "Optimal")}
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-border bg-background/50 p-5">
            <div className="flex justify-between text-xs text-muted-foreground"><span>AI activity</span><span className="font-mono">LIVE · 24 pts</span></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-4 h-48 w-full" aria-label="Activity chart">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${path} L100,100 L0,100 Z`} fill="url(#area)" className="transition-all duration-700" />
              <path d={path} fill="none" stroke="var(--primary)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" className="transition-all duration-700" />
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              {[["Latency", "42ms", 70], ["Throughput", "3.1k/s", 85], ["Data volume", "1.8 TB", 55]].map(([l, v, p]) => (
                <div key={l as string}>
                  <p className="text-muted-foreground">{l}</p>
                  <p className="mt-1 font-medium">{v}</p>
                  <div className="mt-2 h-1 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${p}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background/50 p-5">
            <p className="text-xs text-muted-foreground">Recent insights</p>
            <ul className="mt-4 space-y-3">
              {insights.map((t, i) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", i === 0 ? "bg-primary animate-pulse-dot" : "bg-muted-foreground")} />
                  <span>{t}<span className="block font-mono text-[10px] text-muted-foreground">{i * 3 + 1} min ago</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60">
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center lg:py-40">
        <Reveal><h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Ready to Build <span className="text-gradient">With AI?</span></h2></Reveal>
        <Reveal delay={100}><p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Transform your data, automate your operations, and build intelligent systems designed for scale.</p></Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn href="#contact">Talk to TECHXIRO <ArrowRight className="h-4 w-4" /></Btn>
          <Btn href="#solutions" variant="ghost">Start Your AI Journey</Btn>
        </Reveal>
      </div>
    </section>
  );
}

const types = ["AI Automation", "Computer Vision", "Machine Learning", "AI Agents", "Data Analytics", "Custom AI Solution"];
type Fields = { name: string; email: string; company: string; phone: string; type: string; message: string };
const empty: Fields = { name: "", email: "", company: "", phone: "", type: "", message: "" };

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid work email.";
  if (!f.company.trim()) e.company = "Please enter your company.";
  if (f.phone && !/^[+()\d\s-]{7,20}$/.test(f.phone)) e.phone = "Please enter a valid phone number.";
  if (!f.type) e.type = "Please choose a project type.";
  if (f.message.trim().length < 10) e.message = "Please tell us a bit more (10+ characters).";
  if (f.message.length > 2000) e.message = "Message must be under 2000 characters.";
  return e;
}

/**
 * Submission handler. To connect a backend, replace the simulated delay with:
 *   await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
 * and throw if the response is not ok.
 */
async function submitContact(_data: Fields) {
  await new Promise((r) => setTimeout(r, 900));
}

export function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      await submitContact(f);
      setStatus("done");
      setF(empty);
    } catch {
      setStatus("error");
    }
  }

  const input = "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";
  const field = (k: keyof Fields, label: string, type = "text", req = true) => (
    <label className="block text-sm">
      {label}{req && <span className="text-primary"> *</span>}
      <input type={type} value={f[k]} onChange={set(k)} className={cn(input, errors[k] && "border-destructive")} aria-invalid={!!errors[k]} />
      {errors[k] && <span className="mt-1 block text-xs text-destructive">{errors[k]}</span>}
    </label>
  );

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="Let's build your intelligent system." text="Tell us about your data, your workflows and what you want to achieve. Our team will get back to you to schedule a demo." />
        </div>
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <p className="mt-5 text-xl font-medium">Thank you. Your request has been received.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-primary underline-offset-4 hover:underline">Send another request</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              {field("name", "Full Name")}
              {field("email", "Work Email", "email")}
              {field("company", "Company")}
              {field("phone", "Phone", "tel", false)}
              <label className="block text-sm sm:col-span-2">
                Project Type<span className="text-primary"> *</span>
                <select value={f.type} onChange={set("type")} className={cn(input, errors.type && "border-destructive")} aria-invalid={!!errors.type}>
                  <option value="">Select a project type</option>
                  {types.map((t) => <option key={t}>{t}</option>)}
                </select>
                {errors.type && <span className="mt-1 block text-xs text-destructive">{errors.type}</span>}
              </label>
              <label className="block text-sm sm:col-span-2">
                Message<span className="text-primary"> *</span>
                <textarea rows={5} value={f.message} onChange={set("message")} className={cn(input, "resize-none", errors.message && "border-destructive")} aria-invalid={!!errors.message} />
                {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}
              </label>
              {status === "error" && <p className="text-sm text-destructive sm:col-span-2">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow disabled:opacity-60 sm:col-span-2 sm:justify-self-start">
                {status === "sending" ? "Sending…" : "Send Request"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: [string, [string, string][]][] = [
    ["Company", [["About", "#about"], ["Solutions", "#solutions"], ["Technology", "#technology"], ["Contact", "#contact"]]],
    ["Solutions", [["AI Automation", "#technology"], ["Computer Vision", "#technology"], ["Machine Learning", "#technology"], ["AI Agents", "#technology"], ["Data Intelligence", "#technology"]]],
    ["Resources", [["Insights", "#benefits"], ["Case Studies", "#solutions"], ["Documentation", "#how-it-works"]]],
  ];
  const social = [["LinkedIn", "https://www.linkedin.com"], ["Instagram", "https://www.instagram.com"], ["X", "https://x.com"], ["GitHub", "https://github.com"]];
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">Building intelligent systems for a smarter, more connected future.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {social.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary">{l}</a>)}
          </div>
        </div>
        {cols.map(([t, ls]) => (
          <div key={t}>
            <p className="eyebrow">{t}</p>
            <ul className="mt-5 space-y-3">
              {ls.map(([l, h]) => <li key={l}><a href={h} className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">© 2026 TECHXIRO. All Rights Reserved.</div>
    </footer>
  );
}
