"use client";

import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/comet-card";

export const About = () => {
  const skills = [
    { category: "Frontend", items: ["Next.js", "React.js", "Redux", "Zustand", "Shadcn", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Prisma", "Next.js API"] },
    { category: "AI & ML", items: ["LangChain.js", "LangGraph", "Hugging Face", "Vector DB"] },
    { category: "Tools", items: ["Docker", "WebSockets", "WebRTC", "Turbo-Repo"] }
  ];

  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Frontend Developer with 2+ years of experience in building modern web applications. 
            Currently pursuing B.Tech in Computer Science Engineering with a focus on AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CometCard>
              <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Currently working as a Frontend Developer at MAKUNAI GLOBAL TECHNOLOGIES, 
                    where I've contributed to increasing user engagement by 15% through innovative 
                    dashboard implementations.
                  </p>
                  <p>
                    My expertise lies in React ecosystem, with a strong focus on TypeScript, 
                    state management, and modern UI libraries. I'm passionate about creating 
                    seamless user experiences that make a difference.
                  </p>
                  <p>
                    Beyond frontend development, I'm deeply interested in AI integration, 
                    having built several AI-powered applications using LangChain and vector databases.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    B.Tech CSE Student
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    CGPA: 7.1/10
                  </span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    2+ Years Experience
                  </span>
                </div>
              </div>
            </CometCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-lg font-semibold text-purple-300 mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};