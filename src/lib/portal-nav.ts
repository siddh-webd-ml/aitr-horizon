import { LayoutDashboard, CalendarCheck, GraduationCap, Wallet, CalendarDays, ClipboardList, BookOpen, Megaphone, User, Settings, Users, Building2, FileText, BarChart3, Bell } from "lucide-react";
import type { NavItem } from "@/components/dashboard/DashboardShell";

export const STUDENT_NAV: NavItem[] = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "Attendance", href: "/student/attendance", icon: CalendarCheck },
  { label: "Results", href: "/student/results", icon: GraduationCap },
  { label: "Fees", href: "/student/fees", icon: Wallet },
  { label: "Timetable", href: "/student/timetable", icon: CalendarDays },
  { label: "Assignments", href: "/student/assignments", icon: ClipboardList },
  { label: "Course Materials", href: "/student/materials", icon: BookOpen },
  { label: "Announcements", href: "/student/announcements", icon: Megaphone },
  { label: "Profile", href: "/student/profile", icon: User },
  { label: "Settings", href: "/student/settings", icon: Settings },
];

export const ADMIN_NAV: NavItem[] = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Students", href: "/admin/students", icon: Users },
  { label: "Faculty", href: "/admin/faculty", icon: GraduationCap },
  { label: "Departments", href: "/admin/departments", icon: Building2 },
  { label: "Admissions", href: "/admin/admissions", icon: FileText },
  { label: "Attendance", href: "/admin/attendance", icon: CalendarCheck },
  { label: "Fees", href: "/admin/fees", icon: Wallet },
  { label: "Results", href: "/admin/results", icon: BarChart3 },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Announcements", href: "/admin/announcements", icon: Bell },
  { label: "Reports", href: "/admin/reports", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];