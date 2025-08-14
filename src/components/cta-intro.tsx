import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTAIntro() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          Ready to transform your business into a profit machine?
        </h2>
        <div className="mt-12">
          <Link href="/get-started-intro">
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