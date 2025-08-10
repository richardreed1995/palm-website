"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import LogoCloud from "@/components/logo-cloud";
import Link from "next/link";
import { useEffect } from "react";

export default function HeroSectionIntro() {
  useEffect(() => {
    // Load Wistia script
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/oq4w5gmsm6.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    // Add Wistia styles
    const style = document.createElement("style");
    style.textContent = `wistia-player[media-id='oq4w5gmsm6']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/oq4w5gmsm6/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <TextEffect
              className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight"
            >
              Get 5 Complete Business Automation Systems Built & Installed In Your Business - In Just 30 Days!
            </TextEffect>
          </div>
          <p className="text-lg leading-8 text-muted-foreground mb-8">
            We'll set up automated systems that take care of 5 key areas of your business for a one-time payment. More profits, less stress, and more free time!
          </p>
          <p className="text-lg leading-8 text-muted-foreground mb-12">
            Watch this video for all the details and price, then schedule your call!
          </p>
          
          <div className="mb-12">
            <wistia-player media-id="oq4w5gmsm6" aspect="1.7777777777777777"></wistia-player>
          </div>
          
          <div className="flex justify-center">
            <Link href="/get-started-intro">
              <Button size="lg" className="bg-[#A8FF9E] text-black hover:bg-[#8BFF7A] px-12 py-6 text-xl font-semibold shadow-lg">
                Get Started NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
} 