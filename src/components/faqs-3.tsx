import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'shield-check',
            question: 'Will this disrupt our current operations?',
            answer: 'No. We implement automation gradually using professional tools like Make and N8n that integrate with your existing systems. Your team gets full training on the new processes, and we provide ongoing support to ensure everything runs smoothly.',
        },
        {
            id: 'item-2',
            icon: 'users',
            question: 'What makes you different from other automation companies?',
            answer: "We don't automate everything - we find what's actually holding your business back and fix that first. Many automation companies will try to automate your invoicing when you only do 5 invoices per month. We focus on what actually matters to your profits and efficiency, plus we provide full ongoing support.",
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'How quickly will we see results?',
            answer: "Most clients see immediate improvements within 2-3 weeks as we implement quick wins. Significant time and cost savings typically show up within 30-60 days. We focus on fast, measurable improvements rather than lengthy projects.",
        },
        {
            id: 'item-4',
            icon: 'settings',
            question: 'What tools and platforms do you use?',
            answer: "We use professional automation platforms like Make and N8n, plus custom code solutions when needed. These integrate with your existing tools - CRM, project management, accounting systems, email platforms. You get enterprise-grade automation without enterprise complexity.",
        },
        {
            id: 'item-5',
            icon: 'alert-triangle',
            question: 'What if something breaks or stops working?',
            answer: 'We provide comprehensive ongoing support to ensure your automations stay working perfectly. Regular system health checks, immediate troubleshooting, and proactive maintenance mean you can rely on your automated systems without worry.',
        },
        {
            id: 'item-6',
            icon: 'users',
            question: 'Will our team know how to use the new systems?',
            answer: 'Yes. We provide thorough training for your entire team, including documentation, video tutorials, and hands-on training sessions. Everyone will be confident using the new automated processes, and we\'re always available for additional support.',
        },
        {
            id: 'item-7',
            icon: 'pound-sterling',
            question: 'How much does this cost?',
            answer: 'Investment varies based on the complexity of your business and the automation opportunities we identify. Most clients see ROI within 60-90 days through time savings and margin improvements. We provide clear cost and ROI projections upfront.',
        },
        {
            id: 'item-8',
            icon: 'globe',
            question: 'What if our processes are too complex or unique?',
            answer: 'Complex processes are often the best candidates for automation because that\'s where you\'re losing the most time and money. We specialise in understanding complex service businesses and creating custom automation solutions using code and professional platforms.',
        },
        {
            id: 'item-9',
            icon: 'check-circle',
            question: 'Do you guarantee results?',
            answer: 'Yes. We guarantee you\'ll see measurable improvements in efficiency and client satisfaction within 90 days, or we\'ll keep working until you do. Plus, our ongoing support ensures your systems keep delivering results long-term.',
        },
        {
            id: 'item-10',
            icon: 'arrow-right-circle',
            question: 'What are the next steps to get started?',
            answer: "Book a free business analysis with our automation team. We'll review your current processes, identify automation opportunities, and provide a clear ROI projection. If it's a good fit, we'll create your implementation roadmap. No pressure—just transparent discussion about your goals.",
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Commonly asked questions
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
