import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { STUDENT_NAV } from "@/lib/portal-nav";
import { DEMO_STUDENT, MARKS_TREND, RESULTS } from "@/lib/site-data";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/student/results")({
  head: () => ({ meta: [{ title: "Results — AITR" }] }),
  component: () => (
    <DashboardShell title="Semester Results" subtitle="Grade cards and CGPA history" sidebarTitle="Student Portal" items={STUDENT_NAV} user={{ name: DEMO_STUDENT.name, role: "Student" }}>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl gradient-navy text-navy-foreground p-6"><div className="text-sm text-white/70">Cumulative CGPA</div><div className="font-display text-5xl mt-2 font-semibold">{DEMO_STUDENT.cgpa}</div><div className="text-white/70 text-sm mt-2">Rank 24 / 620 in CSE</div></div>
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">CGPA over semesters</div>
          <div className="h-52 mt-2"><ResponsiveContainer><LineChart data={MARKS_TREND}><XAxis dataKey="sem" fontSize={12} stroke="var(--muted-foreground)"/><YAxis domain={[7,9.5]} fontSize={12} stroke="var(--muted-foreground)"/><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }}/><Line type="monotone" dataKey="cgpa" stroke="var(--gold)" strokeWidth={3} dot={{ r: 5, fill: "var(--navy)" }}/></LineChart></ResponsiveContainer></div>
        </div>
      </div>
      {RESULTS.map((r) => (
        <div key={r.sem} className="mt-6 rounded-2xl bg-card border border-border overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border"><div className="font-semibold text-navy">Semester {r.sem} · Grade card</div><Button variant="outline" size="sm" className="rounded-full"><Download className="h-4 w-4" /> Download PDF</Button></div>
          <table className="w-full text-sm"><thead className="bg-secondary/60 text-left"><tr><th className="p-4">Code</th><th className="p-4">Subject</th><th className="p-4">Credits</th><th className="p-4">Grade</th></tr></thead>
            <tbody className="divide-y divide-border">
              {r.courses.map((c) => (<tr key={c.code} className="hover:bg-secondary/30"><td className="p-4 font-medium">{c.code}</td><td className="p-4">{c.name}</td><td className="p-4">{c.credit}</td><td className="p-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-navy/10 text-navy font-semibold text-xs">{c.grade}</span></td></tr>))}
            </tbody>
          </table>
        </div>
      ))}
    </DashboardShell>
  ),
});