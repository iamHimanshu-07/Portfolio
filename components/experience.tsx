"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    period: "Oct 2025 - Nov 2025",
    title: "Machine Learning Intern",
    company: "Skillbit Technologies",
    type: "work",
    description:
      "Executed end-to-end ML pipelines — data collection, preprocessing, feature engineering, model training, and evaluation on real-world industry datasets. Built a Movie Recommendation System and Spam SMS Classifier.",
    skills: ["Python", "Machine Learning", "NLP", "Scikit-Learn"],
  },
  {
    period: "2023 - Present",
    title: "B.Tech - AI & Machine Learning",
    company: "P P Savani University, Kosamba, Gujarat",
    type: "education",
    description:
      "Currently pursuing B.Tech in Artificial Intelligence & Machine Learning with CGPA 7.71/10.0. Coursework includes AI, ML, DSA, DBMS, Cloud Computing, and AIoT.",
    skills: ["Python", "AI/ML", "DSA", "Cloud Computing"],
  },
  {
    period: "2021 - 2023",
    title: "Higher Secondary (12th)",
    company: "Good Shepherd English High Secondary School",
    type: "education",
    description:
      "Completed Higher Secondary education with Science stream (PCM).",
    skills: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    period: "2020 - 2021",
    title: "Secondary School (10th)",
    company: "Good Shepherd English High Secondary School",
    type: "education",
    description:
      "Completed Secondary education with strong foundation in Mathematics and Science.\\nPercentile: 83%",
    skills: ["Mathematics", "Science", "English", "Computer"],
  },
]

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Lightbulb,
}

const typeColors = {
  work: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  education: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  achievement: "bg-amber-500/10 border-amber-500/30 text-amber-400",
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey in AI/ML and software development, from education to professional experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type as keyof typeof typeIcons]
              const colorClass = typeColors[exp.type as keyof typeof typeColors]

              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex items-start gap-6",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border-2", colorClass)}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content with Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className={cn(
                      "ml-16 md:ml-0 md:w-[calc(50%-2rem)]",
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    )}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <Badge variant="outline" className={cn("text-xs", colorClass)}>
                          {exp.type === "work" ? "Work" : exp.type === "education" ? "Education" : "Achievement"}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 mb-4">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-wrap">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
