"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "President",
    company: "Access Alumni Association Ethiopia",
    period: "2023 - Present",
    location: "Addis Ababa",
    description: "Leading the national alumni association, managing strategic partnerships and youth empowerment initiatives.",
    skills: ["Leadership", "Strategy", "Public Speaking"],
  },
  {
    role: "Project Manager",
    company: "UNAET AU",
    period: "2022 - 2023",
    location: "Addis Ababa",
    description: "Managed projects focused on African Union initiatives and youth engagement in international diplomacy.",
    skills: ["Project Management", "Diplomacy", "Coordination"],
  },
  {
    role: "Founder",
    company: "Free Education Ethiopia",
    period: "2018 - Present",
    location: "Addis Ababa",
    description: "Building and scaling a digital education platform that reached over 150,000 students across Ethiopia.",
    skills: ["Entrepreneurship", "EdTech", "AI Systems"],
  },
  {
    role: "Counselor",
    company: "She Can STEM",
    period: "2021 - 2022",
    location: "Addis Ababa",
    description: "Advocating for women in STEM fields and providing mentorship for aspiring female technologists.",
    skills: ["Mentorship", "STEM Advocacy", "Education"],
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Leadership & Experience</h3>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="p-8 glass-morphism rounded-3xl hover:border-primary/30 transition-all group"
                  >
                    <motion.div variants={itemVariants} className="flex items-center gap-2 text-primary text-sm font-bold mb-3 uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </motion.div>
                    <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</motion.h4>
                    <motion.p variants={itemVariants} className="text-lg text-foreground/80 font-medium mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      {exp.company}
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-foreground/60 mb-6 leading-relaxed">
                      {exp.description}
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-foreground/70">
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
