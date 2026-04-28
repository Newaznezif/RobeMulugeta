"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metrics = [
  { label: "Students Reached", value: 150000, suffix: "+" },
  { label: "International Programs", value: 5, suffix: "+" },
  { label: "Years Leadership", value: 6, suffix: "+" },
  { label: "Community Impact", value: 100, suffix: "%" },
];

export default function ImpactMetrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 glass-morphism rounded-3xl"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {inView ? (
                  <CountUp end={metric.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {metric.suffix}
              </h3>
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
