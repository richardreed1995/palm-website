'use client';

import { Database, ShieldCheck, IdCard, Mail, Users, Target, TrendingUp } from 'lucide-react'

export default function Features() {
    const steps = [
        {
            number: 1,
            icon: Database,
            title: "Business Analysis",
            description: "We spend time understanding how your business actually works, map out your current processes, and identify the biggest bottlenecks that are costing you time and money. We provide a clear ROI projection based on your specific situation."
        },
        {
            number: 2,
            icon: ShieldCheck,
            title: "Process Documentation",
            description: "We document every step of your client delivery and internal operations. This gives you a clear picture of how work flows through your business and where the problems are hiding."
        },
        {
            number: 3,
            icon: IdCard,
            title: "Automation Strategy",
            description: "Based on our analysis, we create a detailed plan for which processes to automate first. We focus on high-impact, quick-win improvements that will give you the biggest return on investment."
        },
        {
            number: 4,
            icon: Mail,
            title: "System Integration",
            description: "We build your automation systems using professional tools like Make, N8n, and custom code solutions. Everything integrates seamlessly with your existing tools through robust APIs and workflows designed for reliability."
        },
        {
            number: 5,
            icon: Users,
            title: "Team Training",
            description: "We provide comprehensive training for your team on how to use and manage the new automated systems. You get complete documentation, video tutorials, and hands-on training sessions to ensure everyone is confident with the new processes."
        },
        {
            number: 6,
            icon: Target,
            title: "Ongoing Support",
            description: "We provide continuous support to ensure your automations keep working perfectly. Regular health checks, updates, and immediate troubleshooting mean your systems stay reliable and effective as your business grows."
        },
        {
            number: 7,
            icon: TrendingUp,
            title: "Continuous Improvement",
            description: "You get clear reports showing exactly how much time and money the automation is saving you. We identify additional opportunities for improvement and plan the next phase of automation."
        }
    ];

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-6xl">Our 7-Step Process</h2>
                    <p>A proven, methodical approach to automating your business - starting with what matters most.</p>
                </div>

                <div className="space-y-4">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="group relative overflow-hidden rounded-xl border bg-background p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-foreground/20 mx-auto max-w-2xl"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-green-400 transition-colors group-hover:bg-gray-900">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-foreground font-bold text-base">
                                                {step.number}.
                                            </span>
                                            <h3 className="text-base font-semibold text-foreground">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
