import { Button } from "./ui/button";
import Link from 'next/link'

export default function CTAMapping() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-zinc-900 text-white">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Ready to improve your operations?</h2>
                    <p className="mt-4 text-zinc-300">Book a free business analysis session with our team</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/get-started-mapping">
                                <span>Get Started</span>
                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
