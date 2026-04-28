"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Globe, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] p-[2px] overflow-hidden group">
              {/* Snake light animated border */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,var(--primary)_100%)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner card content */}
              <div className="relative w-full h-full rounded-[calc(2rem-2px)] overflow-hidden glass bg-background z-10">
                <Image
                  src="/assets/portrait.jpg"
                  alt="Robe Mulugeta"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl">
                  <p className="text-sm font-medium text-primary mb-1 uppercase tracking-widest">Current Focus</p>
                  <p className="text-lg font-semibold text-white">Scaling Digital Education across East Africa</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative blur */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">My Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Pioneering Change Through <br />
              <span className="text-gradient">Technology & Education</span>
            </h3>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Results-driven Computer Science graduate with leadership across education, AI systems, and international programs. 
              As the founder of a platform reaching 150,000+ users, I bridge the gap between complex technology and accessible learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Tech Leader",
                  desc: "Computer Science background with a focus on AI systems.",
                },
                {
                  icon: Globe,
                  title: "Global Partner",
                  desc: "Exchange alumni with Paylp (USA) and YALI (Kenya).",
                },
                {
                  icon: Lightbulb,
                  title: "Youth Advocate",
                  desc: "Empowering youth through digital literacy and leadership.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovator",
                  desc: "Building scalable digital solutions for education.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
