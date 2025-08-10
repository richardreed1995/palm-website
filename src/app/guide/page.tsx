"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Download } from "lucide-react";

export default function GuidePage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = async () => {
    setError("");
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    // Send data to webhook
    try {
      await fetch("https://hook.eu2.make.com/q4rgjgr87tnfr9aa6478q1206yhggi4z", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "guide-download",
          completedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      // Fail silently
    }

    // Show success message instead of triggering download
    setIsSubmitted(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Download Our 12 Free B2B Operations Trainings
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Get instant access to our trainings on how to build a productised B2B service business.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            {!isSubmitted ? (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium text-foreground mb-2 block">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="text-lg p-4 h-14 border-2 focus:ring-4 focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                    />
                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    onClick={handleEmailSubmit}
                    className="w-full text-lg py-4 h-14 bg-[#A8FF9E] text-black hover:bg-[#A8FF9E]/90 font-semibold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get Free Trainings
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#A8FF9E] mb-4">
                    <Download className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Check Your Email!</h2>
                  <p className="text-base text-muted-foreground mb-6">
                    We've sent the download link for your 12 Free B2B Growth Trainings to your email address. Check your inbox (and spam folder) for instant access to these valuable resources.
                  </p>
                  <Button 
                    asChild
                    className="bg-[#A8FF9E] text-black hover:bg-[#A8FF9E]/90 font-semibold"
                  >
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 