import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  {
    title: "Complete Process Visibility",
    description: "Get a comprehensive map of your entire business operations. Understand exactly how leads move through your system and where revenue opportunities are being missed."
  },
  {
    title: "Guaranteed Return on Investment",
    description: "We identify and automate your most expensive bottleneck. If the automation doesn't deliver measurable ROI greater than our fee within 90 days, we provide a full refund."
  },
  {
    title: "Strategic Implementation",
    description: "Work directly with our team during two focused half-day sessions. You'll gain deep understanding of your processes and own the systems we develop together."
  }
];

export default function BenefitsMapping() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Why Business Process Mapping Matters
          </h2>
          <p className="text-lg text-gray-600">
            Clear visibility, measurable improvements, and systematic growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Get Started Button */}
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
