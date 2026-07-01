export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Departments", href: "/departments" },
  { label: "Programs", href: "/programs" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Placements", href: "/placements" },
  { label: "Research", href: "/research" },
];

export const MEGA_MENU: Record<string, { title: string; links: { label: string; href: string }[] }[]> = {
  About: [
    { title: "Institute", links: [
      { label: "About AITR", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Faculty", href: "/faculty" },
    ]},
    { title: "Resources", links: [
      { label: "Library", href: "/library" },
      { label: "Gallery", href: "/gallery" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
    ]},
  ],
  Departments: [
    { title: "Engineering", links: [
      { label: "Computer Science", href: "/departments#cse" },
      { label: "Information Technology", href: "/departments#it" },
      { label: "Electronics & Communication", href: "/departments#ece" },
      { label: "Mechanical Engineering", href: "/departments#me" },
    ]},
    { title: "Other Schools", links: [
      { label: "Civil Engineering", href: "/departments#ce" },
      { label: "Management (MBA)", href: "/departments#mba" },
      { label: "Computer Applications (MCA)", href: "/departments#mca" },
      { label: "Applied Sciences", href: "/departments#as" },
    ]},
  ],
};

export const STATS = [
  { value: 5000, suffix: "+", label: "Students" },
  { value: 300, suffix: "+", label: "Faculty" },
  { value: 95, suffix: "%", label: "Placement Assistance" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export const WHY_CHOOSE = [
  { title: "Experienced Faculty", desc: "PhD-qualified mentors with deep industry and research experience.", icon: "GraduationCap" },
  { title: "Industry Partnerships", desc: "Collaborations with 200+ leading tech and engineering companies.", icon: "Handshake" },
  { title: "Modern Laboratories", desc: "State-of-the-art labs across every engineering discipline.", icon: "FlaskConical" },
  { title: "Research Culture", desc: "Active publications, patents and student-led research programs.", icon: "Microscope" },
  { title: "Innovation Hub", desc: "Incubation cell supporting student startups from idea to launch.", icon: "Lightbulb" },
  { title: "Excellent Placements", desc: "Consistent top-tier recruiters and record-breaking packages.", icon: "TrendingUp" },
];

export const PROGRAMS = [
  { title: "B.Tech Engineering", desc: "Undergraduate programs across 8 engineering disciplines with industry-aligned curriculum.", duration: "4 Years", tag: "Undergraduate" },
  { title: "MBA Management", desc: "Two-year full-time MBA with dual specialization and global exposure.", duration: "2 Years", tag: "Postgraduate" },
  { title: "MCA Applications", desc: "Advanced Master of Computer Applications with modern software engineering focus.", duration: "2 Years", tag: "Postgraduate" },
  { title: "M.Tech & PhD", desc: "Research-oriented Master's and Doctoral programs across engineering.", duration: "2–5 Years", tag: "Research" },
];

export const FACILITIES = [
  { name: "Central Library", desc: "100,000+ books, digital archives and quiet study zones." },
  { name: "Hostel", desc: "Secure, comfortable residences for boys and girls with mess and Wi-Fi." },
  { name: "Sports Complex", desc: "Cricket, football, basketball, indoor courts and a modern gym." },
  { name: "Innovation Labs", desc: "Robotics, AI, IoT and maker spaces open to every student." },
  { name: "Transportation", desc: "60+ bus routes covering the entire city and outskirts." },
  { name: "Cafeteria", desc: "Hygienic, multi-cuisine food courts across campus." },
  { name: "Medical Facility", desc: "On-campus health centre with tie-ups to nearby hospitals." },
  { name: "Auditoriums", desc: "Multiple auditoriums for events, seminars and cultural programs." },
];

export const RECRUITERS = [
  "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini",
  "Microsoft", "Amazon", "Deloitte", "L&T", "Bosch", "Byju's",
];

export const TESTIMONIALS = [
  { name: "Ananya Sharma", role: "CSE, Class of 2024", rating: 5, quote: "The faculty mentorship and hands-on labs shaped me for real-world engineering. Placed at Microsoft with confidence." },
  { name: "Rohit Verma", role: "MBA, Class of 2023", rating: 5, quote: "AITR's industry connect and rigorous curriculum opened doors I never imagined." },
  { name: "Priya Nair", role: "ECE, Class of 2025", rating: 5, quote: "Innovation labs and supportive professors make AITR truly special." },
];

export const NEWS = [
  { date: "Mar 12, 2026", tag: "Announcement", title: "AITR ranks in Top 50 emerging engineering colleges in India" },
  { date: "Feb 28, 2026", tag: "Event", title: "Annual TechFest 'Innovate 2026' concludes with record 3000 participants" },
  { date: "Feb 10, 2026", tag: "Placement", title: "Placement season crosses ₹42 LPA highest package milestone" },
  { date: "Jan 22, 2026", tag: "Research", title: "Faculty publishes breakthrough paper on renewable microgrids" },
];

export const EVENTS = [
  { date: "Apr 05", title: "AI & ML Workshop", desc: "Two-day hands-on workshop with industry mentors." },
  { date: "Apr 18", title: "Hackathon Ignite", desc: "24-hour national coding challenge with ₹5L prize pool." },
  { date: "May 03", title: "Alumni Homecoming", desc: "Reconnect with 25 years of AITR alumni across the world." },
  { date: "May 22", title: "Research Symposium", desc: "Present research posters across every department." },
];

export const DEPARTMENTS = [
  { id: "cse", code: "CSE", name: "Computer Science & Engineering", desc: "Software engineering, AI, cybersecurity, and systems.", hod: "Dr. Meera Iyer" },
  { id: "it", code: "IT", name: "Information Technology", desc: "Cloud, data engineering and full-stack development.", hod: "Dr. Arjun Deshmukh" },
  { id: "ece", code: "ECE", name: "Electronics & Communication", desc: "VLSI, embedded systems and wireless communications.", hod: "Dr. Kavita Rao" },
  { id: "me", code: "ME", name: "Mechanical Engineering", desc: "Design, manufacturing, thermal and robotics.", hod: "Dr. Sanjay Patel" },
  { id: "ce", code: "CE", name: "Civil Engineering", desc: "Structures, transportation and sustainable infrastructure.", hod: "Dr. Rekha Menon" },
  { id: "ee", code: "EE", name: "Electrical Engineering", desc: "Power systems, renewable energy and smart grids.", hod: "Dr. Prakash Joshi" },
  { id: "mba", code: "MBA", name: "Management Studies", desc: "Marketing, finance, HR and operations.", hod: "Dr. Vinod Malhotra" },
  { id: "mca", code: "MCA", name: "Computer Applications", desc: "Applied computing and enterprise software.", hod: "Dr. Neha Kulkarni" },
];

export const FACULTY_LIST = [
  { name: "Dr. Meera Iyer", role: "Professor & HOD, CSE", exp: "22 yrs" },
  { name: "Dr. Arjun Deshmukh", role: "Professor & HOD, IT", exp: "19 yrs" },
  { name: "Dr. Kavita Rao", role: "Professor & HOD, ECE", exp: "17 yrs" },
  { name: "Dr. Sanjay Patel", role: "Professor & HOD, ME", exp: "20 yrs" },
  { name: "Dr. Rekha Menon", role: "Professor & HOD, CE", exp: "15 yrs" },
  { name: "Dr. Prakash Joshi", role: "Professor & HOD, EE", exp: "23 yrs" },
  { name: "Prof. Rahul Bansal", role: "Associate Professor, CSE", exp: "12 yrs" },
  { name: "Prof. Ishita Chowdhury", role: "Assistant Professor, IT", exp: "8 yrs" },
];

/* ---------------- Student portal demo data ---------------- */

export const DEMO_STUDENT = {
  name: "Aarav Mehta",
  roll: "0827CS221054",
  program: "B.Tech Computer Science",
  semester: "6th Semester",
  section: "A",
  email: "aarav.mehta@aitr.edu",
  attendance: 87,
  cgpa: 8.62,
  pendingFees: 24500,
  assignmentsDue: 3,
};

export const ATTENDANCE_TREND = [
  { m: "Aug", pct: 82 }, { m: "Sep", pct: 85 }, { m: "Oct", pct: 88 },
  { m: "Nov", pct: 84 }, { m: "Dec", pct: 90 }, { m: "Jan", pct: 87 },
  { m: "Feb", pct: 89 }, { m: "Mar", pct: 87 },
];

export const MARKS_TREND = [
  { sem: "S1", cgpa: 8.1 }, { sem: "S2", cgpa: 8.3 },
  { sem: "S3", cgpa: 8.4 }, { sem: "S4", cgpa: 8.6 },
  { sem: "S5", cgpa: 8.5 }, { sem: "S6", cgpa: 8.62 },
];

export const TIMETABLE = [
  { day: "Monday", slots: ["Data Structures", "DBMS", "OS Lab", "Break", "Web Dev", "Sports"] },
  { day: "Tuesday", slots: ["OS", "Maths III", "DBMS Lab", "Break", "Web Dev", "Library"] },
  { day: "Wednesday", slots: ["DAA", "Web Dev", "DS Lab", "Break", "Comp. Networks", "Seminar"] },
  { day: "Thursday", slots: ["DBMS", "DAA", "Comp. Networks", "Break", "Free", "Club"] },
  { day: "Friday", slots: ["OS", "Maths III", "Web Dev Lab", "Break", "DAA", "Free"] },
];

export const ASSIGNMENTS = [
  { title: "DBMS: Normalization Case Study", course: "CS-501", due: "Mar 24", status: "Pending" },
  { title: "OS: Scheduler Simulation", course: "CS-502", due: "Mar 26", status: "In Progress" },
  { title: "Web Dev: Portfolio Site", course: "CS-505", due: "Apr 02", status: "Pending" },
  { title: "Maths III: Assignment 4", course: "MA-301", due: "Mar 18", status: "Submitted" },
];

export const ANNOUNCEMENTS = [
  { date: "Today", title: "Mid-sem timetable published on portal" },
  { date: "Yesterday", title: "TCS pre-placement talk on Friday at 3:00 PM" },
  { date: "2 days ago", title: "Library extended hours during exams" },
  { date: "1 week ago", title: "Fee reminder: Semester 6 due by Mar 31" },
];

export const RESULTS = [
  { sem: 5, courses: [
    { code: "CS-401", name: "Compiler Design", credit: 4, grade: "A" },
    { code: "CS-402", name: "AI Foundations", credit: 4, grade: "A+" },
    { code: "CS-403", name: "Software Engg.", credit: 3, grade: "A" },
    { code: "CS-404", name: "Cybersecurity", credit: 3, grade: "B+" },
  ]},
];

/* ---------------- Admin demo data ---------------- */

export const ADMIN_STATS = [
  { label: "Total Students", value: 5240, delta: "+3.2%" },
  { label: "Departments", value: 12, delta: "" },
  { label: "Faculty", value: 312, delta: "+1.4%" },
  { label: "Active Courses", value: 186, delta: "+5" },
];

export const ADMIN_STUDENTS = [
  { id: "0827CS221054", name: "Aarav Mehta", dept: "CSE", sem: 6, attendance: 87, cgpa: 8.62 },
  { id: "0827IT221022", name: "Isha Kapoor", dept: "IT", sem: 6, attendance: 92, cgpa: 9.10 },
  { id: "0827EC221088", name: "Rohan Gupta", dept: "ECE", sem: 4, attendance: 76, cgpa: 7.80 },
  { id: "0827ME221011", name: "Priya Nair", dept: "ME", sem: 8, attendance: 81, cgpa: 8.20 },
  { id: "0827CS221101", name: "Devansh Rao", dept: "CSE", sem: 4, attendance: 89, cgpa: 8.90 },
  { id: "0827CE221030", name: "Sara Khan", dept: "CE", sem: 6, attendance: 84, cgpa: 8.45 },
  { id: "0827MB221007", name: "Karan Shah", dept: "MBA", sem: 2, attendance: 78, cgpa: 7.95 },
  { id: "0827IT221056", name: "Anaya Singh", dept: "IT", sem: 8, attendance: 95, cgpa: 9.30 },
];

export const ADMIN_APPLICATIONS = [
  { id: "APP-3241", name: "Neha Verma", program: "B.Tech CSE", date: "Mar 18", status: "Under Review" },
  { id: "APP-3242", name: "Vikas Yadav", program: "B.Tech ECE", date: "Mar 18", status: "Shortlisted" },
  { id: "APP-3243", name: "Meera Joshi", program: "MBA", date: "Mar 17", status: "Interview" },
  { id: "APP-3244", name: "Aditya Sen", program: "MCA", date: "Mar 17", status: "Accepted" },
  { id: "APP-3245", name: "Riya Malhotra", program: "B.Tech IT", date: "Mar 16", status: "Under Review" },
];

export const ENROLLMENT_TREND = [
  { y: "2021", students: 4200 }, { y: "2022", students: 4560 },
  { y: "2023", students: 4780 }, { y: "2024", students: 5010 },
  { y: "2025", students: 5180 }, { y: "2026", students: 5240 },
];

export const DEPT_DISTRIBUTION = [
  { dept: "CSE", count: 1400 }, { dept: "IT", count: 780 },
  { dept: "ECE", count: 690 }, { dept: "ME", count: 620 },
  { dept: "CE", count: 480 }, { dept: "EE", count: 420 },
  { dept: "MBA", count: 460 }, { dept: "MCA", count: 390 },
];