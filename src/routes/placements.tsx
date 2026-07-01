import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { RECRUITERS } from "@/lib/site-data";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { y: "2021", avg: 5.2, high: 22 },
  { y: "2022", avg: 5.8, high: 26 },
  { y: "2023", avg: 6.4, high: 32 },
  { y: "2024", avg: 6.9, high: 38 },
  { y: "2025", avg: 7.4, high: 42 },
];

export const Route = createFileRoute("/placements")({
  head: () => ({ meta: [{ title: "Placements — AITR" }, { name: "description", content: "AITR placement highlights, top recruiters and packages." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Placements" title="Every year, better than the last." description="200+ recruiters, record packages and a placement culture that puts students first." crumbs={[{ label: "Placements" }]} />

      <section className="container-page py-20">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { v: "₹42 LPA", l: "Highest package" },
            { v: "₹7.4 LPA", l: "Average package" },
            { v: "95%", l: "Placement rate" },
            { v: "200+", l: "Recruiters" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6"><div className="font-display text-3xl font-semibold text-navy">{s.v}</div><div className="text-sm text-muted-foreground mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <SectionHeading eyebrow="Trend" title="Package growth over 5 years." />
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 h-[360px]">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="y" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
              <Bar dataKey="avg" name="Average (LPA)" fill="var(--navy)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="high" name="Highest (LPA)" fill="var(--gold)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="container-page pb-24">
        <SectionHeading eyebrow="Our recruiters" title="Loved by top companies." />
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3">
          {RECRUITERS.map((r) => (
            <div key={r} className="aspect-[3/2] grid place-items-center rounded-xl border border-border bg-card font-display font-semibold text-navy hover:shadow-soft transition-all">{r}</div>
          ))}
        </div>
      </section>
    </PublicLayout>
  ),
});