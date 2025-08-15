"use client";

import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";

export default function FounderLetterPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Dear Business Owner,</h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                
                <p>Does this sound familiar? You started your business to build something profitable and scalable, one that would give you freedom and financial success.</p>
                
                <p>But somewhere along the way, things got... complicated.</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Every process requires your personal attention</li>
                  <li>You're working way too many hours just to keep things running</li>
                  <li>Despite all the effort, margins are disappointingly thin</li>
                  <li>Client delivery is inconsistent and stressful</li>
                </ul>
                
                <p className="text-lg font-semibold">It doesn't have to be that way.</p>
                
                <p>I'm Richard Reed, founder of Palm.</p>
                
                <p>Before Palm, I built and scaled my own B2B service business. Like many founders, I started by doing everything myself. Sales, delivery, admin, client management. I was working 70+ hour weeks and barely breaking even.</p>
                
                <p>Then I discovered something that changed everything: the right automation and processes could transform a chaotic, low-margin business into a profitable, scalable operation.</p>
                
                <div className="my-8">
                  <h3 className="font-semibold text-gray-900 mb-4">My own business results:</h3>
                  <ul className="space-y-2">
                    <li>• Margins increased from 15% to 40%+ through process optimisation and automation</li>
                    <li>• Client satisfaction scores improved by 60% with consistent, automated touchpoints</li>
                    <li>• Weekly working hours dropped from 70+ to under 40 whilst revenue continued growing</li>
                    <li>• Client delivery became predictable and stress-free with systematic workflows</li>
                  </ul>
                </div>
                
                <p>It took years of experimenting, failing, and refining to discover which processes actually move the needle on profitability and efficiency.</p>
                
                <p>Most automation companies focus on the wrong things, they'll automate your invoicing when you only send 5 invoices per month, instead of fixing the bottlenecks that are actually costing you time and money.</p>
                
                <p>We don't automate everything, we find what's actually holding your business back and fix that first.</p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How We Work</h2>
                
                <p>The process is straightforward. We work together to map out your business, find the real constraints that are costing you time and money, then deploy the right automations and processes to solve these challenges.</p>
                
                <p>We don't automate for the sake of it - we focus on what will actually move the needle on your margins and efficiency. Most of the time, it's not what business owners think it is. That's why we start by understanding your business properly before we build anything.</p>
                
                <p>If you're interested in exploring how automation could transform your business, book in for a call and we'll assess if it's a good fit to work together.</p>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="mb-2">Best regards,</p>
                  <p className="font-semibold">Richard Reed</p>
                  <p className="text-gray-600">Founder, Palm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 