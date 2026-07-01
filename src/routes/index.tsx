import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Handshake, FlaskConical, Microscope, Lightbulb, TrendingUp, Star, Building2, BedDouble, Trophy, Cpu, Bus, Utensils, HeartPulse, LibraryBig, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/site/PublicLayout";
import { SectionHeading } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";
import { STATS, WHY_CHOOSE, PROGRAMS, FACILITIES, RECRUITERS, TESTIMONIALS, NEWS } from "@/lib/site-data";
import heroImg from "@/assets/hero-campus.jpg";
import gradImg from "@/assets/graduation.jpg";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const ICONS = { GraduationCap, Handshake, FlaskConical, Microscope, Lightbulb, TrendingUp } as const;
const FACILITY_ICONS = [LibraryBig, BedDouble, Trophy, Cpu, Bus, Utensils, HeartPulse, Building2];

function Index() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-navy text-navy-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AITR campus" width={1920} height={1152} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="container-page relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold tracking-widest uppercase animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Admissions 2026 Open
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.02] animate-fade-in">
              Empowering Future Engineers Through <span className="text-gold">Innovation</span> and Excellence
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in">
              A premier institute shaping curious minds into industry-ready engineers, researchers and leaders since 2000.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold h-12 px-6 rounded-full">
                <Link to="/programs">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 text-white hover:bg-white/10 hover:text-white gap-2">
                <Link to="/campus-life"><Play className="h-4 w-4" /> Campus Tour</Link>
              </Button>
            </div>

            {/* stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-gold"><Counter value={s.value} suffix={s.suffix} /></div>
                  <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Why AITR" title="A campus built for ambition." description="Six pillars that make AITR a launchpad for engineers, entrepreneurs and researchers." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w) => {
            const I = ICONS[w.icon as keyof typeof ICONS];
            return (
              <div key={w.title} className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl grid place-items-center gradient-navy text-gold shadow-soft">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Programs" title="Explore what you can study at AITR." />
            <Button asChild variant="outline" className="rounded-full"><Link to="/programs">View all programs <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p, i) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={[heroImg, gradImg, labImg, libraryImg][i % 4]} alt="" width={640} height={480} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gold font-semibold">
                    <span>{p.tag}</span><span className="text-muted-foreground">{p.duration}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.desc}</p>
                  <Link to="/programs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy story-link">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities split */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={libraryImg} alt="Library" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elegant object-cover aspect-[4/3]" />
            <div className="absolute -bottom-8 -right-4 md:-right-10 rounded-2xl bg-card shadow-elegant border border-border p-5 max-w-xs hidden sm:block">
              <div className="text-3xl font-display font-semibold text-navy">100K+</div>
              <div className="text-sm text-muted-foreground mt-1">Books, journals & digital archives across every discipline.</div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Campus Facilities" title="Everything you need to learn, live and grow." />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {FACILITIES.map((f, i) => {
                const I = FACILITY_ICONS[i];
                return (
                  <div key={f.name} className="rounded-xl border border-border bg-card p-4 hover:border-navy/30 transition-colors">
                    <I className="h-5 w-5 text-gold" />
                    <div className="mt-3 font-semibold text-navy text-sm">{f.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="gradient-navy text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">Placements 2025</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">A record-breaking year of student success.</h2>
              <p className="mt-4 text-white/75 leading-relaxed max-w-lg">Our dedicated placement cell partners with 200+ recruiters across product, service and research to unlock opportunities for every student.</p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div><div className="text-3xl font-display font-semibold text-gold">₹42 <span className="text-xl">LPA</span></div><div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Highest</div></div>
                <div><div className="text-3xl font-display font-semibold text-gold">₹7.4 <span className="text-xl">LPA</span></div><div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Average</div></div>
                <div><div className="text-3xl font-display font-semibold text-gold">95%</div><div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Placed</div></div>
              </div>
              <Button asChild className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-semibold"><Link to="/placements">View placement report <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
            <div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {RECRUITERS.map((r) => (
                  <div key={r} className="aspect-[3/2] grid place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm font-display font-semibold text-white/90 hover:bg-white/10 transition-colors text-sm md:text-base">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Voices of AITR" title="Stories from our students." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-all">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-navy leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full gradient-navy text-gold grid place-items-center font-semibold">{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="News & Events" title="What's happening at AITR." />
            <Button asChild variant="outline" className="rounded-full"><Link to="/news">All news <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {NEWS.map((n) => (
              <article key={n.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest">
                  <span className="text-gold font-semibold">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy leading-snug">{n.title}</h3>
                <Link to="/news" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy story-link">Read more <ArrowRight className="h-3.5 w-3.5" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl gradient-navy text-navy-foreground p-10 md:p-16">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,oklch(0.78_0.14_85/0.5),transparent_50%)]" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">Your future starts here. Apply to AITR today.</h2>
              <p className="mt-4 text-white/75 max-w-xl">Admissions for the 2026 batch are now open across all programs. Talk to our counsellors and take the first step.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-semibold h-12 px-6"><Link to="/admissions">Start Application</Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-6"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
