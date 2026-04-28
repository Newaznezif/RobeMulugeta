"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in African Classrooms",
    date: "April 24, 2026",
    category: "EdTech",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Scaling a Digital Platform to 150K Students",
    date: "March 12, 2026",
    category: "Growth",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Leadership Lessons from YALI & PAYLP",
    date: "February 05, 2026",
    category: "Leadership",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient">Thought Leadership</h3>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline transition-all mt-6 md:mt-0">
            View All Posts <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 glass border border-white/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 rounded-full glass-morphism text-[10px] font-bold text-primary uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-xs font-medium text-foreground/40 mb-3 flex justify-between">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </p>
              <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
