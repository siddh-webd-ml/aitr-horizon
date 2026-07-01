import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { STUDENT_NAV } from "@/lib/portal-nav";
import { DEMO_STUDENT, ATTENDANCE_TREND, MARKS_TREND, ANNOUNCEMENTS, ASSIGNMENTS, TIMETABLE } from "@/lib/site-data";
import { CalendarCheck, GraduationCap, Wallet, ClipboardList, Download, CreditCard, IdCard, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/student/")({
  head: () => ({ meta: [{ title: "Student Dashboard — AITR" }, { name: "description", content: "Your AITR student dashboard." }]}),
  component: StudentHome,
});

function StudentHome() {
  const today = TIMETABLE[new Date().getDay() % 5];
  return (
    <DashboardShell title={`Hello, ${DEMO_STUDENT.name.split(" ")[0]} 👋`} subtitle={`${DEMO_STUDENT.program} · ${DEMO_STUDENT.semester}`} sidebarTitle="Student Portal" items={STUDENT_NAV} user={{ name: DEMO_STUDENT.name, role: "Student" }}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Attendance" value={`${DEMO_STUDENT.attendance}%`} delta="+2% this month" icon={CalendarCheck} />
        <StatCard label="Current CGPA" value={DEMO_STUDENT.cgpa} delta="+0.12" icon={GraduationCap} />
        <StatCard label="Pending Fees" value={`₹${DEMO_STUDENT.pendingFees.toLocaleString()}`} icon={Wallet} />
        <StatCard label="Assignments Due" value={DEMO_STUDENT.assignmentsDue} icon={ClipboardList} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div><div className="font-semibold text-navy">Attendance trend</div><div className="text-xs text-muted-foreground">Monthly percentage</div></div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={ATTENDANCE_TREND}>
                <defs><linearGradient id="att" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--gold)" stopOpacity={0.5} /><stop offset="100%" stopColor="var(--gold)" stopOpacity={0} /></linearGradient></defs>
                <XAxis dataKey="m" fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis domain={[70, 100]} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Area type="monotone" dataKey="pct" stroke="var(--gold)" strokeWidth={2.5} fill="url(#att)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">CGPA trend</div>
          <div className="text-xs text-muted-foreground">Semester wise</div>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <LineChart data={MARKS_TREND}>
                <XAxis dataKey="sem" fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis domain={[7.5, 9]} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Line type="monotone" dataKey="cgpa" stroke="var(--navy)" strokeWidth={2.5} dot={{ r: 4, fill: "var(--gold)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6">
          <div className="flex items-center justify-between"><div className="font-semibold text-navy flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" />Today's classes — {today.day}</div></div>
          <ul className="mt-4 divide-y divide-border">
            {today.slots.map((s, i) => (
              <li key={i} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3"><div className="text-xs text-muted-foreground w-16">{`${9 + i}:00`}</div><div className="text-sm font-medium">{s}</div></div>
                <span className="text-xs text-muted-foreground">Room {200 + i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Announcements</div>
          <ul className="mt-4 space-y-3">
            {ANNOUNCEMENTS.map((a) => (
              <li key={a.title} className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground uppercase tracking-wider">{a.date}</div><div className="text-sm text-navy mt-0.5">{a.title}</div></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy mb-4">Assignments due soon</div>
          <div className="divide-y divide-border">
            {ASSIGNMENTS.map((a) => (
              <div key={a.title} className="py-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-navy">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.course} · Due {a.due}</div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full ${a.status === "Submitted" ? "bg-emerald-100 text-emerald-700" : a.status === "In Progress" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Quick actions</div>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start rounded-xl"><IdCard className="h-4 w-4" /> Download ID Card</Button>
            <Button variant="outline" className="w-full justify-start rounded-xl"><CalendarDays className="h-4 w-4" /> View Timetable</Button>
            <Button variant="outline" className="w-full justify-start rounded-xl"><CreditCard className="h-4 w-4" /> Pay Fees</Button>
            <Button variant="outline" className="w-full justify-start rounded-xl"><Download className="h-4 w-4" /> Download Results</Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}