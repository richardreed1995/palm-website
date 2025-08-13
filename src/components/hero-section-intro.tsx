"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

export default function HeroSectionIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            per="word"
            preset="fade-in-blur"
          >
            Get 5 Complete Business Automation Systems Installed in Your B2B Service Business - In Just 30 Days!
          </TextEffect>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get 5 complete automation flows that will save you 20+ hours per week and scale your service business without hiring more staff.
          </p>
          <p className="mt-4 text-sm italic text-gray-500">
            Watch the video below to see pricing then book a call on the next page
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-4xl">
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
          
          <div className="mt-10 flex items-center justify-center">
            <Button asChild size="lg" style={{ backgroundColor: '#a8ff9e', color: 'black' }} className="hover:opacity-80">
              <Link href="/get-started-intro">
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