import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={cn("reveal", inView && "in", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>}
    </Reveal>
  );
}

export function Btn({
  href,
  children,
  variant = "primary",
  className,
}: { href: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      }}
      onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:shadow-glow"
          : "border border-border bg-secondary/40 text-foreground hover:bg-secondary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 font-semibold tracking-[0.18em]" aria-label="TECHXIRO home">
      <span className="relative grid h-7 w-7 place-items-center rounded-md border border-primary/50">
        <span className="h-2.5 w-2.5 rotate-45 bg-primary" />
      </span>
      TECH<span className="text-primary">X</span>IRO
    </a>
  );
}
