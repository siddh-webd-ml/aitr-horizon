import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { STUDENT_NAV } from "@/lib/portal-nav";
import { DEMO_STUDENT, TIMETABLE } from "@/lib/site-data";

const TIMES = ["09:00", "10:00", "11:00", "12:00", "01:00", "02:00"];

export const Route = createFileRoute("/student/timetable")({
  head: () => ({ meta: [{ title: "Timetable — AITR" }] }),
  component: () => (
    <DashboardShell title="Weekly Timetable" subtitle="Semester 6 · Section A" sidebarTitle="Student Portal" items={STUDENT_NAV} user={{ name: DEMO_STUDENT.name, role: "Student" }}>
      <div className="rounded-2xl bg-card border border-border overflow-x-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead><tr className="bg-secondary/60"><th className="p-3 text-left font-semibold">Time</th>{TIMETABLE.map((t) => <th key={t.day} className="p-3 text-left font-semibold">{t.day}</th>)}</tr></thead>
          <tbody className="divide-y divide-border">
            {TIMES.map((tm, i) => (
              <tr key={tm}>
                <td className="p-3 text-muted-foreground text-xs font-medium">{tm}</td>
                {TIMETABLE.map((d) => { const s = d.slots[i]; const isBreak = s === "Break"; return (
                  <td key={d.day} className="p-2 align-top"><div className={`rounded-xl p-3 text-xs ${isBreak ? "bg-secondary text-muted-foreground text-center" : "bg-navy/5 border border-navy/10"}`}>{isBreak ? "Break" : <><div className="font-semibold text-navy">{s}</div><div className="text-muted-foreground mt-0.5">Room {200 + i}</div></>}</div></td>
                );})}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  ),
});