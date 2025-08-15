"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import AssessmentResults from "./assessment-results";
import { 
  TrendingDown, 
  BarChart3, 
  TrendingUp, 
  Rocket, 
  Star,
  X,
  Phone,
  FileText,
  Bot,
  Clock,
  AlertCircle,
  Timer,
  Calendar,
  Zap,
  Briefcase,
  Eye,
  CheckCircle,
  MessageSquare,
  User,
  RefreshCw,
  Building2,
  Users
} from "lucide-react";

interface AssessmentData {
  name: string;
  email: string;
  phone: string;
  monthlyVisitors: string;
  currentClientCount: string;
  monthlyNewClients: string;
  leadConversionRate: string;
  timeOnLeadQualification: string;
  enquiryToSaleConversion: string;
  salesCycleLength: string;
  salesProcessDocumentation: string;
  timeOnSalesActivities: string;
  onboardingProcess: string;
  timeToFullOnboarding: string;
  clientInformationCollection: string;
  onboardingCompletionRate: string;
  projectManagementSystem: string;
  projectDeliveryTime: string;
  teamUtilisationRate: string;
  timeOnProjectManagement: string;
  qualityControlProcess: string;
  clientReportingFrequency: string;
  timeCreatingReports: string;
  clientCommunicationManagement: string;
  accountsPerManager: string;
  clientRetentionRate: string;
  upsellProcess: string;
  upsellSuccessRate: string;
  revenuePerClientGrowth: string;
  annualRevenue: string;
  teamSize: string;
  averageHourlyRate: string;
  primaryBusinessChallenge: string;
  currentAutomationLevel: string;
}

interface AssessmentResults {
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
}

export default function AssessmentFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<AssessmentData>({
    name: "",
    email: "",
    phone: "",
    monthlyVisitors: "",
    currentClientCount: "",
    monthlyNewClients: "",
    leadConversionRate: "",
    timeOnLeadQualification: "",
    enquiryToSaleConversion: "",
    salesCycleLength: "",
    salesProcessDocumentation: "",
    timeOnSalesActivities: "",
    onboardingProcess: "",
    timeToFullOnboarding: "",
    clientInformationCollection: "",
    onboardingCompletionRate: "",
    projectManagementSystem: "",
    projectDeliveryTime: "",
    teamUtilisationRate: "",
    timeOnProjectManagement: "",
    qualityControlProcess: "",
    clientReportingFrequency: "",
    timeCreatingReports: "",
    clientCommunicationManagement: "",
    accountsPerManager: "",
    clientRetentionRate: "",
    upsellProcess: "",
    upsellSuccessRate: "",
    revenuePerClientGrowth: "",
    annualRevenue: "",
    teamSize: "",
    averageHourlyRate: "",
    primaryBusinessChallenge: "",
    currentAutomationLevel: "",
  });

  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "monthlyVisitors",
      question: "How many visitors does your website receive each month?",
      options: [
        { value: "under-500", label: "Under 500", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "500-2000", label: "500-2,000", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "2000-5000", label: "2,000-5,000", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "5000-10000", label: "5,000-10,000", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-10000", label: "Over 10,000", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "currentClientCount",
      question: "How many active clients do you currently have?",
      options: [
        { value: "under-10", label: "Under 10", icon: <Users className="w-4 h-4" /> },
        { value: "10-25", label: "10-25", icon: <Building2 className="w-4 h-4" /> },
        { value: "25-50", label: "25-50", icon: <Building2 className="w-4 h-4" /> },
        { value: "50-100", label: "50-100", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "monthlyNewClients",
      question: "How many new clients do you typically acquire per month?",
      options: [
        { value: "0-1", label: "0-1", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "2-3", label: "2-3", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "4-6", label: "4-6", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "7-10", label: "7-10", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-10", label: "Over 10", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "leadConversionRate",
      question: "What's your lead conversion rate (visitors to enquiries)?",
      options: [
        { value: "under-1", label: "Under 1%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "1-2", label: "1-2%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "2-4", label: "2-4%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "4-7", label: "4-7%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-7", label: "Over 7%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "timeOnLeadQualification",
      question: "How much time do you spend on lead qualification per week?",
      options: [
        { value: "over-20", label: "Over 20 hours", icon: <AlertCircle className="w-4 h-4" /> },
        { value: "10-20", label: "10-20 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "5-10", label: "5-10 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "2-5", label: "2-5 hours", icon: <Rocket className="w-4 h-4" /> },
        { value: "under-2", label: "Under 2 hours", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "enquiryToSaleConversion",
      question: "What's your enquiry to sale conversion rate?",
      options: [
        { value: "under-10", label: "Under 10%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "10-20", label: "10-20%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "20-35", label: "20-35%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "35-50", label: "35-50%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-50", label: "Over 50%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "salesCycleLength",
      question: "How long is your average sales cycle?",
      options: [
        { value: "over-6-months", label: "Over 6 months", icon: <Clock className="w-4 h-4" /> },
        { value: "3-6-months", label: "3-6 months", icon: <Timer className="w-4 h-4" /> },
        { value: "1-3-months", label: "1-3 months", icon: <Calendar className="w-4 h-4" /> },
        { value: "1-4-weeks", label: "1-4 weeks", icon: <Zap className="w-4 h-4" /> },
        { value: "under-1-week", label: "Under 1 week", icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      id: "salesProcessDocumentation",
      question: "How well is your sales process documented?",
      options: [
        { value: "no-process", label: "No documented process", icon: <X className="w-4 h-4" /> },
        { value: "basic-inconsistent", label: "Basic but inconsistent", icon: <FileText className="w-4 h-4" /> },
        { value: "documented-some-automation", label: "Documented with automation", icon: <Bot className="w-4 h-4" /> },
        { value: "fully-documented-crm", label: "Fully documented with CRM", icon: <Briefcase className="w-4 h-4" /> },
        { value: "automated-nurture", label: "Automated nurture sequences", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "timeOnSalesActivities",
      question: "How much time do you spend on sales activities per week?",
      options: [
        { value: "over-30", label: "Over 30 hours", icon: <AlertCircle className="w-4 h-4" /> },
        { value: "20-30", label: "20-30 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "10-20", label: "10-20 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "5-10", label: "5-10 hours", icon: <Rocket className="w-4 h-4" /> },
        { value: "under-5", label: "Under 5 hours", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "onboardingProcess",
      question: "What's your current onboarding process like?",
      options: [
        { value: "ad-hoc", label: "Ad-hoc emails and calls", icon: <X className="w-4 h-4" /> },
        { value: "basic-emails", label: "Basic welcome emails", icon: <FileText className="w-4 h-4" /> },
        { value: "structured-checklist", label: "Structured checklist", icon: <CheckCircle className="w-4 h-4" /> },
        { value: "automated-workflow", label: "Automated workflow", icon: <Bot className="w-4 h-4" /> },
        { value: "comprehensive-automated", label: "Comprehensive automated system", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "timeToFullOnboarding",
      question: "How long does it take to fully onboard a client?",
      options: [
        { value: "over-1-month", label: "Over 1 month", icon: <Clock className="w-4 h-4" /> },
        { value: "2-4-weeks", label: "2-4 weeks", icon: <Timer className="w-4 h-4" /> },
        { value: "1-2-weeks", label: "1-2 weeks", icon: <Calendar className="w-4 h-4" /> },
        { value: "1-3-days", label: "1-3 days", icon: <Zap className="w-4 h-4" /> },
        { value: "same-day", label: "Same day", icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      id: "clientInformationCollection",
      question: "How do you collect client information?",
      options: [
        { value: "manual-back-forth", label: "Manual emails back and forth", icon: <FileText className="w-4 h-4" /> },
        { value: "static-forms", label: "Static forms and documents", icon: <FileText className="w-4 h-4" /> },
        { value: "online-forms-automation", label: "Online forms with automation", icon: <Bot className="w-4 h-4" /> },
        { value: "dynamic-forms", label: "Dynamic adaptive forms", icon: <Bot className="w-4 h-4" /> },
        { value: "integrated-portals", label: "Fully integrated client portals", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "onboardingCompletionRate",
      question: "What's your onboarding completion rate?",
      options: [
        { value: "under-60", label: "Under 60%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "65-75", label: "65-75%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "75-85", label: "75-85%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "85-95", label: "85-95%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-95", label: "Over 95%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "projectManagementSystem",
      question: "What project management system do you use?",
      options: [
        { value: "email-spreadsheets", label: "Email and spreadsheets", icon: <FileText className="w-4 h-4" /> },
        { value: "basic-pm-tool", label: "Basic PM tool", icon: <FileText className="w-4 h-4" /> },
        { value: "structured-templates", label: "Structured templates", icon: <CheckCircle className="w-4 h-4" /> },
        { value: "automated-workflows", label: "Automated workflows", icon: <Bot className="w-4 h-4" /> },
        { value: "fully-integrated", label: "Fully integrated system", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "projectDeliveryTime",
      question: "How often do you deliver projects on time?",
      options: [
        { value: "20-overrun", label: "Consistently late (20%+ overrun)", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "10-20-overrun", label: "Occasionally late (10-20% overrun)", icon: <Timer className="w-4 h-4" /> },
        { value: "within-10", label: "Usually on time (within 10%)", icon: <Calendar className="w-4 h-4" /> },
        { value: "always-on-time", label: "Always on time", icon: <Rocket className="w-4 h-4" /> },
        { value: "consistently-early", label: "Consistently early", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "teamUtilisationRate",
      question: "What's your team utilisation rate?",
      options: [
        { value: "under-60", label: "Under 60%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "60-70", label: "60-70%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "70-80", label: "70-80%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "80-90", label: "80-90%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-90", label: "Over 90%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "timeOnProjectManagement",
      question: "How much time do you spend on project management per week?",
      options: [
        { value: "over-25", label: "Over 25 hours", icon: <AlertCircle className="w-4 h-4" /> },
        { value: "15-25", label: "15-25 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "8-15", label: "8-15 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "3-8", label: "3-8 hours", icon: <Rocket className="w-4 h-4" /> },
        { value: "under-3", label: "Under 3 hours", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "qualityControlProcess",
      question: "How do you handle quality control?",
      options: [
        { value: "no-formal-qc", label: "No formal QC process", icon: <X className="w-4 h-4" /> },
        { value: "manual-review", label: "Manual review by PM", icon: <Eye className="w-4 h-4" /> },
        { value: "structured-checklists", label: "Structured checklists", icon: <CheckCircle className="w-4 h-4" /> },
        { value: "automated-checks", label: "Automated quality checks", icon: <Bot className="w-4 h-4" /> },
        { value: "comprehensive-automated", label: "Comprehensive automated QC", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "clientReportingFrequency",
      question: "How often do you report to clients?",
      options: [
        { value: "no-regular", label: "No regular reporting", icon: <X className="w-4 h-4" /> },
        { value: "monthly-manual", label: "Monthly manual reports", icon: <Calendar className="w-4 h-4" /> },
        { value: "bi-weekly-manual", label: "Bi-weekly manual reports", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "weekly-manual", label: "Weekly manual reports", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "automated-dashboard", label: "Automated reporting dashboard", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "timeCreatingReports",
      question: "How much time do you spend creating reports per week?",
      options: [
        { value: "over-15", label: "Over 15 hours", icon: <AlertCircle className="w-4 h-4" /> },
        { value: "10-15", label: "10-15 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "5-10", label: "5-10 hours", icon: <Clock className="w-4 h-4" /> },
        { value: "2-5", label: "2-5 hours", icon: <Rocket className="w-4 h-4" /> },
        { value: "under-2", label: "Under 2 hours", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "clientCommunicationManagement",
      question: "How do you manage client communication?",
      options: [
        { value: "ad-hoc", label: "Ad-hoc emails and calls", icon: <MessageSquare className="w-4 h-4" /> },
        { value: "scheduled-checkins", label: "Scheduled check-ins", icon: <Calendar className="w-4 h-4" /> },
        { value: "crm-managed", label: "CRM-managed communication", icon: <Briefcase className="w-4 h-4" /> },
        { value: "automated-updates", label: "Automated status updates", icon: <Bot className="w-4 h-4" /> },
        { value: "proactive-alerts", label: "Proactive communication system", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "accountsPerManager",
      question: "How many accounts does each manager handle?",
      options: [
        { value: "over-60", label: "Over 60 accounts", icon: <AlertCircle className="w-4 h-4" /> },
        { value: "40-60", label: "40-60 accounts", icon: <Clock className="w-4 h-4" /> },
        { value: "20-40", label: "20-40 accounts", icon: <Clock className="w-4 h-4" /> },
        { value: "10-20", label: "10-20 accounts", icon: <Rocket className="w-4 h-4" /> },
        { value: "under-10", label: "Under 10 accounts", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "clientRetentionRate",
      question: "What's your annual client retention rate?",
      options: [
        { value: "under-70", label: "Under 70%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "70-80", label: "70-80%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "80-90", label: "80-90%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "90-95", label: "90-95%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-95", label: "Over 95%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "upsellProcess",
      question: "How do you handle upsells and cross-sells?",
      options: [
        { value: "no-formal", label: "No formal process", icon: <X className="w-4 h-4" /> },
        { value: "opportunistic", label: "Opportunistic conversations", icon: <MessageSquare className="w-4 h-4" /> },
        { value: "scheduled-reviews", label: "Scheduled account reviews", icon: <Calendar className="w-4 h-4" /> },
        { value: "data-driven", label: "Data-driven identification", icon: <Bot className="w-4 h-4" /> },
        { value: "automated-triggers", label: "Automated upsell triggers", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "upsellSuccessRate",
      question: "What's your current upsell success rate?",
      options: [
        { value: "under-10", label: "Under 10%", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "10-20", label: "10-20%", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "20-30", label: "20-30%", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "30-40", label: "30-40%", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-40", label: "Over 40%", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "revenuePerClientGrowth",
      question: "What's your revenue per client growth (year-on-year)?",
      options: [
        { value: "declining", label: "Declining", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "flat-0-5", label: "Flat (0-5% growth)", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "modest-5-15", label: "Modest growth (5-15%)", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "strong-15-30", label: "Strong growth (15-30%)", icon: <Rocket className="w-4 h-4" /> },
        { value: "exceptional-30", label: "Exceptional growth (30%+)", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "annualRevenue",
      question: "What's your annual revenue?",
      options: [
        { value: "under-100k", label: "Under £100K", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "100k-500k", label: "£100K-£500K", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "500k-1m", label: "£500K-£1M", icon: <Briefcase className="w-4 h-4" /> },
        { value: "1m-5m", label: "£1M-£5M", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-5m", label: "Over £5M", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "teamSize",
      question: "How many people are in your team?",
      options: [
        { value: "just-me", label: "Just me", icon: <User className="w-4 h-4" /> },
        { value: "2-5", label: "2-5 people", icon: <User className="w-4 h-4" /> },
        { value: "6-15", label: "6-15 people", icon: <Users className="w-4 h-4" /> },
        { value: "16-30", label: "16-30 people", icon: <Building2 className="w-4 h-4" /> },
        { value: "over-30", label: "Over 30 people", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "averageHourlyRate",
      question: "What's your average hourly rate for team members?",
      options: [
        { value: "under-25", label: "Under £25", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "25-40", label: "£25-£40", icon: <BarChart3 className="w-4 h-4" /> },
        { value: "40-60", label: "£40-£60", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "60-80", label: "£60-£80", icon: <Rocket className="w-4 h-4" /> },
        { value: "over-80", label: "Over £80", icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      id: "primaryBusinessChallenge",
      question: "What's your primary business challenge?",
      options: [
        { value: "not-enough-leads", label: "Not enough leads", icon: <TrendingDown className="w-4 h-4" /> },
        { value: "converting-leads", label: "Converting leads to sales", icon: <Briefcase className="w-4 h-4" /> },
        { value: "delivering-projects", label: "Delivering projects on time", icon: <Clock className="w-4 h-4" /> },
        { value: "retaining-clients", label: "Retaining clients", icon: <RefreshCw className="w-4 h-4" /> },
        { value: "scaling-team", label: "Scaling the team", icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      id: "currentAutomationLevel",
      question: "What's your current automation level?",
      options: [
        { value: "minimal", label: "Minimal automation", icon: <FileText className="w-4 h-4" /> },
        { value: "basic", label: "Basic automation", icon: <Briefcase className="w-4 h-4" /> },
        { value: "moderate", label: "Moderate automation", icon: <Bot className="w-4 h-4" /> },
        { value: "advanced", label: "Advanced automation", icon: <Rocket className="w-4 h-4" /> },
        { value: "highly-automated", label: "Highly automated", icon: <Star className="w-4 h-4" /> }
      ]
    }
  ];

  const totalSteps = questions.length + 1; // +1 for contact form
  const progress = ((currentStep + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function calculateResults() {
    // Calculate scores for each area
    const leadGenerationScore = [
      getScoreForOption(formData.monthlyVisitors, ["under-500", "500-2000", "2000-5000", "5000-10000", "over-10000"]),
      getScoreForOption(formData.currentClientCount, ["under-10", "10-25", "25-50", "50-100", "over-100"]),
      getScoreForOption(formData.monthlyNewClients, ["0-1", "2-3", "4-6", "7-10", "over-10"]),
      getScoreForOption(formData.leadConversionRate, ["under-1", "1-2", "2-4", "4-7", "over-7"]),
      getScoreForOption(formData.timeOnLeadQualification, ["over-20", "10-20", "5-10", "2-5", "under-2"])
    ].reduce((sum, score) => sum + score, 0) / 5;

    const salesScore = [
      getScoreForOption(formData.enquiryToSaleConversion, ["under-10", "10-20", "20-35", "35-50", "over-50"]),
      getScoreForOption(formData.salesCycleLength, ["over-6-months", "3-6-months", "1-3-months", "1-4-weeks", "under-1-week"]),
      getScoreForOption(formData.salesProcessDocumentation, ["no-process", "basic-inconsistent", "documented-some-automation", "fully-documented-crm", "automated-nurture"]),
      getScoreForOption(formData.timeOnSalesActivities, ["over-30", "20-30", "10-20", "5-10", "under-5"])
    ].reduce((sum, score) => sum + score, 0) / 4;

    const onboardingScore = [
      getScoreForOption(formData.onboardingProcess, ["ad-hoc", "basic-emails", "structured-checklist", "automated-workflow", "comprehensive-automated"]),
      getScoreForOption(formData.timeToFullOnboarding, ["over-1-month", "2-4-weeks", "1-2-weeks", "1-3-days", "same-day"]),
      getScoreForOption(formData.clientInformationCollection, ["manual-back-forth", "static-forms", "online-forms-automation", "dynamic-forms", "integrated-portals"]),
      getScoreForOption(formData.onboardingCompletionRate, ["under-60", "65-75", "75-85", "85-95", "over-95"])
    ].reduce((sum, score) => sum + score, 0) / 4;

    const deliveryScore = [
      getScoreForOption(formData.projectManagementSystem, ["email-spreadsheets", "basic-pm-tool", "structured-templates", "automated-workflows", "fully-integrated"]),
      getScoreForOption(formData.projectDeliveryTime, ["20-overrun", "10-20-overrun", "within-10", "always-on-time", "consistently-early"]),
      getScoreForOption(formData.teamUtilisationRate, ["under-60", "60-70", "70-80", "80-90", "over-90"]),
      getScoreForOption(formData.timeOnProjectManagement, ["over-25", "15-25", "8-15", "3-8", "under-3"]),
      getScoreForOption(formData.qualityControlProcess, ["no-formal-qc", "manual-review", "structured-checklists", "automated-checks", "comprehensive-automated"])
    ].reduce((sum, score) => sum + score, 0) / 5;

    const communicationScore = [
      getScoreForOption(formData.clientReportingFrequency, ["no-regular", "monthly-manual", "bi-weekly-manual", "weekly-manual", "automated-dashboard"]),
      getScoreForOption(formData.timeCreatingReports, ["over-15", "10-15", "5-10", "2-5", "under-2"]),
      getScoreForOption(formData.clientCommunicationManagement, ["ad-hoc", "scheduled-checkins", "crm-managed", "automated-updates", "proactive-alerts"]),
      getScoreForOption(formData.accountsPerManager, ["over-60", "40-60", "20-40", "10-20", "under-10"])
    ].reduce((sum, score) => sum + score, 0) / 4;

    const growthScore = [
      getScoreForOption(formData.clientRetentionRate, ["under-70", "70-80", "80-90", "90-95", "over-95"]),
      getScoreForOption(formData.upsellProcess, ["no-formal", "opportunistic", "scheduled-reviews", "data-driven", "automated-triggers"]),
      getScoreForOption(formData.upsellSuccessRate, ["under-10", "10-20", "20-30", "30-40", "over-40"]),
      getScoreForOption(formData.revenuePerClientGrowth, ["declining", "flat-0-5", "modest-5-15", "strong-15-30", "exceptional-30"])
    ].reduce((sum, score) => sum + score, 0) / 4;

    const constraintScores = {
      leadGeneration: leadGenerationScore,
      sales: salesScore,
      onboarding: onboardingScore,
      delivery: deliveryScore,
      communication: communicationScore,
      growth: growthScore
    };

    // Determine primary constraint
    const constraints = [
      { name: "Lead Generation", score: leadGenerationScore },
      { name: "Sales & Conversion", score: salesScore },
      { name: "Client Onboarding", score: onboardingScore },
      { name: "Service Delivery", score: deliveryScore },
      { name: "Communication", score: communicationScore },
      { name: "Account Growth", score: growthScore }
    ];

    const primaryConstraint = constraints.reduce((lowest, current) => 
      current.score < lowest.score ? current : lowest
    ).name;

    // Calculate automation opportunity score (lower scores = higher opportunity)
    const automationOpportunityScore = (leadGenerationScore + salesScore + onboardingScore + deliveryScore + communicationScore + growthScore) / 6;

    // Calculate business impact metrics
    const currentClientCount = getNumericValue(formData.currentClientCount, { "under-10": 5, "10-25": 17, "25-50": 37, "50-100": 75, "over-100": 150 });
    const monthlyNewClients = getNumericValue(formData.monthlyNewClients, { "0-1": 0.5, "2-3": 2.5, "4-6": 5, "7-10": 8.5, "over-10": 12 });
    const annualRevenue = getNumericValue(formData.annualRevenue, { "under-100k": 50000, "100k-500k": 300000, "500k-1m": 750000, "1m-5m": 3000000, "over-5m": 7500000 });
    const teamSize = getNumericValue(formData.teamSize, { "just-me": 1, "2-5": 3.5, "6-15": 10.5, "16-30": 23, "over-30": 40 });
    const averageHourlyRate = getNumericValue(formData.averageHourlyRate, { "under-25": 20, "25-40": 32.5, "40-60": 50, "60-80": 70, "over-80": 90 });

    // Calculate time savings and revenue impact
    const timeSavings = calculateTimeSavings(constraintScores, teamSize, averageHourlyRate);
    const revenueImpact = calculateRevenueImpact(constraintScores, currentClientCount, monthlyNewClients, annualRevenue, teamSize);

    // Determine recommended focus areas
    const recommendedFocusAreas = constraints
      .filter(c => c.score <= 3.0)
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map(c => c.name);

    return {
      primaryConstraint,
      automationOpportunityScore,
      recommendedFocusAreas,
      potentialTimeSavings: Math.round(timeSavings),
      revenueImpactEstimate: Math.round(revenueImpact),
      constraintScores,
      businessMetrics: {
        currentClientCount,
        monthlyNewClients,
        annualRevenue,
        teamSize,
        averageHourlyRate,
        timeSavings,
        revenueImpact
      }
    };
  }

  function getNumericValue(value: string, mapping: { [key: string]: number }): number {
    return mapping[value] || 0;
  }

  function calculateTimeSavings(scores: any, teamSize: number, hourlyRate: number): number {
    let totalHours = 0;
    
    // Lead generation time savings
    if (scores.leadGeneration <= 2.5) {
      totalHours += teamSize * 0.5; // 30 minutes per person per week
    }
    
    // Sales process time savings
    if (scores.sales <= 2.5) {
      totalHours += teamSize * 1; // 1 hour per person per week
    }
    
    // Onboarding time savings
    if (scores.onboarding <= 2.5) {
      totalHours += teamSize * 0.75; // 45 minutes per person per week
    }
    
    // Project delivery time savings
    if (scores.delivery <= 2.5) {
      totalHours += teamSize * 1.5; // 1.5 hours per person per week
    }
    
    // Communication time savings
    if (scores.communication <= 2.5) {
      totalHours += teamSize * 0.5; // 30 minutes per person per week
    }
    
    // Growth activities time savings
    if (scores.growth <= 2.5) {
      totalHours += teamSize * 0.25; // 15 minutes per person per week
    }
    
    return totalHours;
  }

  function calculateRevenueImpact(scores: any, clientCount: number, monthlyNewClients: number, annualRevenue: number, teamSize: number): number {
    let revenueIncrease = 0;
    
    // Lead generation improvements
    if (scores.leadGeneration <= 2.5) {
      const currentConversion = 0.02; // 2% baseline
      const improvedConversion = 0.04; // 4% with automation
      const additionalLeads = monthlyNewClients * 0.3; // 30% more leads
      const additionalRevenue = additionalLeads * (annualRevenue / clientCount) * 12;
      revenueIncrease += additionalRevenue;
    }
    
    // Sales process improvements
    if (scores.sales <= 2.5) {
      const currentConversion = 0.25; // 25% baseline
      const improvedConversion = 0.35; // 35% with automation
      const additionalSales = monthlyNewClients * (improvedConversion - currentConversion);
      const additionalRevenue = additionalSales * (annualRevenue / clientCount) * 12;
      revenueIncrease += additionalRevenue;
    }
    
    // Client retention improvements
    if (scores.growth <= 2.5) {
      const currentRetention = 0.80; // 80% baseline
      const improvedRetention = 0.90; // 90% with automation
      const additionalRetainedClients = clientCount * (improvedRetention - currentRetention);
      const additionalRevenue = additionalRetainedClients * (annualRevenue / clientCount);
      revenueIncrease += additionalRevenue;
    }
    
    // Upsell improvements
    if (scores.growth <= 2.5) {
      const currentUpsellRate = 0.15; // 15% baseline
      const improvedUpsellRate = 0.25; // 25% with automation
      const additionalUpsells = clientCount * (improvedUpsellRate - currentUpsellRate);
      const averageUpsellValue = annualRevenue / clientCount * 0.3; // 30% of current client value
      const additionalRevenue = additionalUpsells * averageUpsellValue;
      revenueIncrease += additionalRevenue;
    }
    
    return revenueIncrease;
  }

  function getScoreForOption(value: string, options: string[]): number {
    const index = options.indexOf(value);
    return index >= 0 ? 5 - index : 3;
  }

  function handleNext() {
    setError("");
    
    if (currentStep < questions.length) {
      // Check if current question is answered
      const currentQuestion = questions[currentStep];
      if (!formData[currentQuestion.id as keyof AssessmentData]) {
        setError("Please select an option to continue");
        return;
      }
      setCurrentStep(currentStep + 1);
    } else if (currentStep === questions.length) {
      // Contact form validation
      if (!formData.name || !formData.email || !formData.phone) {
        setError("Please fill in all required fields");
        return;
      }
      if (!validateEmail(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }
      
      // Calculate results and show results page
      const results = calculateResults();
      
      // Send data to webhook (non-blocking)
      fetch("https://hook.eu2.make.com/a5hl2md5702ppw21jva02m8cboc9nc46", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          results,
          completedAt: new Date().toISOString(),
        }),
      }).catch(() => {}); // Ignore errors
      
      // Show results immediately
      setShowResults(true);
    }
  }

  function handlePrev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleOptionSelect(questionId: string, value: string) {
    setFormData(prev => ({ ...prev, [questionId]: value }));
    setCurrentStep(currentStep + 1);
  }

  // If showing results, render results page
  if (showResults) {
    const results = calculateResults();
    return <AssessmentResults results={results} formData={formData} />;
  }

  // Render assessment funnel
  return (
    <div className="max-w-4xl mx-auto pt-8">
      <div className="flex justify-center mb-8">
        <Logo />
      </div>
      
      <div className="space-y-2 mb-8">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300" 
            style={{ 
              width: `${progress}%`,
              backgroundColor: '#A8FF9E'
            }} 
          />
        </div>
      </div>
      
      <Card className="border border-gray-200 shadow-sm p-8">
        {currentStep < questions.length ? (
          // Question step
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">{questions[currentStep].question}</h3>
              <p className="text-gray-600">Click on the option that best describes your situation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                  className="p-6 text-center border-2 border-gray-200 rounded-lg hover:border-[#A8FF9E] hover:bg-green-50 transition-all duration-200 group h-full"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="text-gray-600 group-hover:text-green-600 transition-colors">
                      {option.icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 group-hover:text-green-800">
                      {option.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={handlePrev} disabled={currentStep === 0}>
                Back
              </Button>
              <div className="w-1/2" />
            </div>
          </div>
        ) : (
          // Contact form step
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">First Name *</Label>
                  <Input 
                    placeholder="Enter your first name" 
                    value={formData.name.split(' ')[0] || ''} 
                    onChange={e => {
                      const lastName = formData.name.split(' ').slice(1).join(' ') || '';
                      setFormData(prev => ({ ...prev, name: `${e.target.value} ${lastName}`.trim() }));
                    }}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last Name *</Label>
                  <Input 
                    placeholder="Enter your last name" 
                    value={formData.name.split(' ').slice(1).join(' ') || ''} 
                    onChange={e => {
                      const firstName = formData.name.split(' ')[0] || '';
                      setFormData(prev => ({ ...prev, name: `${firstName} ${e.target.value}`.trim() }));
                    }}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Work Email *</Label>
                <Input 
                  placeholder="Enter your work email" 
                  value={formData.email} 
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Your Phone Number *</Label>
                <Input 
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>
            </div>
            
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={handlePrev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={handleNext}>
                Get Your Assessment
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

      
