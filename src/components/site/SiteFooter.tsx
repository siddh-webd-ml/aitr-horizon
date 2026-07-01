import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/aitr-logo.png";

const cols = [
  { title: "Academics", links: [
    { label: "Programs", href: "/programs" },
    { label: "Departments", href: "/departments" },
    { label: "Faculty", href: "/faculty" },
    { label: "Library", href: "/library" },
  ]},
  { title: "Admissions", links: [
    { label: "Apply Now", href: "/admissions" },
    { label: "Eligibility", href: "/admissions#eligibility" },
    { label: "Fee Structure", href: "/admissions#fees" },
    { label: "Scholarships", href: "/admissions#scholarships" },
  ]},
  { title: "Campus", links: [
    { label: "Campus Life", href: "/campus-life" },
    { label: "Placements", href: "/placements" },
    { label: "Research", href: "/research" },
    { label: "Events", href: "/events" },
  ]},
  { title: "Connect", links: [
    { label: "Contact", href: "/contact" },
    { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Alumni", href: "/about#alumni" },
  ]},
];

export function SiteFooter() {
  return (
    <footer className="mt-24 gradient-navy text-navy-foreground">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AITR" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="font-display font-semibold text-lg">AITR</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Institute of Technology</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Acropolis Institute of Technology and Research — empowering future engineers through innovation, research, and excellence.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/75">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Bypass Road, Mangliya Square, Indore, MP 453771</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 731 244 8686</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> admissions@aitr.edu.in</div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}><Link to={l.href} className="text-sm text-white/75 hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Acropolis Institute of Technology and Research. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}