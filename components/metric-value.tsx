"use client"

import { useEffect, useMemo, useRef, useState } from "react"

function parseMetricValue(raw: string) {
  const trimmed = raw.trim()
  const match = trimmed.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/)

  if (!match) {
    return { target: 0, suffix: trimmed, decimals: 0 }
  }

  const numberPart = match[1]
  const suffix = match[2] ?? ""
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1]!.length : 0

  return {
    target: Number(numberPart),
    suffix,
    decimals,
  }
}

type MetricValueProps = {
  value: string
  animate: boolean
  durationMs?: number
}

export function MetricValue({ value, animate, durationMs = 900 }: MetricValueProps) {
  const { target, suffix, decimals } = useMemo(() => parseMetricValue(value), [value])
  const [display, setDisplay] = useState(value)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!animate) return
    if (startedRef.current) return

    startedRef.current = true

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      const current = target * eased

      const formatted = decimals > 0 ? current.toFixed(decimals) : String(Math.round(current))
      setDisplay(`${formatted}${suffix}`)

      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplay(`${decimals > 0 ? target.toFixed(decimals) : String(target)}${suffix}`)
      }
    }

    requestAnimationFrame(tick)
  }, [animate, decimals, durationMs, suffix, target])

  return <>{display}</>
}
