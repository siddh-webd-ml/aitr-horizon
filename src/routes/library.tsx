import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import libImg from "@/assets/library.jpg";

export const Route = createFileRoute("/library")({
  head: () => ({ meta: [{ title: "Library — AITR" }, { name: "description", content: "Central library at AITR — books, journals and digital resources." }]}),
  component: () => (
    <PublicLayout>
      <PageHero eyebrow="Library" title="Knowledge at your fingertips." description="A modern central library with 100,000+ books, IEEE/ACM journals and 24×7 digital resources." crumbs={[{ label: "Library" }]} />
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={libImg} alt="Library" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elegant object-cover aspect-[4/3]" />
        <div>
          <SectionHeading eyebrow="Resources" title="Everything a researcher needs." />
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li className="rounded-xl border border-border p-4"><b className="text-navy">100,000+ Titles</b> across engineering, management and sciences.</li>
            <li className="rounded-xl border border-border p-4"><b className="text-navy">IEEE, ACM, Springer, Elsevier</b> digital journals accessible from campus.</li>
            <li className="rounded-xl border border-border p-4"><b className="text-navy">Silent Study Zones</b> and discussion rooms open till midnight.</li>
            <li className="rounded-xl border border-border p-4"><b className="text-navy">Digital Archive</b> of theses, papers and past examination papers.</li>
          </ul>
        </div>
      </section>
    </PublicLayout>
  ),
});