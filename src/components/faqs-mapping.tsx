"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What deliverables do I receive?",
    answer: "You'll receive a complete visual map of your business processes, documentation of all identified bottlenecks, one implemented automation system, and templates for ongoing process improvement."
  },
  {
    question: "How do you guarantee ROI?",
    answer: "We focus on your most expensive operational bottleneck - typically saving businesses 10-40 hours per month or preventing significant revenue leakage. If measurable savings don't exceed our fee within 90 days, we provide a full refund."
  },
  {
    question: "Which systems and tools do you integrate with?",
    answer: "We work with your existing technology stack and recommend cost-effective solutions where needed. Common integrations include CRM systems, project management platforms, and communication tools."
  },
  {
    question: "What level of technical expertise do I need?",
    answer: "None. We handle all technical implementation and provide straightforward training. All systems are designed for business operators, not technical specialists."
  },
  {
    question: "What ongoing support is included?",
    answer: "The process maps and automation belong to you permanently. We provide documentation and basic support for system adjustments during the first 30 days."
  },
  {
    question: "Is this suitable for my industry?",
    answer: "Our methodology works across all professional service businesses. Whether you're in consulting, agency work, professional services, or B2B solutions, the core business processes remain consistent."
  },
  {
    question: "What is the investment required?",
    answer: "Full pricing details are provided in the video above. This is a one-time engagement with no recurring fees - you own all deliverables permanently."
  }
];

export default function FAQsMapping() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Can't find what you're looking for? Contact our team
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-sm ${
                openIndex === index ? 'border-gray-300 shadow-md' : ''
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </div>
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
