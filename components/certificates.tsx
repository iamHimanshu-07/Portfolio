"use client"

import { Award, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export function Certificates() {
  return (
    <section id="certificates" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            12 certifications from leading platforms including Anthropic, AWS, Udemy, Coursera, Outskill, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
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
