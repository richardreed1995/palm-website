import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProcessDescription() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Our 5-Step Process
          </h2>
          <p className="text-lg text-gray-300">
            A proven, methodical approach to mapping and automating your business - starting with what matters most
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#A8FF9E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">1. Initial Enquiry & Assessment</h3>
                <p className="text-gray-300 text-sm">We start with a comprehensive discussion about your business challenges, goals, and current processes to understand your unique situation and identify the biggest opportunities for improvement.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#A8FF9E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">2. Two Half-Day Mapping Sessions</h3>
                <p className="text-gray-300 text-sm">We conduct two focused half-day sessions over Zoom to map out your entire business process. This gives us complete visibility into how your operations work and where the bottlenecks are hiding.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#A8FF9E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">3. Automation Development</h3>
                <p className="text-gray-300 text-sm">We identify your biggest constraint and build a targeted automation solution to address it. This is delivered within 30 days and focuses on high-impact, quick-win improvements that will give you the biggest return on investment.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#A8FF9E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">4. Comprehensive Roadmap</h3>
                <p className="text-gray-300 text-sm">You'll receive a detailed roadmap of what can be automated and improved across your entire business, with prioritization based on impact and ROI. This gives you a clear picture of your automation journey ahead.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#A8FF9E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">5. Ongoing Partnership</h3>
                <p className="text-gray-300 text-sm">We can continue working together to implement more automations, either on a project basis or through a retainer arrangement. This ensures you have ongoing support to scale your automation efforts.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/get-started-mapping">
            <Button size="lg" className="bg-[#A8FF9E] text-black hover:bg-[#8BFF7A] px-8 py-4 text-lg">
              Get Started
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

