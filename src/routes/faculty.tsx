import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import { FACULTY_LIST } from "@/lib/site-data";
import { Mail, Linkedin } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title: "Faculty — AITR" }, { name: "description", content: "Meet the professors, HODs and mentors of AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Faculty" title="Learn from the best minds in the field." description="Our faculty combines academic rigour with industry and research experience across every discipline." crumbs={[{ label: "Faculty" }]} />
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY_LIST.map((f) => (
            <div key={f.name} className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-soft transition-all">
              <div className="mx-auto h-24 w-24 rounded-full gradient-navy text-gold grid place-items-center text-2xl font-display font-semibold">{f.name.split(" ")[1]?.[0] || f.name[0]}</div>
              <div className="mt-4 font-semibold text-navy">{f.name}</div>
              <div className="text-xs text-muted-foreground">{f.role}</div>
              <div className="text-xs text-gold font-semibold mt-1">{f.exp} experience</div>
              <div className="mt-4 flex justify-center gap-2">
                <a href="#" aria-label="Email" className="h-8 w-8 grid place-items-center rounded-full border border-border hover:bg-muted"><Mail className="h-3.5 w-3.5" /></a>
                <a href="#" aria-label="LinkedIn" className="h-8 w-8 grid place-items-center rounded-full border border-border hover:bg-muted"><Linkedin className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});