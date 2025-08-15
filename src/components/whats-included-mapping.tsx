import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Video, Zap, Calendar, Map, Target, BarChart3, FileText, Handshake } from "lucide-react";

export default function WhatsIncludedMapping() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            What's Included?
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to map, understand, and optimize your business operations
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Complete business process mapping</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Two half-day Zoom sessions</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Working automation solution</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">30-day delivery guarantee</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Map className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Comprehensive automation roadmap</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Bottleneck identification</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">ROI analysis & projections</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Process documentation</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Ongoing partnership options</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#A8FF9E] flex-shrink-0" />
                  <span className="text-white text-left">Expert guidance & support</span>
                </div>
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
