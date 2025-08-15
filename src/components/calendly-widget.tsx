"use client"

import { useEffect } from "react"

export function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/richard-4ta/automation?hide_gdpr_banner=1" 
        style={{ width: "100%", height: "700px" }}
      />
    </div>
  )
} 