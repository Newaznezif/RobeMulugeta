"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";

export default function Booking() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-morphism rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/5">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Collaborate</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Book a Strategy <span className="text-gradient">Session</span>
              </h3>
              <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                Looking for advice on digital education, AI integration, or youth leadership? 
                Reserve a 30-minute virtual session to discuss your vision and explore synergies.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Video, text: "30 Min Virtual Meeting" },
                  { icon: Clock, text: "Available Mon - Fri" },
                  { icon: Calendar, text: "Sync via Google Calendar" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-foreground/80">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-6">Select a Topic</h4>
                <div className="space-y-4 mb-8">
                  {["EdTech Strategy", "AI Implementation", "Youth Mentorship", "Speaking Inquiry"].map((topic) => (
                    <button
                      key={topic}
                      className="w-full text-left px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all flex justify-between items-center group"
                    >
                      <span className="font-semibold">{topic}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
                <button className="w-full py-5 bg-white text-black rounded-2xl font-bold hover:bg-foreground/10 transition-all">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
