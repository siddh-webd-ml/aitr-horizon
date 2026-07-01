import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, MEGA_MENU } from "@/lib/site-data";
import logo from "@/assets/aitr-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 md:h-20 items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="AITR logo" width={40} height={40} className="h-10 w-10" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-navy text-[15px]">AITR</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Institute of Technology</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {NAV_LINKS.map((l) => {
            const mega = MEGA_MENU[l.label];
            return (
              <div key={l.href} className="relative" onMouseEnter={() => mega && setOpenMega(l.label)} onMouseLeave={() => setOpenMega(null)}>
                <Link
                  to={l.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy rounded-md transition-colors"
                  activeProps={{ className: "text-navy" }}
                >
                  {l.label}
                  {mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {mega && openMega === l.label && (
                  <div className="absolute left-0 top-full pt-2 w-[520px] animate-fade-in">
                    <div className="rounded-2xl border border-border bg-card shadow-elegant p-6 grid grid-cols-2 gap-6">
                      {mega.map((col) => (
                        <div key={col.title}>
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-3">{col.title}</div>
                          <ul className="space-y-2">
                            {col.links.map((li) => (
                              <li key={li.href}>
                                <Link to={li.href} className="text-sm text-foreground/80 hover:text-navy">{li.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy rounded-md">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <button aria-label="Search" className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/70 text-xs text-muted-foreground hover:border-navy/40 transition-colors">
            <Search className="h-3.5 w-3.5" />
            <span>Search AITR…</span>
          </button>
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex text-navy">
            <Link to="/login">Student Login</Link>
          </Button>
          <Button asChild size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90 hidden sm:inline-flex font-semibold">
            <Link to="/admissions">Apply Now</Link>
          </Button>
          <button className="lg:hidden p-2 rounded-md hover:bg-muted" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted">{l.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted">Contact</Link>
            <div className="h-px bg-border my-2" />
            <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted">Student Login</Link>
            <Link to="/admin/login" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted">Admin Login</Link>
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2 px-3 py-2.5 rounded-md text-sm font-semibold bg-gold text-gold-foreground text-center">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}