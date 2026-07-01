import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — AITR" }, { name: "description", content: "Get in touch with AITR — admissions, general enquiries and campus visit." }]}),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PublicLayout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." crumbs={[{ label: "Contact" }]} />
      <section className="container-page py-20 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
        <div className="space-y-4">
          <SectionHeading eyebrow="Reach us" title="Multiple ways to get in touch." />
          {[
            { i: MapPin, t: "Campus", d: "Bypass Road, Mangliya Square, Indore, MP 453771" },
            { i: Phone, t: "Phone", d: "+91 731 244 8686" },
            { i: Mail, t: "Email", d: "admissions@aitr.edu.in" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <c.i className="h-6 w-6 text-gold shrink-0" />
              <div><div className="font-semibold text-navy">{c.t}</div><div className="text-sm text-muted-foreground mt-1">{c.d}</div></div>
            </div>
          ))}
          <div className="rounded-2xl border border-border overflow-hidden aspect-[4/3] bg-muted">
            <iframe title="Map" src="https://maps.google.com/maps?q=Indore&output=embed" className="h-full w-full border-0" loading="lazy" />
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Message sent!"); }}
          className="rounded-2xl bg-card border border-border p-8 shadow-soft space-y-4"
        >
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
              <h3 className="mt-4 font-display text-2xl text-navy">Message received.</h3>
              <p className="mt-2 text-muted-foreground">We usually respond within one business day.</p>
              <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="cn">Name</Label><Input id="cn" required className="mt-1.5" /></div>
                <div><Label htmlFor="ce">Email</Label><Input id="ce" type="email" required className="mt-1.5" /></div>
              </div>
              <div><Label htmlFor="cs">Subject</Label><Input id="cs" className="mt-1.5" /></div>
              <div><Label htmlFor="cm">Message</Label><Textarea id="cm" rows={6} required className="mt-1.5" /></div>
              <Button type="submit" size="lg" className="w-full bg-navy text-navy-foreground hover:bg-navy/90 rounded-full font-semibold">Send message</Button>
            </>
          )}
        </form>
      </section>
    </PublicLayout>
  );
}