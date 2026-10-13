import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Btn, Logo, Reveal, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";
import { submitContact } from "@/lib/contact";

const benefits = [
  ["Increase Efficiency", "Automate repetitive operational processes and reduce manual workload."],
  ["Reduce Errors", "Use intelligent validation and automated processing to improve consistency."],
  [
    "Scale Faster",
    "Deploy AI capabilities across teams and locations without proportional increases in workload.",
  ],
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
              <h3 className="text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
                {t}
              </h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const stack = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "React",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "AWS",
  "Docker",
  "REST APIs",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
  "AI Agents",
];

export function TechStack() {
  return (
    <section className="border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Technologies we work with."
          text="TECHXIRO selects the right tools for each engagement, working across this modern AI and engineering ecosystem."
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((s, i) => (
            <Reveal key={s} delay={i * 30}>
              <span className="glass inline-block rounded-full px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60">
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center lg:py-40">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Ready to Build <span className="text-gradient">With AI?</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Transform your data, automate your operations, and build intelligent systems designed
            for scale.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn href="/contact">
            Talk to TECHXIRO <ArrowRight className="h-4 w-4" />
          </Btn>
          <Btn href="/solutions" variant="ghost">
            Start Your AI Journey
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}

const types = [
  "AI Automation",
  "Computer Vision",
  "Machine Learning",
  "AI Agents",
  "Data Analytics",
  "Custom AI Solution",
  "Web Development",
  "Chatbots",
];
type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  type: string;
  message: string;
};
const empty: Fields = { name: "", email: "", company: "", phone: "", type: "", message: "" };

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "Please enter a valid work email.";
  if (!f.company.trim()) e.company = "Please enter your company.";
  if (f.phone && !/^[+()\d\s-]{7,20}$/.test(f.phone))
    e.phone = "Please enter a valid phone number.";
  if (!f.type) e.type = "Please choose a project type.";
  if (f.message.trim().length < 10) e.message = "Please tell us a bit more (10+ characters).";
  if (f.message.length > 2000) e.message = "Message must be under 2000 characters.";
  return e;
}

export function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setF({ ...f, [k]: e.target.value });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    setSubmitError("");
    try {
      const result = await submitContact({ data: f });
      if (!result.success) {
        setSubmitError(
          result.reason === "configuration"
            ? "The contact form is temporarily unavailable. Please try again later."
            : "We could not send your request. Please try again.",
        );
        setStatus("error");
        return;
      }
      setStatus("done");
      setF(empty);
      setF(empty);
    } catch {
      setSubmitError("We could not send your request. Please try again.");
      setStatus("error");
    }
  }

  const input =
    "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";
  const field = (k: keyof Fields, label: string, type = "text", req = true) => (
    <label className="block text-sm">
      {label}
      {req && <span className="text-primary"> *</span>}
      <input
        type={type}
        value={f[k]}
        onChange={set(k)}
        className={cn(input, errors[k] && "border-destructive")}
        aria-invalid={!!errors[k]}
      />
      {errors[k] && <span className="mt-1 block text-xs text-destructive">{errors[k]}</span>}
    </label>
  );

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build your intelligent system."
            text="Tell us about your data, your workflows and what you want to achieve. Our team will get back to you to schedule a demo."
          />
        </div>
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          {status === "done" ? (
            <div
              className="flex min-h-[420px] flex-col items-center justify-center text-center"
              role="status"
            >
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <p className="mt-5 text-xl font-medium">Thank you. Your request has been received.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-primary underline-offset-4 hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              {field("name", "Full Name")}
              {field("email", "Work Email", "email")}
              {field("company", "Company")}
              {field("phone", "Phone", "tel", false)}
              <label className="block text-sm sm:col-span-2">
                Project Type<span className="text-primary"> *</span>
                <select
                  value={f.type}
                  onChange={set("type")}
                  className={cn(input, errors.type && "border-destructive")}
                  aria-invalid={!!errors.type}
                >
                  <option value="">Select a project type</option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {errors.type && (
                  <span className="mt-1 block text-xs text-destructive">{errors.type}</span>
                )}
              </label>
              <label className="block text-sm sm:col-span-2">
                Message<span className="text-primary"> *</span>
                <textarea
                  rows={5}
                  value={f.message}
                  onChange={set("message")}
                  className={cn(input, "resize-none", errors.message && "border-destructive")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <span id="contact-message-error" className="mt-1 block text-xs text-destructive">
                    {errors.message}
                  </span>
                )}
              </label>
              {submitError && (
                <p className="text-sm text-destructive sm:col-span-2" role="alert">
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
              >
                {status === "sending" ? "Sending…" : "Send Request"}{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: [
    string,
    [
      string,
      "/" | "/solutions" | "/technology" | "/how-it-works" | "/benefits" | "/about" | "/contact",
    ][],
  ][] = [
    [
      "Company",
      [
        ["About", "/about"],
        ["Solutions", "/solutions"],
        ["Technology", "/technology"],
        ["Contact", "/contact"],
      ],
    ],
    [
      "Solutions",
      [
        ["AI Automation", "/technology"],
        ["Computer Vision", "/technology"],
        ["Machine Learning", "/technology"],
        ["AI Agents", "/technology"],
        ["Data Intelligence", "/technology"],
        ["Web Development", "/technology"],
      ],
    ],
    [
      "Resources",
      [
        ["Insights", "/benefits"],
        ["Case Studies", "/solutions"],
        ["Documentation", "/how-it-works"],
      ],
    ],
  ];
  const social = [
    ["LinkedIn", "https://www.linkedin.com/company/techxiro/?viewAsMember=true"],
    ["Instagram", "https://www.instagram.com/techxiro.tech/"],
  ];
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Building intelligent systems for a smarter, more connected future.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {social.map(([l, h]) => (
              <a
                key={l}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:infotechxiro@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              infotechxiro@gmail.com
            </a>
          </div>
        </div>
        {cols.map(([t, ls]) => (
          <div key={t}>
            <p className="eyebrow">{t}</p>
            <ul className="mt-5 space-y-3">
              {ls.map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-sm text-muted-foreground hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © 2026 TECHXIRO. All Rights Reserved.
      </div>
    </footer>
  );
}
