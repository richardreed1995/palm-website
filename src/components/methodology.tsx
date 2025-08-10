"use client";

import { BarChart3, Target, ShieldCheck } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../card';

const methodologyCards = [
  {
    icon: <BarChart3 className="size-7 text-zinc-300" />, // Constraint-Based Automation
    title: 'Constraint-Based Automation',
    description:
      "We don't waste time automating 5 invoices per month when your real problem is client onboarding taking 3 weeks. We find what's actually hurting your business and fix that first - everything else can wait.",
  },
  {
    icon: <Target className="size-7 text-zinc-300" />, // Complete Process Mapping
    title: 'Complete Process Mapping',
    description:
      'We map out both your client delivery process and your internal operations to understand how work actually flows through your business. Then we identify where things get stuck, take too long, or require too much manual work.',
  },
  {
    icon: <ShieldCheck className="size-7 text-zinc-300" />, // Client Experience Focus
    title: 'Client Experience Focus',
    description:
      'Every automation we implement makes your clients\' experience better. Automatic progress updates, faster turnaround times, and consistent quality delivery - not just internal efficiency gains.',
  },
  {
    icon: <BarChart3 className="size-7 text-zinc-300" />, // Methodical Implementation
    title: 'Methodical Implementation',
    description:
      'We implement changes systematically through our proven 7-step process. No chaos, no disruption to your current operations - just steady improvements that compound over time.',
  },
];

const steps = [
  {
    title: 'Financial + ROI Modelling',
    description:
      'We analyse your business and provide an ROI model for working with us based on industry benchmarks.',
  },
  {
    title: 'Build Branded Assets',
    description:
      'We build a branded funnel for you that maintains consistency with your brand identity.',
  },
  {
    title: 'Qualification',
    description:
      'We adjust our AI-powered qualification funnels to meet your specific needs and requirements.',
  },
  {
    title: 'Follow-up',
    description:
      'We implement our 24-step multi-touch lead nurturing sequence to increase close rates.',
  },
  {
    title: 'Multi-Channel Integration',
    description:
      'We integrate your funnels into our multi-channel campaigns for maximum reach and effectiveness.',
  },
  {
    title: 'Quality Assurance at Scale',
    description:
      'We monitor prospect quality continuously with automatic replacement protocols for invalid or low-quality leads.',
  },
  {
    title: 'Performance Analytics + Reporting',
    description:
      'We track conversion rates, ROI, and prospect quality with detailed attribution reporting and optimisation recommendations.',
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-12 md:py-20 bg-zinc-900 text-white scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        <div className="mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl mb-4">Our Process</h2>
          <p className="text-zinc-300 text-lg">We don't automate for the sake of it. We find your biggest constraints first, then build systematic solutions that actually move the needle on your profits and free time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {methodologyCards.map((card) => (
            <Card key={card.title} className="bg-zinc-950 border-zinc-800 text-white shadow-md flex flex-col h-full">
              <CardHeader className="flex flex-col items-start gap-1 border-none px-4 pt-5 pb-0">
                <div className="flex items-center gap-2 w-full">
                  {card.icon}
                  <CardTitle className="text-left text-base font-semibold">{card.title}</CardTitle>
                </div>
                <hr className="border-t border-zinc-700 my-3 w-full" />
              </CardHeader>
              <CardContent className="flex-1 flex items-start justify-start px-4 pb-5 pt-0">
                <CardDescription className="text-left text-zinc-300 text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 