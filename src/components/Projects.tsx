"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, MessageSquare, Users, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Free Education Ethiopia",
    category: "EdTech Platform",
    description: "A comprehensive digital education platform reaching 150,000+ students. Features include AI-driven content recommendations and localized learning materials.",
    image: "/assets/project-fee.png",
    stats: [
      { label: "Users", value: "150K+", icon: Users },
      { label: "Content", value: "5000+", icon: Globe },
      { label: "Chatbot", value: "AI-Powered", icon: MessageSquare },
    ],
    links: {
      live: "#",
      github: "#",
    },
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "AI Recruitment Assistant",
    category: "AI / Automation",
    description: "An intelligent system designed to streamline recruitment processes using NLP and automated ranking algorithms.",
    image: "/assets/project-ai.png",
    stats: [
      { label: "Accuracy", value: "94%", icon: Users },
      { label: "Tech", value: "Python/OpenAI", icon: Globe },
    ],
    links: {
      live: "#",
      github: "#",
    },
    color: "from-purple-600 to-pink-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Impact</h3>
          </div>
          <p className="text-foreground/50 max-w-md text-right hidden md:block">
            Innovative solutions at the intersection of technology and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[2.5rem] overflow-hidden glass border border-white/10"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h4 className="text-3xl font-bold mt-4 mb-2">{project.title}</h4>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.links.github} className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                      <Code className="w-5 h-5" />
                    </a>
                    <a href={project.links.live} className="p-3 rounded-full bg-primary text-white neon-glow hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <stat.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-lg font-bold">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-tighter text-foreground/40">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden glass">
                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-white/20 text-4xl font-bold uppercase tracking-[1em]">PREVIEW</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
