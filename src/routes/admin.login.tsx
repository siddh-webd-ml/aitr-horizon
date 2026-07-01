import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import logo from "@/assets/aitr-logo.png";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [{ title: "Admin Login — AITR" }, { name: "description", content: "AITR administrator portal login." }]}),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const nav = useNavigate();
  const [id, setId] = useState("admin");
  const [pw, setPw] = useState("admin123");
  return (
    <div className="min-h-screen grid place-items-center gradient-navy text-navy-foreground p-6">
      <div className="w-full max-w-md rounded-3xl bg-card text-foreground p-8 shadow-elegant">
        <Link to="/" className="flex items-center gap-3"><img src={logo} className="h-11 w-11" alt="" /><div><div className="font-display font-semibold text-navy">AITR</div><div className="text-xs text-muted-foreground uppercase tracking-widest">Admin Console</div></div></Link>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest"><ShieldCheck className="h-4 w-4" /> Restricted access</div>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy">Administrator Sign In</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Sign in with your admin credentials.</p>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Signed in as administrator"); nav({ to: "/admin" }); }} className="mt-6 space-y-4">
          <div><Label htmlFor="aid">Admin ID</Label><Input id="aid" value={id} onChange={(e) => setId(e.target.value)} className="mt-1.5" required /></div>
          <div><Label htmlFor="apw">Password</Label><Input id="apw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="mt-1.5" required /></div>
          <Button type="submit" size="lg" className="w-full bg-navy text-navy-foreground hover:bg-navy/90 rounded-full font-semibold">Sign in</Button>
        </form>
        <div className="mt-6 rounded-xl bg-secondary/50 border border-border p-3 text-xs text-muted-foreground"><b className="text-navy">Demo:</b> admin / admin123</div>
        <div className="mt-6 text-center text-sm text-muted-foreground"><Link to="/login" className="text-navy hover:underline">Student login</Link> · <Link to="/" className="text-navy hover:underline">Back to site</Link></div>
      </div>
    </div>
  );
}