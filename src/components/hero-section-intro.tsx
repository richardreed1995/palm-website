"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

export default function HeroSectionIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <TextEffect
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            per="word"
            preset="fade-in-blur"
          >
            Transform Your Business With Automation
          </TextEffect>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get 5 complete automation flows that will save you 20+ hours per week and scale your service business without hiring more staff.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
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