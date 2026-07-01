import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, description, crumbs = [] }: { eyebrow?: string; title: string; description?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <section className="relative gradient-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.14_85/0.35),transparent_50%)]" aria-hidden />
      <div className="container-page relative py-16 md:py-24">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 opacity-50" />
                {c.href ? <Link to={c.href} className="hover:text-gold">{c.label}</Link> : <span className="text-white">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-gold font-semibold mb-4">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">{title}</h1>
        {description && <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}