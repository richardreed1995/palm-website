"use client";

import { useEffect } from "react";

export default function VideoSection() {
  useEffect(() => {
    // Load Wistia script
    if (typeof window !== 'undefined' && !window.Wistia) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);

      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/oq4w5gmsm6.js";
      script2.async = true;
      script2.type = "module";
      document.body.appendChild(script2);

      // Add Wistia styles
      const style = document.createElement("style");
      style.textContent = `
        wistia-player[media-id='oq4w5gmsm6']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/oq4w5gmsm6/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top:56.25%; 
        }
      `;
      document.head.appendChild(style);

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        if (document.body.contains(script2)) {
          document.body.removeChild(script2);
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <wistia-player 
          media-id="oq4w5gmsm6" 
          aspect="1.7777777777777777"
          className="w-full"
        />
      </div>
    </section>
  );
}
