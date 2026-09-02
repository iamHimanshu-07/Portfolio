"use client"

import { useState } from "react"
import {
  Brain,
  Server,
  Code2,
  Cloud,
  Sparkles,
  ChevronDown,
  Terminal,
  Database,
  Cpu,
  BarChart3,
  GitBranch,
  Globe,
  Layers,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Tier = "lead" | "strong" | "specialized"

type Skill = {
  name: string
  icon: LucideIcon
  verified: string
}

type SkillGroup = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning / NLP",
    description:
      "Classical ML, text mining, and recommendation engines — verified across 6 production projects.",
    icon: Brain,
    skills: [
      { name: "Python", icon: Terminal, verified: "MindPulse · Cardio.AI · Spam · Movie-Rec" },
      { name: "Scikit-Learn", icon: Code2, verified: "All 6 ML projects" },
      { name: "Pandas", icon: Database, verified: "All ML projects" },
      { name: "NumPy", icon: Database, verified: "MindPulse · Movie-Rec" },
      { name: "NLTK", icon: Sparkles, verified: "MindPulse.AI" },
      { name: "TF-IDF (1-2 grams)", icon: Sparkles, verified: "MindPulse · Spam-SMS" },
      { name: "Multinomial Naive Bayes", icon: Cpu, verified: "Spam-SMS-Classifier" },
      { name: "Random Forest", icon: Cpu, verified: "MindPulse (OneVsRest)" },
      { name: "Logistic Regression", icon: Cpu, verified: "MindPulse · Cardio" },
      { name: "Multi-label Classification", icon: Layers, verified: "MindPulse (8 emotions)" },
      { name: "Collaborative Filtering", icon: BarChart3, verified: "Movie-Recommendation" },
      { name: "Cosine Similarity", icon: BarChart3, verified: "Movie-Recommendation" },
      { name: "Predictive Maintenance", icon: Zap, verified: "Vaelos risk scoring" },
      { name: "Matplotlib & Seaborn", icon: BarChart3, verified: "ML-Training-Data" },
      { name: "Imbalanced-learn", icon: Layers, verified: "MindPulse.AI" },
      { name: "Streamlit", icon: Globe, verified: "MindPulse.AI dashboard" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Python and Node.js services with REST, WebSocket, and JWT auth.",
    icon: Server,
    skills: [
      { name: "Flask + Gunicorn", icon: Server, verified: "Cardio.AI · Movie-Rec" },
      { name: "Node.js + Express", icon: Server, verified: "Vaelos" },
      { name: "REST APIs (30+ endpoints)", icon: Code2, verified: "Vaelos" },
      { name: "WebSockets (live telemetry)", icon: Zap, verified: "Vaelos real-time KPIs" },
      { name: "JWT (httpOnly cookies)", icon: Code2, verified: "Vaelos auth" },
      { name: "SQL + SQLite (better-sqlite3)", icon: Database, verified: "Vaelos · Cardio.AI" },
      { name: "Joblib model serialization", icon: Database, verified: "Spam · Movie-Rec · Cardio" },
      { name: "Google GenAI SDK", icon: Sparkles, verified: "Cardio.AI NL→Data Q&A" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern React/Next.js with Edge rendering and responsive UI.",
    icon: Code2,
    skills: [
      { name: "Next.js 16 (App Router)", icon: Globe, verified: "Yugen · Portfolio · VoiceFlow" },
      { name: "React 19 + Server Components", icon: Code2, verified: "All web projects" },
      { name: "TypeScript (strict)", icon: Terminal, verified: "Yugen · Portfolio · VoiceFlow" },
      { name: "Tailwind CSS v4", icon: Code2, verified: "Yugen · Portfolio · VoiceFlow" },
      { name: "shadcn/ui + Radix", icon: Layers, verified: "Portfolio · VoiceFlow" },
      { name: "Apache ECharts", icon: BarChart3, verified: "Yugen price charts" },
      { name: "Recharts", icon: BarChart3, verified: "Portfolio analytics" },
      { name: "Leaflet.js + OSM", icon: Globe, verified: "Vaelos live map" },
      { name: "Bootstrap 5", icon: Code2, verified: "Cardio.AI doctor dashboard" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud, Tools & Data Sources",
    description: "Deployment, version control, and live data integrations.",
    icon: Cloud,
    skills: [
      { name: "Vercel (preview + prod)", icon: Cloud, verified: "yugen-xi · portfolio · speech-recognition" },
      { name: "Render", icon: Cloud, verified: "Cardio.AI backend" },
      { name: "Git & GitHub", icon: GitBranch, verified: "13 repos" },
      { name: "VS Code + Jupyter", icon: Terminal, verified: "All dev work" },
      { name: "pnpm", icon: Wrench, verified: "Portfolio · VoiceFlow" },
      { name: "CoinGecko API", icon: Cloud, verified: "Yugen live prices" },
      { name: "Reddit JSON", icon: Cloud, verified: "Yugen social feed" },
      { name: "Web Speech API", icon: Sparkles, verified: "VoiceFlow STT" },
      { name: "Service Workers / PWA", icon: Layers, verified: "Vaelos offline shell" },
    ],
  },
]

const tierMeta: Record<Tier, { label: string; shortLabel: string; color: string; chip: string }> = {
  lead: {
    label: "Lead skills — resume top tier",
    shortLabel: "Lead",
    color: "text-emerald-600 dark:text-emerald-400",
    chip: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
  },
  strong: {
    label: "Strong — supporting evidence",
    shortLabel: "Strong",
    color: "text-sky-600 dark:text-sky-400",
    chip: "bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300",
  },
  specialized: {
    label: "Specialized — domain-specific",
    shortLabel: "Specialized",
    color: "text-violet-600 dark:text-violet-400",
    chip: "bg-violet-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300",
  },
}

function classForSkill(name: string): Tier {
  const lead = new Set([
    "Python",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Flask + Gunicorn",
    "SQL + SQLite (better-sqlite3)",
    "Next.js 16 (App Router)",
    "React 19 + Server Components",
    "TypeScript (strict)",
    "Tailwind CSS v4",
    "Git & GitHub",
    "REST APIs (30+ endpoints)",
    "Vercel (preview + prod)",
    "Matplotlib & Seaborn",
  ])
  const specialized = new Set([
    "Predictive Maintenance",
    "Google GenAI SDK",
    "Apache ECharts",
    "Recharts",
    "Leaflet.js + OSM",
    "Bootstrap 5",
    "Service Workers / PWA",
    "Reddit JSON",
    "pnpm",
    "Web Speech API",
    "Streamlit",
  ])
  if (lead.has(name)) return "lead"
  if (specialized.has(name)) return "specialized"
  return "strong"
}

export function Skills() {
  const [openId, setOpenId] = useState<string | null>("ai-ml")

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Verified across 13 public repos. Click a category to expand — every skill links to a
            project where it's used.
          </p>
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {(Object.keys(tierMeta) as Tier[]).map((tier) => (
            <div
              key={tier}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium",
                tierMeta[tier].chip,
              )}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              {tierMeta[tier].shortLabel}
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            const isOpen = openId === group.id
            return (
              <div
                key={group.id}
                className={cn(
                  "bg-card border border-border rounded-xl overflow-hidden transition-colors",
                  isOpen ? "border-primary/50" : "hover:border-primary/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : group.id)}
                  className="w-full flex items-center justify-between gap-3 p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`skills-${group.id}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <GroupIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {group.skills.length} skills · {isOpen ? "click to collapse" : "click to expand"}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
                {isOpen && (
                  <div id={`skills-${group.id}`} className="px-6 pb-6 space-y-4">
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {group.skills.map((skill) => {
                        const tier = classForSkill(skill.name)
                        const SkillIcon = skill.icon
                        return (
                          <div
                            key={skill.name}
                            className="group/skill flex items-start gap-2.5 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            <SkillIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-sm font-medium text-foreground">
                                  {skill.name}
                                </span>
                                <span
                                  className={cn(
                                    "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border",
                                    tierMeta[tier].chip,
                                  )}
                                  title={tierMeta[tier].label}
                                >
                                  {tierMeta[tier].shortLabel}
                                </span>
                              </div>
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">
                                {skill.verified}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
