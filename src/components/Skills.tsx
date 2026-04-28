"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "AI Systems", level: 90, category: "Technical" },
  { name: "Full-Stack Dev", level: 85, category: "Technical" },
  { name: "Cloud Architecture", level: 80, category: "Technical" },
  { name: "Data Science", level: 75, category: "Technical" },
  { name: "Strategic Leadership", level: 95, category: "Professional" },
  { name: "Project Management", level: 92, category: "Professional" },
  { name: "Public Speaking", level: 98, category: "Professional" },
  { name: "Youth Advocacy", level: 96, category: "Professional" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Expertise & Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {["Technical", "Professional"].map((cat) => (
            <div key={cat}>
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {cat} Skills
              </h4>
              <div className="space-y-8">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary relative"
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[pulse_2s_linear_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
