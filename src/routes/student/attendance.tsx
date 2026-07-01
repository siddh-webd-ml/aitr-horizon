import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { STUDENT_NAV } from "@/lib/portal-nav";
import { DEMO_STUDENT, ATTENDANCE_TREND } from "@/lib/site-data";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SUBJECTS = [
  { code: "CS-501", name: "Database Management", attended: 42, total: 48 },
  { code: "CS-502", name: "Operating Systems", attended: 40, total: 46 },
  { code: "CS-503", name: "Design & Analysis of Algorithms", attended: 38, total: 44 },
  { code: "CS-504", name: "Computer Networks", attended: 44, total: 48 },
  { code: "CS-505", name: "Web Development", attended: 39, total: 42 },
  { code: "MA-301", name: "Mathematics III", attended: 36, total: 44 },
];

export const Route = createFileRoute("/student/attendance")({
  head: () => ({ meta: [{ title: "Attendance — AITR Student Portal" }] }),
  component: () => (
    <DashboardShell title="Attendance" subtitle="Subject-wise attendance for the current semester" sidebarTitle="Student Portal" items={STUDENT_NAV} user={{ name: DEMO_STUDENT.name, role: "Student" }}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Monthly trend</div>
          <div className="h-64 mt-4">
            <ResponsiveContainer>
              <BarChart data={ATTENDANCE_TREND}>
                <XAxis dataKey="m" fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis domain={[60, 100]} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Bar dataKey="pct" fill="var(--navy)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl gradient-navy text-navy-foreground p-6">
          <div className="text-sm text-white/70">Overall</div>
          <div className="mt-2 font-display text-5xl font-semibold">{DEMO_STUDENT.attendance}%</div>
          <div className="mt-2 text-white/70 text-sm">Minimum required · 75%</div>
          <div className="mt-6 h-2 bg-white/15 rounded-full overflow-hidden"><div className="h-full bg-gold rounded-full" style={{ width: `${DEMO_STUDENT.attendance}%` }} /></div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-card border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left"><tr><th className="p-4 font-semibold">Code</th><th className="p-4 font-semibold">Subject</th><th className="p-4 font-semibold">Attended</th><th className="p-4 font-semibold">Total</th><th className="p-4 font-semibold">Percentage</th></tr></thead>
          <tbody className="divide-y divide-border">
            {SUBJECTS.map((s) => { const pct = Math.round((s.attended/s.total)*100); return (
              <tr key={s.code} className="hover:bg-secondary/30">
                <td className="p-4 font-medium">{s.code}</td><td className="p-4">{s.name}</td>
                <td className="p-4">{s.attended}</td><td className="p-4">{s.total}</td>
                <td className="p-4"><div className="flex items-center gap-3"><div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden"><div className={`h-full rounded-full ${pct>=85?"bg-emerald-500":pct>=75?"bg-gold":"bg-rose-500"}`} style={{ width: `${pct}%` }} /></div><span className="font-semibold text-navy">{pct}%</span></div></td>
              </tr>
            );})}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  ),
});