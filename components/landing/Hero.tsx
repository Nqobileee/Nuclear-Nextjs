'use client';

import { ArrowRight, Menu } from 'lucide-react';

export interface HeroProps {
  onOpenLogin: () => void;
}

export function Hero({ onOpenLogin }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="font-heading text-lg">NuclearFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Platform</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Company</a>
        </div>
        <button 
          onClick={onOpenLogin}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get Started
        </button>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary">✨ Next-Gen Medical Logistics Platform</span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            Revolutionizing<br />
            <span className="text-primary">
              Nuclear Medicine
            </span><br />
            Logistics
          </h1>
          
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Real-time tracking, automated compliance, and intelligent routing for radiopharmaceutical delivery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenLogin}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-card text-foreground px-8 py-4 rounded-full hover:bg-card/80 transition-all border border-border">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>
  );
}
