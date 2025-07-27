"use client";

import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/comet-card";
import { MapPin, Calendar, Building } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-xl text-gray-300">
            My professional journey in frontend development and technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CometCard>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                    <h4 className="text-lg text-purple-300 mb-3">MAKUNAI GLOBAL TECHNOLOGIES</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        March 2025 - April 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Noida, India
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>
                            Developed and integrated new features, such as interactive dashboards, 
                            resulting in a <span className="text-purple-300 font-semibold">15% increase in user engagement</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>
                            Centralized state management using Redux Toolkit, reducing state-related bugs by 
                            <span className="text-purple-300 font-semibold"> 60%</span> and improving code maintainability by 
                            <span className="text-purple-300 font-semibold"> 25%</span>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>
                            Led the UI revamp based on Figma designs, contributing to a 
                            <span className="text-purple-300 font-semibold"> 20% increase in user satisfaction</span>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies & Tools:</h5>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "TailwindCSS", "Shadcn", "Figma", "Jira", "Redux", "Postman"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CometCard>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
          <CometCard>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-blue-300 mb-2">RD Engineering College, Ghaziabad</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Nov 2022 - Aug 2026
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-4 flex items-center justify-center">📊</span>
                      CGPA: 7.1/10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CometCard>
        </motion.div>
      </div>
    </section>
  );
};