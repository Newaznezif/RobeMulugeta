"use client";

import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Zap } from "lucide-react";

const programs = [
  {
    name: "YALI Regional Leadership Center",
    location: "Kenya",
    description: "Young African Leaders Initiative - intensive leadership training focused on civic leadership and social innovation.",
    icon: Star,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "PAYLP Exchange Program",
    location: "USA",
    description: "Pan-African Youth Leadership Program - selected by the U.S. Department of State for leadership development in the United States.",
    icon: Award,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "U.S. Exchange Alumni",
    location: "Global",
    description: "Active member of the U.S. Exchange Alumni network, collaborating on international youth development projects.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "English Access Program",
    location: "Ethiopia",
    description: "Graduated with honors from the English Access Microscholarship Program supported by the U.S. Embassy.",
    icon: Zap,
    color: "from-purple-500 to-violet-600",
  },
];

export default function GlobalPrograms() {
  return (
    <section className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">International Exposure</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Global Programs & Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] glass border border-white/5 hover:border-primary/20 transition-all flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{program.location}</p>
              <h4 className="text-xl font-bold mb-4">{program.name}</h4>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
