import Link from "next/link"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const openSourceProjects = [
  {
    name: "ml-utils-core",
    description: "A lightweight Python library for rapid data preprocessing and model evaluation, focusing on imbalanced datasets.",
    tags: ["Python", "Scikit-Learn", "Open Source"],
    github: "https://github.com/iamHimanshu-07/ml-utils-core",
    link: "#",
  },
  {
    name: "fast-api-boilerplate",
    description: "Production-ready FastAPI template with JWT auth, PostgreSQL integration, and automated Dockerization.",
    tags: ["FastAPI", "Docker", "PostgreSQL"],
    github: "https://github.com/iamHimanshu-07/fast-api-boilerplate",
    link: "#",
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Built in the Open
          </h2>
          <p className="text-muted-foreground text-lg">
            I believe in open-source. Here are some of the libraries and tools I've shared with the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {openSourceProjects.map((proj) => (
            <Card key={proj.name} className="group bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={proj.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    {proj.link !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={proj.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {proj.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {proj.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
