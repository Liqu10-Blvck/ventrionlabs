import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Layers,
  ShieldCheck,
  LockKeyhole,
  Workflow,
  ListChecks,
  Gauge,
} from "lucide-react"

const problemIcons = [Workflow, ListChecks, Layers, LockKeyhole, Gauge, ShieldCheck] as const

type ProblemsSectionProps = {
  eyebrow: string
  title: string
  description: string
  items: Array<{ title: string; description: string }>
}

export function ProblemsSection({ eyebrow, title, description, items }: ProblemsSectionProps) {
  const problems = items.map((item, index) => ({
    ...item,
    icon: problemIcons[index] ?? Workflow,
  }))

  return (
    <section id="problema" className="border-y border-border bg-secondary/30 px-6 py-20 dark:border-white/10 dark:bg-[#070b17] sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
            {eyebrow}
          </p>
          <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-white/60 sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border-border bg-card/80 transition-all duration-300 hover:border-foreground/15 hover:bg-card hover:shadow-lg hover:shadow-black/8 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:shadow-black/20"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground dark:border-white/10 dark:bg-white/4 dark:text-white sm:size-10">
                  <problem.icon className="size-5" />
                </div>
                <CardTitle className="text-foreground dark:text-white">{problem.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  {problem.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
