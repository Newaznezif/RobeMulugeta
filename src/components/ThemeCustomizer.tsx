"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Sun, Moon, Palette, X } from "lucide-react";

const themes = [
  { name: "Deep Sea", primary: "#3b82f6", secondary: "#8b5cf6", accent: "#22d3ee" },
  { name: "Cyberpunk", primary: "#ff00ff", secondary: "#7000ff", accent: "#00ffff" },
  { name: "Emerald", primary: "#10b981", secondary: "#3b82f6", accent: "#34d399" },
  { name: "Sunset", primary: "#f59e0b", secondary: "#ef4444", accent: "#fbbf24" },
  { name: "Monochrome", primary: "#ffffff", secondary: "#64748b", accent: "#94a3b8" },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  const applyColors = (colors: typeof themes[0]) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--accent", colors.accent);
  };

  return (
    <div className="fixed left-6 bottom-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="mb-4 p-6 glass-morphism rounded-3xl w-64 shadow-2xl border border-primary/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Palette className="w-4 h-4 text-primary" />
                Theme Customizer
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-foreground/40 hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Mode Toggle */}
              <div>
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">Mode</p>
                <button
                  onClick={toggleTheme}
                  className="w-full py-2 glass rounded-xl flex items-center justify-center gap-2 hover:border-primary/50 transition-all"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>

              {/* Color Presets */}
              <div>
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">Presets</p>
                <div className="grid grid-cols-1 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => applyColors(t)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all group"
                    >
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.primary }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.secondary }} />
                      </div>
                      <span className="text-xs font-medium group-hover:text-primary">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/5 glass rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-xl"
      >
        <Settings className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
