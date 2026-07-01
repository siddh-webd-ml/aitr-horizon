import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { FlaskConical, BookOpen, Award } from "lucide-react";

const areas = [
  { t: "Artificial Intelligence", d: "Vision, NLP and applied ML research." },
  { t: "Renewable Energy", d: "Solar microgrids and smart grid systems." },
  { t: "Robotics & IoT", d: "Autonomous systems, embedded platforms." },
  { t: "Cybersecurity", d: "Network security, cryptography and privacy." },
  { t: "Sustainable Materials", d: "Green construction and material science." },
  { t: "Data Science", d: "Analytics, visualisation and big-data systems." },
];

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "Research — AITR" }, { name: "description", content: "Research areas, labs and publications at AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Research" title="Ideas that move the world forward." description="A vibrant research culture across engineering disciplines with active labs, publications and industry collaborations." crumbs={[{ label: "Research" }]} />
      <section className="container-page py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[{ i: FlaskConical, v: "40+", l: "Research labs" }, { i: BookOpen, v: "600+", l: "Publications" }, { i: Award, v: "35+", l: "Patents filed" }].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4"><s.i className="h-8 w-8 text-gold" /><div><div className="font-display text-2xl font-semibold text-navy">{s.v}</div><div className="text-sm text-muted-foreground">{s.l}</div></div></div>
          ))}
        </div>
      </section>
      <section className="container-page pb-24">
        <SectionHeading eyebrow="Focus areas" title="Where our researchers are exploring." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-7 hover:shadow-soft transition-all">
              <h3 className="font-display text-lg font-semibold text-navy">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});