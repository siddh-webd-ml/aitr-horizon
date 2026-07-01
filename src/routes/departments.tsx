import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import { DEPARTMENTS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({ meta: [{ title: "Departments — AITR" }, { name: "description", content: "Explore engineering and management departments at AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Academics" title="Departments & schools." description="Twelve academic departments delivering world-class engineering and management education." crumbs={[{ label: "Departments" }]} />
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d) => (
            <div id={d.id} key={d.id} className="group rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl gradient-navy text-gold grid place-items-center font-display font-semibold">{d.code}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy leading-tight">{d.name}</h3>
                  <div className="text-xs text-muted-foreground">HOD: {d.hod}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              <Link to="/programs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy story-link">Programs offered <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});