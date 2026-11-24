import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BarChart3, BriefcaseBusiness, Check, ChevronRight,
  Code2, Database, Github, Linkedin, Mail, Menu, X, FileSpreadsheet,
  BrainCircuit, ChartNoAxesCombined, MapPin, Phone, Sparkles, ExternalLink
} from 'lucide-react'

const profile = {
  name: 'Gaurav Pawar',
  role: 'Aspiring Data Analyst',
  location: 'Pune, Maharashtra, India',
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/in/your-linkedin/',
  github: 'https://github.com/your-github-username',
  resume: '/resume.pdf',
}

const projects = [
  {
    number: '01', title: 'AI Data Quality Monitoring Agent',
    category: 'Python · Data Quality · AI',
    description: 'A project concept for monitoring dataset quality, identifying issues and presenting useful audit insights to support reliable analysis.',
    tags: ['Python', 'Pandas', 'Data Validation', 'AI'],
    icon: BrainCircuit, accent: 'cyan',
    github: 'https://github.com/your-github-username/ai-data-quality-agent',
    demo: '#contact',
  },
  {
    number: '02', title: 'Data Cleaner Agent',
    category: 'Python · Data Preparation',
    description: 'A Streamlit application to upload datasets, handle missing values, remove duplicate rows, visualize data and export cleaned results.',
    tags: ['Python', 'Pandas', 'NumPy', 'Streamlit'],
    icon: FileSpreadsheet, accent: 'violet',
    github: 'https://github.com/your-github-username/data-cleaner-agent',
    demo: '#contact',
  },
  {
    number: '03', title: 'Farm Management System',
    category: 'Database · Web Application',
    description: 'A management system concept for organizing farmer, crop, field, irrigation and farming-cost information in one place.',
    tags: ['React', 'Database', 'SQL', 'System Design'],
    icon: Database, accent: 'emerald',
    github: 'https://github.com/your-github-username/farm-management-system',
    demo: '#contact',
  },
  {
    number: '04', title: 'Employee Management System',
    category: 'Frontend · CRUD Application',
    description: 'A web application for managing employee records and practicing CRUD workflows, API integration and reusable React components.',
    tags: ['React', 'JavaScript', 'JSON Server', 'CSS'],
    icon: BriefcaseBusiness, accent: 'blue',
    github: 'https://github.com/your-github-username/employee-management-system',
    demo: '#contact',
  },
  {
    number: '05', title: 'Student Attendance Management',
    category: 'Frontend · Data Tracking',
    description: 'A date-wise attendance interface for recording student attendance and organizing class records.',
    tags: ['React', 'JavaScript', 'JSON Server'],
    icon: ChartNoAxesCombined, accent: 'orange',
    github: 'https://github.com/your-github-username/student-attendance',
    demo: '#contact',
  },
]

const skillGroups = [
  { title: 'Data Analytics', icon: ChartNoAxesCombined, skills: ['Microsoft Excel', 'Power BI', 'Tableau', 'Data Visualization', 'KPI Reporting'] },
  { title: 'Programming & Libraries', icon: Code2, skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'JavaScript', 'React'] },
  { title: 'Database & Tools', icon: Database, skills: ['SQL', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code'] },
]

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function SectionTitle({ eyebrow, title, description }) {
  return <div className="mb-12 max-w-2xl">
    <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-cyan-300">{eyebrow}</p>
    <h2 className="display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
  </div>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#080d18]/85 backdrop-blur-xl">
    <div className="container-width flex h-[76px] items-center justify-between">
      <a href="#home" className="display text-xl font-bold tracking-tight text-white">Gaurav<span className="text-cyan-300">.</span></a>
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-cyan-200">{item}</a>)}
        <a href="#contact" className="rounded-full border border-cyan-300/40 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">Let's talk <ArrowUpRight className="ml-1 inline" size={15} /></a>
      </nav>
      <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-white/10 bg-[#0b1220] px-5 py-4 md:hidden">
      {navItems.map(item => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="block py-3 text-sm text-slate-300">{item}</a>)}
    </nav>}
  </header>
}

function Hero() {
  return <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-28">
    <div className="grid-bg absolute inset-0" />
    <div className="pointer-events-none absolute -right-32 top-24 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="container-width relative grid items-center gap-14 pb-24 pt-12 lg:grid-cols-[1.2fr_.8fr]">
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES
        </div>
        <p className="mb-4 text-lg text-slate-400">Hello, I'm <span className="font-semibold text-white">Gaurav Pawar</span></p>
        <h1 className="display max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
          Turning raw data into <span className="text-gradient">meaningful insights.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          {profile.role} with a Computer Science background and a growing toolkit in SQL, Python, Excel and Power BI. I enjoy finding patterns and making data easier to understand.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Explore my work <ArrowUpRight className="ml-2 inline" size={16} /></a>
          <a href="#contact" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/50 hover:text-cyan-100">Contact me</a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-cyan-300" />{profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-200"><Github size={15} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-200"><Linkedin size={15} /> LinkedIn</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[370px]">
        <div className="absolute -inset-5 rounded-[2rem] border border-cyan-300/10 rotate-6" />
        <div className="glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#172941] to-[#0d1423] p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#111d30]">
            <img
              src="/profile_photo.jpg"
              alt="Profile of Gaurav Pawar"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* <div className="absolute inset-0 -z-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.17),transparent_50%)] text-center">
              <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 text-5xl font-bold text-cyan-200">GP</div>
              <p className="text-sm font-semibold text-slate-200">Add your profile photo</p>
              <p className="mt-1 text-xs text-slate-500">public/profile-photo.jpg</p>
            </div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200">Curious mind · Data driven</p>
              <p className="display mt-2 text-2xl font-bold text-white">Gaurav Pawar</p>
              <p className="mt-1 text-sm text-slate-300">Aspiring Data Analyst</p>
            </div>
          </div>
        </div>
        <div className="absolute -left-12 top-14 hidden rounded-2xl border border-white/10 bg-[#111b2c] p-4 shadow-2xl sm:block">
          <BarChart3 className="mb-2 text-cyan-300" size={22} /><p className="text-xs text-slate-500">Focus</p><p className="text-sm font-bold text-white">Data insights</p>
        </div>
        <div className="absolute -right-8 bottom-16 hidden rounded-2xl border border-white/10 bg-[#111b2c] p-4 shadow-2xl sm:block">
          <Database className="mb-2 text-violet-300" size={22} /><p className="text-xs text-slate-500">Core skill</p><p className="text-sm font-bold text-white">SQL + Python</p>
        </div>
      </div>
    </div>
    <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-500 transition hover:text-cyan-200"><ArrowDown size={18} /></a>
  </section>
}

function About() {
  const highlights = [
    ['01', 'Analytical thinking', 'Breaking complex questions into clear, answerable steps.'],
    ['02', 'Continuous learning', 'Building practical skills through projects and hands-on practice.'],
    ['03', 'Clear communication', 'Presenting findings in a simple, useful and structured way.'],
  ]
  return <section id="about" className="container-width py-24">
    <SectionTitle eyebrow="A little about me" title="Curiosity backed by a data mindset." description="I am a Computer Science graduate interested in using data to understand problems, discover trends and support better decisions." />
    <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
      <div className="card rounded-3xl p-7 sm:p-9">
        <p className="leading-8 text-slate-300">My learning journey combines a foundation in computer science with practical exploration of data analytics. I work with spreadsheets, SQL and Python to prepare and explore data, and I am developing my dashboarding and storytelling skills with Power BI and Tableau.</p>
        <p className="mt-5 leading-8 text-slate-400">I believe good analysis is not just about numbers — it is about asking the right questions, checking data quality and communicating insights that people can act on.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-4 py-2 text-xs text-cyan-100">Problem solving</span>
          <span className="rounded-full border border-violet-300/20 bg-violet-300/[.06] px-4 py-2 text-xs text-violet-100">Data storytelling</span>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[.06] px-4 py-2 text-xs text-emerald-100">Growth mindset</span>
        </div>
      </div>
      <div className="space-y-4">
        {highlights.map(([n, t, d]) => <div key={n} className="card transition-card flex gap-5 rounded-2xl p-5">
          <span className="display text-2xl font-bold text-cyan-300/70">{n}</span>
          <div><h3 className="font-bold text-white">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{d}</p></div>
        </div>)}
      </div>
    </div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <div className="card rounded-2xl p-6"><p className="text-xs uppercase tracking-widest text-slate-500">Education</p><h3 className="mt-3 text-lg font-bold text-white">B.Sc. Computer Science</h3><p className="mt-1 text-sm text-slate-400">2023 – 2026</p></div>
      <div className="card rounded-2xl p-6"><p className="text-xs uppercase tracking-widest text-slate-500">Based in</p><h3 className="mt-3 text-lg font-bold text-white">Pune, Maharashtra</h3><p className="mt-1 text-sm text-slate-400">India</p></div>
    </div>
  </section>
}

function Skills() {
  return <section id="skills" className="border-y border-white/5 bg-[#0a1120] py-24">
    <div className="container-width">
      <SectionTitle eyebrow="What I work with" title="Tools in my analytics toolkit." description="A growing set of technologies for data preparation, querying, visualization and building useful applications." />
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map(group => <div key={group.title} className="card transition-card rounded-3xl p-7">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><group.icon size={23} /></div>
          <h3 className="display text-xl font-bold text-white">{group.title}</h3>
          <div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-lg border border-white/10 bg-white/[.03] px-3 py-2 text-xs font-medium text-slate-300">{skill}</span>)}</div>
        </div>)}
      </div>
      <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/[.04] p-5 sm:flex sm:items-center sm:gap-4">
        <Sparkles className="mb-3 text-cyan-200 sm:mb-0" size={22} />
        <p className="text-sm leading-6 text-slate-300"><strong className="text-white">Currently developing:</strong> advanced SQL, data cleaning workflows, dashboard design and practical analytics projects.</p>
      </div>
    </div>
  </section>
}

function Projects() {
  return <section id="projects" className="container-width py-24">
    <SectionTitle eyebrow="Selected work" title="Projects built through practice." description="A selection of projects that demonstrate my interest in data quality, databases, automation and practical problem solving." />
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map(project => <article key={project.number} className="card transition-card group rounded-3xl p-7">
        <div className="flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${project.accent === 'violet' ? 'bg-violet-300/10 text-violet-200' : project.accent === 'emerald' ? 'bg-emerald-300/10 text-emerald-200' : project.accent === 'blue' ? 'bg-blue-300/10 text-blue-200' : project.accent === 'orange' ? 'bg-orange-300/10 text-orange-200' : 'bg-cyan-300/10 text-cyan-200'}`}><project.icon size={23} /></div>
          <span className="display text-sm font-semibold text-slate-600">{project.number}</span>
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-cyan-200">{project.category}</p>
        <h3 className="display mt-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-md bg-white/[.05] px-2.5 py-1.5 text-[11px] text-slate-400">{tag}</span>)}</div>
        <div className="mt-7 flex items-center gap-5 border-t border-white/5 pt-5">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-cyan-200"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
          <a href={project.demo} className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-200">Details <ChevronRight size={15} /></a>
        </div>
      </article>)}
    </div>
    <p className="mt-6 text-xs leading-6 text-slate-600">Note: Project descriptions and repository URLs are editable placeholders. Update them to reflect the exact features and live repositories before publishing.</p>
  </section>
}

function Contact() {
  return <section id="contact" className="border-t border-white/5 bg-[#0a1120] py-24">
    <div className="container-width">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#14253a] to-[#0e1728] p-8 sm:p-14">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]" />
        <div className="relative max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-cyan-200">Get in touch</p>
          <h2 className="display text-3xl font-bold text-white sm:text-5xl">Let's turn data into something meaningful.</h2>
          <p className="mt-5 leading-7 text-slate-400">I am open to entry-level data analyst opportunities, internships, collaborations and conversations about data.</p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"><Mail size={17} /> Email me <ArrowUpRight size={16} /></a>
          <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-400">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-200"><Linkedin size={17} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-200"><Github size={17} /> GitHub</a>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> Pune, India</span>
          </div>
        </div>
      </div>
    </div>
  </section>
}

function Footer() {
  return <footer className="border-t border-white/5 py-7">
    <div className="container-width flex flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
      <p>© {new Date().getFullYear()} Gaurav Pawar. All rights reserved.</p>
      <a href="#home" className="inline-flex items-center gap-2 transition hover:text-cyan-200">Back to top <ArrowUpRight size={13} /></a>
    </div>
  </footer>
}

export default function App() {
  return <><Header /><main><Hero /><About /><Skills /><Projects /><Contact /></main><Footer /></>
}