import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAVBAR_LOGO_SRC = "/images/techxiro-navbar-logo.png";

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

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
      )}
    </Reveal>
  );
}

export function Btn({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  href: "/" | "/solutions" | "/technology" | "/how-it-works" | "/benefits" | "/about" | "/contact";
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={ref}
      to={href}
      onClick={onClick}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      }}
      onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-[transform,background-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
          : "border border-border bg-card text-foreground hover:bg-secondary",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 font-semibold tracking-[0.16em] text-xl"
      aria-label="TECHXIRO home"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <img
          src={NAVBAR_LOGO_SRC}
          alt=""
          className="block h-full w-full object-contain"
        />
      </span>
      <span className="font-bold tracking-wider text-foreground text-xl">
        TECH
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-extrabold">
          X
        </span>
        IRO
      </span>
    </Link>
  );
}
