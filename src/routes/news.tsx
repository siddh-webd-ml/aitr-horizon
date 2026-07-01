import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import { NEWS } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News — AITR" }, { name: "description", content: "Latest news, announcements and press coverage of AITR." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Newsroom" title="Latest from AITR." crumbs={[{ label: "News" }]} />
      <section className="container-page py-20 grid gap-6 md:grid-cols-2">
        {[...NEWS, ...NEWS].map((n, i) => (
          <article key={i} className="rounded-2xl border border-border bg-card p-7 hover:shadow-soft transition-all">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest"><span className="text-gold font-semibold">{n.tag}</span><span className="text-muted-foreground">{n.date}</span></div>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy leading-snug">{n.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Read the full announcement and details on our press release page.</p>
          </article>
        ))}
      </section>
    </PublicLayout>
  ),
});