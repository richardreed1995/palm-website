import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';

export default function Features() {
    return (
        <section id="overview" className="py-6 md:py-10 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Palm?</h2>
                    <p className="text-muted-foreground text-base md:text-s">
                        We're a team of B2B experts who've built and scaled our own service businesses. We understand the real challenges you face because we've been there.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Strategic Implementation</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We're fellow B2B service business owners who understand your real challenges. We focus on what actually moves the needle on profitability and client satisfaction, not just technology for technology's sake.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Process Mapping</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We map out your business to identify the real bottlenecks costing you time and money. We focus on high-impact improvements that directly affect your bottom line.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Latest Technology</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We use enterprise-grade platforms like Make and N8n, plus custom code solutions, to build robust systems that integrate seamlessly with your existing tools.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Fast Implementation</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Most clients see immediate improvements within 2-3 weeks, with significant margin improvements within 60-90 days - because we know which processes to prioritise.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">True Partnership Support</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We don't just build and leave. You get full ongoing support and comprehensive training so your team masters the new systems. We're invested in your long-term success.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Complete Transparency</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Clear dashboards show exactly how much time and money our automation is saving you. Track margin improvements and ROI with complete visibility.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
