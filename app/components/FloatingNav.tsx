"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items: NavItem[];
}

export default function FloatingNav({ items }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-md bg-white/10 dark:bg-gray-900/60 px-6 py-3 rounded-full border border-gray-200/20 shadow-lg"
    >
      <ul className="flex items-center gap-2 sm:gap-6">
        {items.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative px-3 py-2 text-sm transition-colors"
              >
                <motion.span
                  className={`relative z-10 ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-0 bg-white dark:bg-gray-800 rounded-full mix-blend-difference"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
