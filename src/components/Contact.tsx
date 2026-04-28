"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Code, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Let's Build the <span className="text-gradient">Future</span> Together
              </h3>
              <p className="text-lg text-foreground/60 mb-12 max-w-md">
                Interested in collaborating on EdTech projects, youth programs, or AI solutions? Drop me a message.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "robestmulugeta12@gmail.com", href: "mailto:robestmulugeta12@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+251 993 479 783", href: "tel:+251993479783" },
                  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                {[LinkIcon, Globe, Code].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 md:p-12 rounded-[2.5rem]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Subject</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Collaboration / Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Share your project vision or questions..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/80 transition-all neon-glow disabled:opacity-50"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                  {status === "sending" && <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
                  {status === "success" && "Message Sent!"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
