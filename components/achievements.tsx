import { Trophy, Zap, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    icon: Zap,
    title: "SSIP - 2025",
    subtitle: "Student Startup & Innovation Policy",
    description:
      "Selected under SSIP at P P Savani University for developing an AI-powered Crop Yield Prediction System. Built an ML model using soil, weather, and fertilizer data to support data-driven agricultural decisions for farmers.",
    highlights: ["AI/ML Development", "Agricultural Innovation", "Data Science"],
  },
  {
    icon: Target,
    title: "Tech Globe Fest - 2025",
    subtitle: "Community Engagement",
    description:
      "Attended and engaged with the tech community on emerging AI/ML and Generative AI trends. Networked with industry professionals and stayed updated with latest technology developments.",
    highlights: ["AI/ML Trends", "Networking", "Industry Updates"],
  },
  {
    icon: Trophy,
    title: "Internal Hackathon Participant - 2025",
    subtitle: "Innovation & Problem Solving",
    description:
      "Participated in the GDGc PPSU Internal Hackathon, demonstrating strong problem-solving skills and collaboration abilities. Worked with cross-functional teams to develop innovative solutions and contributed to a dynamic innovation environment.",
    highlights: ["Problem Solving", "Team Collaboration", "Innovation"],
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Key Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Notable accomplishments and recognition in my professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{achievement.subtitle}</p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {achievement.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
