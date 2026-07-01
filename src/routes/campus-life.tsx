import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { FACILITIES } from "@/lib/site-data";
import { LibraryBig, BedDouble, Trophy, Cpu, Bus, Utensils, HeartPulse, Building2 } from "lucide-react";
import aerial from "@/assets/campus-aerial.jpg";
import grad from "@/assets/graduation.jpg";
import lab from "@/assets/lab.jpg";
import lib from "@/assets/library.jpg";

const icons = [LibraryBig, BedDouble, Trophy, Cpu, Bus, Utensils, HeartPulse, Building2];

export const Route = createFileRoute("/campus-life")({
  head: () => ({ meta: [{ title: "Campus Life — AITR" }, { name: "description", content: "Life at AITR — clubs, sports, hostels, and student experiences." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Campus Life" title="More than an education — a community." description="Clubs, sports, cultural festivals and residential experiences that shape you beyond the classroom." crumbs={[{ label: "Campus Life" }]} />
      <section className="container-page py-20">
        <SectionHeading eyebrow="Facilities" title="A campus designed around students." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f, i) => {
            const I = icons[i];
            return (
              <div key={f.name} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-all">
                <I className="h-6 w-6 text-gold" />
                <div className="mt-4 font-semibold text-navy">{f.name}</div>
                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{f.desc}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container-page pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[aerial, grad, lab, lib, lab, aerial, lib, grad].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square" : "aspect-square"}`}>
              <img src={src} alt="Campus" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});