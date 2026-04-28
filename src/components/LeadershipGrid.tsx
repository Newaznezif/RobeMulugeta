"use client";

import { motion } from "framer-motion";
import { Users, Mic, TreePine, Megaphone } from "lucide-react";

const advocacy = [
  {
    title: "Youth Advocacy",
    desc: "Empowering the next generation of African leaders through digital literacy and civic engagement programs.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Public Speaking",
    desc: "Keynote speaker at national and international forums on EdTech, AI, and youth leadership.",
    icon: Mic,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Climate Engagement",
    desc: "Integrating sustainability and climate awareness into digital education platforms.",
    icon: TreePine,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Digital Innovation",
    desc: "Advocating for policy changes to accelerate digital transformation in Ethiopian schools.",
    icon: Megaphone,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function LeadershipGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Advocacy & Impact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Leadership & Speaking</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advocacy.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
