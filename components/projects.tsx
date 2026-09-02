import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Vaelos - Smart Transport Operations Platform",
    description:
      "A comprehensive fleet management system for transport businesses with live operations dashboard, vehicle dispatch, driver management, maintenance tracking, fuel/expense logging, and ROI analytics. Built with Express.js, SQLite, JWT auth, and vanilla HTML/CSS/JS — single binary, zero SaaS.",
    tags: ["Node.js", "Express", "SQLite", "JWT", "REST API", "HTML/CSS/JS"],
    github: "https://github.com/iamHimanshu-07/Vaelos",
    live: "https://vaelos.up.railway.app",
    image: "/images/transitops.png",
  },
  {
    title: "CorAi - Heart Disease Prediction",
    description:
      "An intelligent web-based healthcare app that predicts heart disease risk by analyzing 11 medical parameters through ML classification. Built with Flask & SQLite, featuring a responsive dashboard, trained Scikit-Learn model, and real-time prediction results.",
    tags: ["Python", "Flask", "Scikit-Learn", "SQLite", "Bootstrap", "HTML"],
    github: "https://github.com/iamHimanshu-07/CorAi",
    live: "https://corai.onrender.com",
    image: "/images/heart-disease.png",
  },
  {
    title: "Yugen - Crypto Dashboard",
    description:
      "A professional, no-account crypto dashboard surfacing price, supply, and institutional-grade signals for 21 curated coins. Built with Next.js 16 and React 19, featuring real-time data feeds and high-performance charts.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CoinGecko API"],
    github: "https://github.com/iamHimanshu-07/Yugen",
    live: "https://yugen-x.vercel.app",
    image: "/images/yugen.png",
  },
  {
    title: "MindPulse.AI - Mental Health Analyzer",
    description:
      "An end-to-end NLP project for multi-label mental-health emotion detection from free-form text. Uses TF-IDF + OneVsRest RandomForest on the DepressionEmo dataset, served through an interactive Streamlit dashboard with per-emotion probability charts.",
    tags: ["Python", "NLP", "Scikit-Learn", "Streamlit", "TF-IDF", "RandomForest"],
    github: "https://github.com/iamHimanshu-07/MindPulse.AI",
    live: "http://mindpulseai.streamlit.app",
    image: "/images/mental-health.png",
  },
  {
    title: "VoiceFlow - Speech Recognition App",
    description:
      "A modern, AI-powered speech recognition web app with real-time voice-to-text conversion, multi-language support, live audio visualization, transcript download, and light/dark themes. Built with Next.js 16 and React 19.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Speech API"],
    github: "https://github.com/iamHimanshu-07/VoiceFlow",
    live: "https://voiceflow-x.vercel.app",
    image: "/images/speech-recognition.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work showcasing my skills in building modern AI/ML applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.live !== "#" && (
                    <Button size="sm" asChild>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live <span className="hidden sm:inline ml-1">Demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
