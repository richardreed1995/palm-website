"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    Calendly: any
  }
}

export function CalendlyWidget() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const widgetInitialized = useRef(false)

  useEffect(() => {
    // Check if Calendly script already exists
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    
    if (existingScript) {
      scriptRef.current = existingScript as HTMLScriptElement
    } else {
      // Create and add script only if it doesn't exist
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      scriptRef.current = script
      document.body.appendChild(script)
    }

    const initializeWidget = () => {
      if (window.Calendly && !widgetInitialized.current) {
        const parentElement = document.getElementById("calendly-inline-widget")
        if (parentElement) {
          // Clear any existing content
          parentElement.innerHTML = ""
          
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/richard-4ta/automation",
            parentElement: parentElement,
            prefill: {},
            utm: {},
          })
          widgetInitialized.current = true
        }
      }
    }

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      initializeWidget()
    } else {
      // Wait for script to load
      scriptRef.current!.onload = initializeWidget
    }

    return () => {
      // Don't remove the script on cleanup as it might be used elsewhere
      // Just mark as not initialized
      widgetInitialized.current = false
    }
  }, [])

  return <div id="calendly-inline-widget" style={{ minWidth: "320px", height: "700px" }} />
} 