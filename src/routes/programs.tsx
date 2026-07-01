import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import { PROGRAMS } from "@/lib/site-data";
import heroImg from "@/assets/hero-campus.jpg";
import labImg from "@/assets/lab.jpg";
import gradImg from "@/assets/graduation.jpg";
import libraryImg from "@/assets/library.jpg";

const imgs = [heroImg, labImg, gradImg, libraryImg];

export const Route = createFileRoute("/programs")({
  head: () => ({ meta: [{ title: "Programs — AITR" }, { name: "description", content: "Undergraduate, postgraduate and research programs at AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Programs" title="Choose the path that fits your ambition." description="Undergraduate, postgraduate and research programs across engineering, management and computer applications." crumbs={[{ label: "Programs" }]} />
      <section className="container-page py-20 space-y-8">
        {PROGRAMS.map((p, i) => (
          <div key={p.title} className={`grid gap-8 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={imgs[i % imgs.length]} alt={p.title} width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-gold font-semibold">{p.tag}</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Duration: {p.duration}</div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> Intake: 120 seats</div>
              </div>
              <Button asChild className="mt-6 rounded-full bg-navy text-navy-foreground hover:bg-navy/90"><Link to="/admissions">Apply for {p.tag} <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
        ))}
      </section>
    </PublicLayout>
  ),
});