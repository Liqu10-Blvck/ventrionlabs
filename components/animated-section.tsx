"use client"

import { useEffect, useState, type PropsWithChildren, type ElementType } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

type AnimatedSectionProps = PropsWithChildren<{
  className?: string
  animationClassName?: string
  as?: ElementType
}>

export function AnimatedSection({
  children,
  className,
  animationClassName = "animate-fade-in-up",
  as: Tag = "div",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Tag
      ref={ref}
      suppressHydrationWarning
      className={cn(
        "will-change-transform",
        mounted && isInView ? animationClassName : "opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
