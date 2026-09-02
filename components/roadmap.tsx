import { CheckCircle2, Circle } from "lucide-react"

const roadmapItems = [
  {
    goal: "Advanced LLM Fine-tuning",
    description: "Implementing LoRA and QLoRA for domain-specific medical NLP models.",
    status: "in-progress",
    category: "AI/ML",
  },
  {
    goal: "Vercel Edge Functions Optimization",
    description: "Reducing TTFB for global users by migrating key logic to the Edge.",
    status: "planned",
    category: "Cloud",
  },
  {
    goal: "Interactive AI Dashboard",
    description: "A real-time monitoring tool for ML model drift and performance.",
    status: "shipped",
    category: "Full-stack",
  },
  {
    goal: "Open Source ML Library",
    description: "Releasing a specialized toolkit for imbalanced dataset handling.",
    status: "shipped",
    category: "Open Source",
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Future
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Open Roadmap
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparently tracking my learning and building goals for 2026.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="mt-1">
                {item.status === "shipped" ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{item.goal}</h3>
                  <span className={`text-[10px] uppercase px-2 py-0.5 rounded border ${
                    item.status === "shipped"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
                      : item.status === "in-progress"
                        ? "bg-sky-500/10 border-sky-500/30 text-sky-600"
                        : "bg-muted border-border text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-2 text-[11px] text-primary font-medium">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
