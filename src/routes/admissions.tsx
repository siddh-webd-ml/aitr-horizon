import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, GraduationCap, Wallet, Award } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [
    { title: "Admissions 2026 — AITR" },
    { name: "description", content: "Apply to AITR — B.Tech, M.Tech, MBA and MCA admissions for 2026 are now open." },
  ]}),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PublicLayout>
      <PageHero eyebrow="Admissions 2026" title="Begin your journey at AITR." description="Applications are open across undergraduate, postgraduate and research programs." crumbs={[{ label: "Admissions" }]} />

      <section id="eligibility" className="container-page py-20">
        <SectionHeading eyebrow="How to apply" title="A simple 4-step process." />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { n: 1, t: "Submit Enquiry", d: "Fill the form or call our admissions team." },
            { n: 2, t: "Verify Eligibility", d: "We review your academic scores and entrance rank." },
            { n: 3, t: "Counselling", d: "Personalised session with our counsellors." },
            { n: 4, t: "Confirm & Enrol", d: "Pay fees online and receive your admission letter." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 relative">
              <div className="text-5xl font-display font-semibold text-gold/30">0{s.n}</div>
              <h3 className="mt-2 font-semibold text-navy text-lg">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="bg-secondary/40 border-y border-border">
        <div className="container-page py-20 grid gap-10 lg:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Eligibility", items: ["B.Tech — 10+2 with PCM, 55%+", "MBA — Graduation with 50%+", "MCA — BCA / B.Sc. IT with 50%+", "Valid JEE / CMAT / CET score"] },
            { icon: Wallet, title: "Fee Structure", items: ["B.Tech — ₹1,20,000 / year", "MBA — ₹1,40,000 / year", "MCA — ₹90,000 / year", "Hostel & mess extra"] },
            { icon: Award, title: "Scholarships", items: ["Merit-based up to 100%", "Girl child scholarships", "Sports & cultural quota", "Financial aid available"] },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8">
              <c.icon className="h-9 w-9 text-gold" />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <SectionHeading eyebrow="Admission Enquiry" title="Tell us about you." description="Our counsellors will get in touch within 24 hours." />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              toast.success("Enquiry submitted! We'll be in touch shortly.");
            }}
            className="rounded-2xl bg-card border border-border p-8 shadow-soft space-y-4"
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
                <h3 className="mt-4 font-display text-2xl text-navy">Thanks — enquiry received!</h3>
                <p className="mt-2 text-muted-foreground">Our admissions counsellor will reach out within 24 hours.</p>
                <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSubmitted(false)}>Submit another</Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="fn">Full name</Label><Input id="fn" required placeholder="Your name" className="mt-1.5" /></div>
                  <div><Label htmlFor="ph">Phone</Label><Input id="ph" type="tel" required placeholder="+91 90000 00000" className="mt-1.5" /></div>
                </div>
                <div><Label htmlFor="em">Email</Label><Input id="em" type="email" required placeholder="you@example.com" className="mt-1.5" /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Program</Label>
                    <Select><SelectTrigger className="mt-1.5"><SelectValue placeholder="Select program" /></SelectTrigger>
                      <SelectContent><SelectItem value="btech">B.Tech</SelectItem><SelectItem value="mtech">M.Tech</SelectItem><SelectItem value="mba">MBA</SelectItem><SelectItem value="mca">MCA</SelectItem></SelectContent>
                    </Select>
                  </div>
                  <div><Label htmlFor="ci">City</Label><Input id="ci" placeholder="Your city" className="mt-1.5" /></div>
                </div>
                <div><Label htmlFor="msg">Message</Label><Textarea id="msg" placeholder="Any questions?" className="mt-1.5" rows={4} /></div>
                <Button type="submit" size="lg" className="w-full bg-navy text-navy-foreground hover:bg-navy/90 rounded-full font-semibold">Submit Enquiry</Button>
                <p className="text-xs text-muted-foreground text-center">By submitting you agree to our terms & privacy policy.</p>
              </>
            )}
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}