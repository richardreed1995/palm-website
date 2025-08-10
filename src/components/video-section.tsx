"use client";

import { useEffect } from "react";

export default function VideoSection() {
  useEffect(() => {
    // Load Wistia script
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/embed/medias/oq4w5gmsm6.jsonp";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/oq4w5gmsm6.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div 
          className="wistia_embed wistia_async_oq4w5gmsm6 w-full"
          style={{ paddingTop: '56.25%' }}
        />
      </div>
    </section>
  );
}
