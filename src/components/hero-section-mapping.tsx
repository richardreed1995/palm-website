"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

export default function HeroSectionMapping() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* B2B Service Businesses Call Out */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#A8FF9E] border border-[#8BFF7A] mb-4">
            <span className="text-xs font-medium text-black">
              For B2B Service Businesses
            </span>
          </div>
          
          <TextEffect
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            per="word"
            preset="fade-in-blur"
          >
            Transform Your Business Operations with Complete Process Mapping & Strategic Automation
          </TextEffect>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-lg">
            We'll analyse your entire workflow from lead generation to client retention, then build bespoke automation to eliminate your most expensive bottleneck. ROI guaranteed within 90 days or full refund.
          </p>
          <p className="mt-3 text-xs italic text-gray-500 sm:text-sm">
            Watch the video below to see pricing then book a call on the next page
          </p>
        </div>
        
        <div className="mt-8 mx-auto max-w-4xl sm:mt-12">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
              poster="https://fast.wistia.com/embed/medias/oq4w5gmsm6/swatch"
            >
              <source src="/Automate Your Business in 30 Days (2).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-6 flex items-center justify-center sm:mt-8">
            <Button asChild size="lg" style={{ backgroundColor: '#a8ff9e', color: 'black' }} className="hover:opacity-80">
              <Link href="/get-started-mapping">
                Get Started
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
