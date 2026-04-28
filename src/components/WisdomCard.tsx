"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function WisdomCard() {
  const [quote, setQuote] = useState<{ q: string; a: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/api/wisdom");
        const data = await response.json();
        if (data) {
          setQuote(data);
        }
      } catch (error) {
        console.error("Failed to fetch quote:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading || !quote) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 glass p-6 rounded-2xl max-w-lg mx-auto border border-primary/20 relative"
    >
      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary opacity-50" />
      <p className="italic text-foreground/80 mb-3 text-sm leading-relaxed">
        "{quote.q}"
      </p>
      <p className="text-xs font-bold text-primary uppercase tracking-widest text-right">
        — {quote.a}
      </p>
    </motion.div>
  );
}
