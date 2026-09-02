"use client"

import { useState } from "react"
import { Award, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const certificates = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "2026",
    category: "Generative AI",
    skills: ["Advanced AI", "Strategic Thinking", "AI Leadership"],
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    category: "Generative AI",
    skills: ["Claude AI", "Code Generation", "LLMs"],
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    date: "2025",
    category: "Cloud Computing",
    skills: ["AWS", "Cloud Basics", "Cloud Services"],
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    category: "Cloud Computing",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3"],
  },
  {
    title: "AWS Academy Generative AI Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    category: "Generative AI",
    skills: ["Gen AI", "AWS AI/ML", "Large Language Models"],
  },
  {
    title: "Mastering Power BI Report Design",
    issuer: "Udemy",
    date: "2025",
    category: "Data Analytics",
    skills: ["Power BI", "Data Visualization", "Business Intelligence"],
  },
  {
    title: "Canva AI Specialization: Design Apps, Websites & Visuals",
    issuer: "Canva",
    date: "2025",
    category: "Design & AI",
    skills: ["Canva AI", "UI Design", "Visual Creation"],
  },
  {
    title: "Build AI SaaS using Cursor & Gemini",
    issuer: "Capabl India",
    date: "2025",
    category: "AI Development",
    skills: ["Cursor AI", "Google Gemini", "SaaS Development"],
  },
  {
    title: "Strategic Information Technology",
    issuer: "Saylor Academy",
    date: "2025",
    category: "Professional Development",
    skills: ["IT Strategy", "Information Systems", "Business Technology"],
  },
  {
    title: "Android App Development Specialization",
    issuer: "Coursera",
    date: "2025",
    category: "Mobile Development",
    skills: ["Android Development", "Java", "Mobile Apps"],
  },
  {
    title: "Gen AI Study Jams Completion",
    issuer: "GDGc PPSU",
    date: "2025",
    category: "Generative AI",
    skills: ["AI Fundamentals", "LLMs", "AI Applications"],
  },
]

const categoryColors: Record<string, string> = {
  "Cloud Computing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Generative AI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "AI Development": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Data Analytics": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Design & AI": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Mobile Development": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Professional Development": "bg-rose-500/10 text-rose-400 border-rose-500/20",
}

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(certificates.map(c => c.category)))]

  const filteredCertificates = activeCategory === "All"
    ? certificates
    : certificates.filter(c => c.category === activeCategory)

  return (
    <section id="certificates" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            12 certifications from leading platforms including Anthropic, AWS, Udemy, Coursera, Outskill, and more.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 transition-all duration-200",
                  activeCategory === cat && "shadow-lg shadow-primary/20"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${categoryColors[cert.category] || "bg-secondary text-secondary-foreground"}`}
                >
                  {cert.category}
                </Badge>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Building2 className="h-3.5 w-3.5" />
                <span className="line-clamp-1">{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-3.5 w-3.5" />
                <span>{cert.date}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-muted-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
                {cert.skills.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-muted-foreground"
                  >
                    +{cert.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
