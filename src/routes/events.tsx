import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import { EVENTS } from "@/lib/site-data";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — AITR" }, { name: "description", content: "Upcoming events, workshops, hackathons and seminars at AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Events" title="What's coming up at AITR." description="Workshops, hackathons, symposia and cultural events open to students and industry." crumbs={[{ label: "Events" }]} />
      <section className="container-page py-20">
        <div className="space-y-4">
          {EVENTS.map((e) => (
            <div key={e.title} className="rounded-2xl border border-border bg-card p-6 flex gap-5 items-center hover:shadow-soft transition-all">
              <div className="h-20 w-20 shrink-0 rounded-xl gradient-navy text-gold grid place-items-center">
                <div className="text-center leading-none"><div className="text-2xl font-display font-semibold">{e.date.split(" ")[1]}</div><div className="text-xs mt-1 uppercase tracking-widest">{e.date.split(" ")[0]}</div></div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-navy">{e.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </div>
              <Calendar className="h-5 w-5 text-muted-foreground hidden sm:block" />
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});