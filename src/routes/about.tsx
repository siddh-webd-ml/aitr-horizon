import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Target, Eye, Award, Users } from "lucide-react";
import aerial from "@/assets/campus-aerial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AITR — Vision, Mission & Leadership" },
    { name: "description", content: "Learn about Acropolis Institute of Technology and Research: our vision, mission, values and leadership." },
  ]}),
  component: AboutPage,
});

const LEADERSHIP = [
  { name: "Shri S. C. Sethi", role: "Chairman" },
  { name: "Dr. Kamal Sharma", role: "Director" },
  { name: "Dr. Suresh Jain", role: "Principal" },
  { name: "Dr. Meera Iyer", role: "Dean, Academics" },
];

function AboutPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="About AITR" title="A legacy of engineering excellence since 2000." description="Nurturing curious minds into industry-ready engineers, researchers and leaders." crumbs={[{ label: "About" }]} />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <img src={aerial} alt="AITR campus" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elegant object-cover aspect-[4/3]" />
          <div>
            <SectionHeading eyebrow="Who we are" title="An institute built for the future of engineering." />
            <p className="mt-5 text-muted-foreground leading-relaxed">Acropolis Institute of Technology and Research (AITR) is a leading engineering institute in central India. For 25 years we have combined rigorous academics with practical, hands-on learning to create engineers who are ready for the world.</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">Our 40-acre campus is home to 5000+ students across 12 departments, supported by a faculty of over 300 mentors, researchers and industry practitioners.</p>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-secondary/40 border-y border-border">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Vision & Mission" title="Purpose that guides everything we do." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-card border border-border p-8">
              <Eye className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy">Vision</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">To be a premier institute of engineering education, research and innovation — recognized globally for producing socially responsible technocrats and leaders.</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <Target className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy">Mission</h3>
              <ul className="mt-2 text-muted-foreground leading-relaxed space-y-2 list-disc pl-5">
                <li>Deliver world-class engineering education with strong industry alignment.</li>
                <li>Foster a culture of research, innovation and entrepreneurship.</li>
                <li>Develop ethical leaders committed to social and environmental responsibility.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="container-page py-20">
        <SectionHeading eyebrow="Leadership" title="Meet the people leading AITR forward." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-soft transition-all">
              <div className="mx-auto h-24 w-24 rounded-full gradient-navy text-gold grid place-items-center text-2xl font-display font-semibold">{l.name.split(" ").slice(-1)[0][0]}</div>
              <div className="mt-4 font-semibold text-navy">{l.name}</div>
              <div className="text-sm text-muted-foreground">{l.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Award, label: "NAAC A+ Accredited" },
            { icon: Users, label: "5000+ Students" },
            { icon: Target, label: "12 Departments" },
            { icon: Eye, label: "25+ Years of Legacy" },
          ].map(({ icon: I, label }) => (
            <div key={label} className="rounded-2xl border border-border p-6 flex items-center gap-4 bg-card">
              <I className="h-8 w-8 text-gold shrink-0" />
              <div className="font-semibold text-navy">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}