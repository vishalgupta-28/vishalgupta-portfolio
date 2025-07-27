"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import FloatingDockDemo from "@/components/floating-dock-demo";
import LoaderOneDemo from "@/components/loader-one-demo";

export const PortfolioPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoaderOneDemo />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full bg-black relative"
          >
            {/* Dark White Dotted Grid Background */}
            <div
              className="fixed inset-0 z-0"
              style={{
                background: "#000000",
                backgroundImage: `
                  radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
                `,
                backgroundSize: "30px 30px",
                backgroundPosition: "0 0",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <section id="hero">
                <Hero />
              </section>
              
              <section id="about">
                <About />
              </section>
              
              <section id="experience">
                <Experience />
              </section>
              
              <section id="projects">
                <Projects />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </div>

            {/* Floating Navigation */}
            <FloatingDockDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};