import { Search, Target, UserCheck, Cog, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const processes = [
  {
    title: "Acquisition",
    description: "Document every step from initial awareness to qualified enquiry. Identify conversion leaks and missed opportunities in your marketing and lead generation systems.",
    icon: Search,
    image: "/Authoritycontent.png"
  },
  {
    title: "Conversion",
    description: "Map your complete sales process to understand where prospects disengage. Analyse decision points, objection patterns, and pipeline inefficiencies.",
    icon: Target,
    image: "/Conversion.jpg"
  },
  {
    title: "Onboarding",
    description: "Chart the client journey from contract signature through project initiation. Spot friction points that impact client satisfaction and project success rates.",
    icon: UserCheck,
    image: "/onboarding.jpg"
  },
  {
    title: "Delivery",
    description: "Trace how work flows through your team from brief to completion. Identify resource bottlenecks, quality control gaps, and delivery inefficiencies.",
    icon: Cog,
    image: "/SCR-20250531-kucr.png"
  },
  {
    title: "Retention",
    description: "Analyse the complete client lifecycle to understand retention drivers. Map opportunities for account growth, referrals, and long-term value maximisation.",
    icon: Heart,
    image: "/Retention.jpg"
  }
];

export default function ProcessMapping() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Our Business Mapping Process Covers Five Critical Areas:
          </h2>
        </div>
        
        <div className="space-y-16">
          {processes.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <div key={process.title} className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-8 w-8 text-gray-500" />
                    <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {process.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {process.title} process mapping
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <img 
                      src={process.image} 
                      alt={`${process.title} process mapping`}
                      className="w-full h-auto object-cover min-h-[200px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Get Started Button */}
        <div className="text-center mt-16">
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
