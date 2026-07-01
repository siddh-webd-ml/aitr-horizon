import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { ADMIN_NAV } from "@/lib/portal-nav";
import { ADMIN_STATS, ENROLLMENT_TREND, DEPT_DISTRIBUTION, ADMIN_STUDENTS, ADMIN_APPLICATIONS } from "@/lib/site-data";
import { Users, Building2, GraduationCap, BookOpen, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ICONS = [Users, Building2, GraduationCap, BookOpen];

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard — AITR" }] }),
  component: AdminHome,
});

function AdminHome() {
  return (
    <DashboardShell title="Institute Overview" subtitle="Real-time snapshot of enrolment, faculty and academics" sidebarTitle="Admin Console" items={ADMIN_NAV} user={{ name: "Dr. R. Kulkarni", role: "Administrator" }}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ADMIN_STATS.map((s, i) => (<StatCard key={s.label} label={s.label} value={s.value.toLocaleString()} delta={s.delta || undefined} icon={ICONS[i]} />))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Enrolment growth</div>
          <div className="text-xs text-muted-foreground">Year-over-year students</div>
          <div className="h-64 mt-3"><ResponsiveContainer><AreaChart data={ENROLLMENT_TREND}><defs><linearGradient id="en" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--navy)" stopOpacity={0.35}/><stop offset="100%" stopColor="var(--navy)" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="y" fontSize={12} stroke="var(--muted-foreground)"/><YAxis fontSize={12} stroke="var(--muted-foreground)"/><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }}/><Area type="monotone" dataKey="students" stroke="var(--navy)" strokeWidth={2.5} fill="url(#en)"/></AreaChart></ResponsiveContainer></div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Department distribution</div>
          <div className="text-xs text-muted-foreground">Active students per department</div>
          <div className="h-64 mt-3"><ResponsiveContainer><BarChart data={DEPT_DISTRIBUTION}><XAxis dataKey="dept" fontSize={12} stroke="var(--muted-foreground)"/><YAxis fontSize={12} stroke="var(--muted-foreground)"/><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }}/><Bar dataKey="count" fill="var(--gold)" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex flex-wrap items-center gap-3 justify-between"><div className="font-semibold text-navy">Students</div><div className="flex items-center gap-2"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/><Input placeholder="Search…" className="pl-9 h-9 rounded-full bg-secondary/60 border-transparent w-56"/></div><Button variant="outline" size="sm" className="rounded-full"><Filter className="h-4 w-4"/> Filter</Button></div></div>
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left"><tr><th className="p-4">ID</th><th className="p-4">Name</th><th className="p-4">Dept</th><th className="p-4">Sem</th><th className="p-4">Att.</th><th className="p-4">CGPA</th></tr></thead>
            <tbody className="divide-y divide-border">
              {ADMIN_STUDENTS.map((s) => (<tr key={s.id} className="hover:bg-secondary/30"><td className="p-4 font-medium text-navy">{s.id}</td><td className="p-4">{s.name}</td><td className="p-4"><span className="text-xs px-2 py-0.5 rounded-full bg-navy/10 text-navy font-semibold">{s.dept}</span></td><td className="p-4">{s.sem}</td><td className="p-4">{s.attendance}%</td><td className="p-4 font-semibold">{s.cgpa}</td></tr>))}
            </tbody>
          </table>
        </div>
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="p-5 border-b border-border font-semibold text-navy">Recent applications</div>
          <ul className="divide-y divide-border">
            {ADMIN_APPLICATIONS.map((a) => (<li key={a.id} className="p-4 flex items-center justify-between gap-3"><div><div className="text-sm font-medium text-navy">{a.name}</div><div className="text-xs text-muted-foreground">{a.program} · {a.date}</div></div><span className={`text-xs px-2.5 py-1 rounded-full ${a.status==="Accepted"?"bg-emerald-100 text-emerald-700":a.status==="Shortlisted"?"bg-navy/10 text-navy":a.status==="Interview"?"bg-amber-100 text-amber-700":"bg-secondary text-muted-foreground"}`}>{a.status}</span></li>))}
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}