"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Globe, Code, Link as LinkIcon } from "lucide-react";
import ThreeBackground from "./three/Background";
import WisdomCard from "./WisdomCard";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="mb-6">
            <span className="px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              Available for Global Collaboration
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-display font-bold leading-tight mb-6"
          >
            Building Africa’s <br />
            <span className="text-gradient">Digital Education</span> Future
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-foreground/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Founder of a 150,000+ student platform | Tech Leader | Youth Advocate
            dedicated to empowering the next generation through innovation.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary/80 transition-all neon-glow"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => window.open("/cv.pdf", "_blank")}
              className="px-8 py-4 glass border border-white/10 text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex items-center justify-center gap-6"
          >
            {[
              { icon: LinkIcon, href: "#" },
              { icon: Globe, href: "#" },
              { icon: Code, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <WisdomCard />
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
