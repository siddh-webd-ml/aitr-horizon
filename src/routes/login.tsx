import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/aitr-logo.png";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Student Login — AITR" }, { name: "description", content: "Access your AITR student portal — attendance, results, fees and more." }]}),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [id, setId] = useState("student");
  const [pw, setPw] = useState("aitr123");
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block gradient-navy text-navy-foreground overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative z-10 p-12 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-3"><img src={logo} className="h-11 w-11" alt="AITR" /><div><div className="font-display font-semibold">AITR</div><div className="text-xs text-white/70 uppercase tracking-widest">Student Portal</div></div></Link>
          <div className="mt-auto max-w-md">
            <h2 className="font-display text-4xl font-semibold leading-tight">Welcome back to the AITR student portal.</h2>
            <p className="mt-4 text-white/75">Track attendance, results, fees, timetable, assignments and more — all in one place.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden inline-flex items-center gap-2 mb-8"><img src={logo} className="h-9 w-9" alt="" /><span className="font-display font-semibold text-navy">AITR</span></Link>
          <h1 className="font-display text-3xl font-semibold text-navy">Student Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in with your enrolment ID and password.</p>
          <form onSubmit={(e) => { e.preventDefault(); if (!id || !pw) return; toast.success(`Welcome, ${id}!`); nav({ to: "/student" }); }} className="mt-8 space-y-4">
            <div><Label htmlFor="id">Enrolment ID</Label><Input id="id" value={id} onChange={(e) => setId(e.target.value)} className="mt-1.5" placeholder="e.g. 0827CS221054" required /></div>
            <div><Label htmlFor="pw">Password</Label><Input id="pw" value={pw} onChange={(e) => setPw(e.target.value)} type="password" className="mt-1.5" required /></div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Remember me</label>
              <a className="text-navy hover:underline">Forgot password?</a>
            </div>
            <Button type="submit" size="lg" className="w-full bg-navy text-navy-foreground hover:bg-navy/90 rounded-full font-semibold">Sign in</Button>
          </form>
          <div className="mt-6 rounded-xl bg-secondary/50 border border-border p-4 text-xs text-muted-foreground">
            <b className="text-navy">Demo credentials:</b> use any values, or leave as <code>student / aitr123</code>.
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">Are you an administrator? <Link to="/admin/login" className="text-navy font-semibold hover:underline">Admin login</Link></div>
        </div>
      </div>
    </div>
  );
}