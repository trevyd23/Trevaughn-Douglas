"use client"
import { RefObject, useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {

    // const [isIntersecting, setIntersecting] = useState(false)
  
    const [wasSeen, setWasSeen] = useState(
        typeof IntersectionObserver !== "function"
      );
    
      useEffect(() => {
        if (ref.current) {
          const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setWasSeen(true)
          )
          observer.observe(ref.current)
          return () => {
            setWasSeen(false)
            observer.disconnect()
          }
        }
      }, [ref, wasSeen])
      return wasSeen
  }