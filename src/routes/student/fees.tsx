import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { STUDENT_NAV } from "@/lib/portal-nav";
import { DEMO_STUDENT } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const HISTORY = [
  { sem: "Semester 5", amount: 78000, date: "Sep 12, 2025", status: "Paid", txn: "TXN9821" },
  { sem: "Semester 4", amount: 78000, date: "Feb 08, 2025", status: "Paid", txn: "TXN8712" },
  { sem: "Semester 3", amount: 76000, date: "Sep 09, 2024", status: "Paid", txn: "TXN7654" },
  { sem: "Semester 2", amount: 76000, date: "Feb 12, 2024", status: "Paid", txn: "TXN6533" },
];

export const Route = createFileRoute("/student/fees")({
  head: () => ({ meta: [{ title: "Fees — AITR" }] }),
  component: () => (
    <DashboardShell title="Fee Details" subtitle="Payment history and dues" sidebarTitle="Student Portal" items={STUDENT_NAV} user={{ name: DEMO_STUDENT.name, role: "Student" }}>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl gradient-navy text-navy-foreground p-8">
          <div className="text-sm text-white/70">Semester 6 · Outstanding</div>
          <div className="mt-2 font-display text-5xl font-semibold">₹{DEMO_STUDENT.pendingFees.toLocaleString()}</div>
          <div className="mt-2 text-white/70">Due by March 31, 2026</div>
          <div className="mt-6 flex flex-wrap gap-3"><Button onClick={() => toast.success("Redirecting to secure gateway…")} className="bg-gold text-navy hover:bg-gold/90 rounded-full font-semibold"><CreditCard className="h-4 w-4" /> Pay now</Button><Button variant="outline" className="rounded-full border-white/25 text-white hover:bg-white/10"><Download className="h-4 w-4" /> Fee receipt</Button></div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <div className="font-semibold text-navy">Semester breakdown</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[["Tuition", 60000],["Development", 8000],["Library", 3000],["Exam", 4000],["Misc.", 3500]].map(([k,v]) => (<li key={String(k)} className="flex items-center justify-between border-b border-border/60 pb-2"><span className="text-muted-foreground">{k}</span><span className="font-medium">₹{Number(v).toLocaleString()}</span></li>))}
            <li className="flex items-center justify-between pt-2 font-semibold text-navy"><span>Total</span><span>₹78,500</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border font-semibold text-navy">Payment history</div>
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left"><tr><th className="p-4">Semester</th><th className="p-4">Amount</th><th className="p-4">Date</th><th className="p-4">Transaction ID</th><th className="p-4">Status</th><th className="p-4">Receipt</th></tr></thead>
          <tbody className="divide-y divide-border">
            {HISTORY.map((h) => (<tr key={h.txn}><td className="p-4 font-medium">{h.sem}</td><td className="p-4">₹{h.amount.toLocaleString()}</td><td className="p-4">{h.date}</td><td className="p-4 text-muted-foreground">{h.txn}</td><td className="p-4"><span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold"><CheckCircle2 className="h-3.5 w-3.5"/> {h.status}</span></td><td className="p-4"><button className="text-navy hover:underline text-xs font-semibold">Download</button></td></tr>))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  ),
});