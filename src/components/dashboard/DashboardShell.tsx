import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode, type ComponentType } from "react";
import { Bell, Search, Menu, X, LogOut, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logo from "@/assets/aitr-logo.png";

export interface NavItem { label: string; href: string; icon: ComponentType<{ className?: string }> }

export function DashboardShell({ title, subtitle, sidebarTitle, items, user, children }: {
  title: string; subtitle?: string; sidebarTitle: string; items: NavItem[];
  user: { name: string; role: string }; children: ReactNode;
}) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const logout = () => { toast.success("Signed out"); nav({ to: "/" }); };

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 z-40 h-screen w-72 shrink-0 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center justify-between p-5 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="h-10 w-10" alt="AITR" />
            <div>
              <div className="font-display font-semibold">AITR</div>
              <div className="text-[10px] uppercase tracking-widest text-sidebar-primary">{sidebarTitle}</div>
            </div>
          </Link>
          <button className="lg:hidden text-white/70" onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
          {items.map((it) => {
            const active = path === it.href || (it.href !== items[0].href && path.startsWith(it.href));
            const I = it.icon;
            return (
              <Link key={it.href} to={it.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-white/75 hover:bg-sidebar-accent hover:text-white"}`}>
                <I className="h-4 w-4" />{it.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/75 hover:bg-sidebar-accent hover:text-white"><LogOut className="h-4 w-4" /> Sign out</button>
        </div>
      </aside>

      {open && <div className="lg:hidden fixed inset-0 z-30 bg-black/40" onClick={() => setOpen(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-background/85 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-3 p-4 md:px-8">
            <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
            <div className="relative flex-1 max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search…" className="pl-9 rounded-full bg-secondary/60 border-transparent" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button aria-label="Toggle theme" onClick={toggleDark} className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
              <button aria-label="Notifications" className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted relative"><Bell className="h-4 w-4" /><span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-gold" /></button>
              <div className="flex items-center gap-3 pl-3 border-l border-border ml-1">
                <div className="h-9 w-9 rounded-full gradient-navy text-gold grid place-items-center font-semibold text-sm">{user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</div>
                <div className="hidden sm:block leading-tight">
                  <div className="text-sm font-semibold text-navy">{user.name}</div>
                  <div className="text-[11px] text-muted-foreground">{user.role}</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6 md:p-8">
          <div className="mb-6 md:mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-semibold text-navy">{title}</h1>
            {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, delta, icon: Icon }: { label: string; value: string | number; delta?: string; icon?: ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-all">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{label}</div>
        {Icon && <div className="h-9 w-9 rounded-lg gradient-navy text-gold grid place-items-center"><Icon className="h-4 w-4" /></div>}
      </div>
      <div className="mt-3 font-display text-3xl font-semibold text-navy">{value}</div>
      {delta && <div className="mt-1 text-xs text-emerald-600 font-semibold">{delta}</div>}
    </div>
  );
}