'use client';

import { ArrowRight, Check } from 'lucide-react';

export interface FinalCTAProps {
  onOpenLogin: () => void;
}

export function FinalCTA({ onOpenLogin }: FinalCTAProps) {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-6xl mb-6">
            Ready to transform your logistics?
          </h2>
          <p className="text-xl mb-12 text-white/80">
            Join leading medical facilities using NuclearFlow to ensure safe, compliant, and efficient radiopharmaceutical delivery.
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Free 30-day trial',
              'No credit card required',
              'Setup in under 10 minutes'
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-lg">
                <Check className="w-5 h-5 text-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={onOpenLogin}
              className="bg-accent text-accent-foreground px-10 py-5 rounded-full hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent text-white px-10 py-5 rounded-full border-2 border-white hover:bg-white/10 transition-all text-lg">
              Schedule Demo
            </button>
          </div>

          {/* Trust Badges */}
          <p className="text-sm text-white/70">
            Trusted by 500+ medical facilities worldwide
          </p>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
