"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { 
  Target, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  BarChart3, 
  Users, 
  Rocket, 
  Bot, 
  FileText, 
  MessageSquare, 
  RefreshCw, 
  Building2,
  ArrowRight,
  Calendar,
  Zap,
  Star,
  TrendingDown,
  Eye,
  Briefcase,
  Phone,
  Mail,
  Info,
  CalendarDays
} from "lucide-react";
import { useState } from "react";

interface AssessmentResultsProps {
  results: {
    primaryConstraint: string;
    automationOpportunityScore: number;
    recommendedFocusAreas: string[];
    potentialTimeSavings: number;
    revenueImpactEstimate: number;
    constraintScores: {
      leadGeneration: number;
      sales: number;
      onboarding: number;
      delivery: number;
      communication: number;
      growth: number;
    };
    businessMetrics?: {
      currentClientCount: number;
      monthlyNewClients: number;
      annualRevenue: number;
      teamSize: number;
      averageHourlyRate: number;
      timeSavings: number;
      revenueImpact: number;
    };
  };
  formData: any;
}

export default function AssessmentResults({ results, formData }: AssessmentResultsProps) {
  const [activeTab, setActiveTab] = useState("executive");
  
  const getConstraintDescription = (constraint: string) => {
    const descriptions: { [key: string]: string } = {
      "Lead Generation": "Your business is struggling to attract and convert enough qualified leads. This is limiting your growth potential and creating a bottleneck in your sales pipeline.",
      "Sales & Conversion": "You're generating leads but not converting them effectively into sales. This suggests issues with your sales process, follow-up, or lead qualification.",
      "Client Onboarding": "The process of bringing new clients onboard is inefficient and may be causing delays, frustration, and potential client loss.",
      "Service Delivery": "Your team is struggling to deliver projects efficiently and on time, which can impact client satisfaction and team morale.",
      "Communication": "Client communication and reporting processes are manual and time-consuming, reducing your team's productivity.",
      "Account Growth": "You're not effectively growing existing client relationships or identifying upsell opportunities, limiting revenue growth."
    };
    return descriptions[constraint] || "This area represents your biggest opportunity for improvement.";
  };

  const getSeverityLevel = (score: number) => {
    if (score <= 2.0) return { level: "Critical", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
    if (score <= 3.0) return { level: "Significant", color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" };
    if (score <= 4.0) return { level: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" };
    return { level: "Well-managed", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
  };

  const getScoreColor = (score: number) => {
    if (score <= 2.0) return "#ef4444"; // red
    if (score <= 3.0) return "#f97316"; // orange
    if (score <= 4.0) return "#eab308"; // yellow
    return "#22c55e"; // green
  };

  const getScoreLabel = (score: number) => {
    if (score <= 2.0) return "Critical";
    if (score <= 3.0) return "Significant";
    if (score <= 4.0) return "Moderate";
    return "Well-managed";
  };

  const severity = getSeverityLevel(results.automationOpportunityScore);
  
  // Palm package details
  const palmPackageCost = 5000; // £5k per month
  const annualPackageCost = palmPackageCost * 12;
  
  // Calculate ROI
  const totalAnnualBenefit = results.businessMetrics ? 
    (results.businessMetrics.timeSavings * results.businessMetrics.averageHourlyRate * 50) + results.revenueImpactEstimate : 
    results.revenueImpactEstimate;
  
  const firstYearROI = ((totalAnnualBenefit - annualPackageCost) / annualPackageCost) * 100;
  const ongoingAnnualROI = (totalAnnualBenefit / annualPackageCost) * 100;

  const constraintScores = [
    { name: "Lead Generation", score: results.constraintScores.leadGeneration, icon: <Target className="w-5 h-5" /> },
    { name: "Sales & Conversion", score: results.constraintScores.sales, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Client Onboarding", score: results.constraintScores.onboarding, icon: <Users className="w-5 h-5" /> },
    { name: "Service Delivery", score: results.constraintScores.delivery, icon: <Rocket className="w-5 h-5" /> },
    { name: "Communication", score: results.constraintScores.communication, icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Account Growth", score: results.constraintScores.growth, icon: <BarChart3 className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-8 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Logo />
      </div>

      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Case Summary
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Review the complete business case for implementing Palm's automation solution for {results.businessMetrics?.teamSize || 'your'} team
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Info className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">How We Calculate</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("executive")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "executive" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab("roi")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "roi" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ROI Analysis
            </button>
            <button
              onClick={() => setActiveTab("next-steps")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "next-steps" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Next Steps
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <Card className="p-8 border border-gray-200">
          {activeTab === "executive" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-gray-600 mb-6">
                  Based on your inputs, implementing Palm's automation solution for {results.businessMetrics?.teamSize || 'your'} team would:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Save <strong>{results.potentialTimeSavings} hours annually</strong> in manual processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Generate <strong>£{results.revenueImpactEstimate.toLocaleString()}</strong> in additional revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Provide a <strong>{Math.round(firstYearROI)}% ROI</strong> in the first year</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {Math.round(results.potentialTimeSavings / 12)}
                    </div>
                    <div className="text-sm text-gray-600">Hours Saved Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      £{totalAnnualBenefit.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Annual Benefit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {Math.round(firstYearROI)}%
                    </div>
                    <div className="text-sm text-gray-600">First Year ROI</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Improvement Scenarios</h3>
                <p className="text-gray-600 mb-4">
                  Palm can drive different levels of revenue improvement based on implementation and engagement:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Conservative (1%):</span>
                    <span className="text-green-600 font-semibold">+£{Math.round(results.revenueImpactEstimate * 0.33).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Moderate (3%):</span>
                    <span className="text-green-600 font-semibold">+£{results.revenueImpactEstimate.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Optimistic (5%):</span>
                    <span className="text-green-600 font-semibold">+£{Math.round(results.revenueImpactEstimate * 1.67).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "roi" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Hours Saved:</span>
                      <span className="font-semibold">{Math.round(results.potentialTimeSavings / 12)} hrs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Hours Saved:</span>
                      <span className="font-semibold">{results.potentialTimeSavings} hrs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Cost Saved:</span>
                      <span className="font-semibold">£{results.businessMetrics ? Math.round(results.businessMetrics.timeSavings * results.businessMetrics.averageHourlyRate / 12).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Cost Saved:</span>
                      <span className="font-semibold">£{results.businessMetrics ? Math.round(results.businessMetrics.timeSavings * results.businessMetrics.averageHourlyRate).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Revenue Improvement:</span>
                      <span className="font-semibold">£{results.revenueImpactEstimate.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Annual Benefit:</span>
                        <span className="text-2xl font-bold text-green-600">£{totalAnnualBenefit.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">First Year ROI:</span>
                        <span className="text-2xl font-bold text-green-600 flex items-center gap-2">
                          {Math.round(firstYearROI)}%
                          <TrendingUp className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Ongoing Annual ROI:</span>
                        <span className="text-2xl font-bold text-green-600 flex items-center gap-2">
                          {Math.round(ongoingAnnualROI)}%
                          <TrendingUp className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Performance Benchmark</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {constraintScores.map((area) => (
                    <div key={area.name} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        {area.icon}
                        <h4 className="font-semibold text-gray-900">{area.name}</h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold" style={{ color: getScoreColor(area.score) }}>
                          {area.score.toFixed(1)}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {getScoreLabel(area.score)}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-300" 
                          style={{ 
                            width: `${(area.score / 5) * 100}%`,
                            backgroundColor: getScoreColor(area.score)
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "next-steps" && (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
              <p className="text-gray-700 mb-6">
                Ready to see these potential savings in action? Book a demo of Palm and we'll show you how your organization can save time and improve performance across your {results.businessMetrics?.teamSize || 'team'}.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">hello@palm-automation.com</span>
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                <CalendarDays className="w-4 h-4 mr-2" />
                Book a Meeting
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
