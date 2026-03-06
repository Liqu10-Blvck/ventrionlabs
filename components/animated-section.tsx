"use client"

import { type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

type AnimatedSectionProps = PropsWithChildren<{
  className?: string
  animationClassName?: string
}>

export function AnimatedSection({
  children,
  className,
  animationClassName = "animate-fade-in-up",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        isInView ? animationClassName : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  )
}
