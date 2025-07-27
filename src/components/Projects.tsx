"use client";

import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/comet-card";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "LinkCrate",
      description: "A full-stack platform with AI capabilities using Next.js, Node.js, LangChain, vector DB, and Gemini, attracting over 100 active users within 3 months.",
      features: [
        "Secure authentication using NextAuth and JWT",
        "Chrome Extension with React.js for AI-powered link saving",
        "Drizzle ORM for reliable data storage",
        "25% increase in user productivity"
      ],
      tech: ["Next.js", "Node.js", "LangChain", "Vector DB", "Chrome Extension"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "PromptlyAI",
      description: "An AI-powered tool that generates tailored prompts based on user input and past conversation context using memory and vector embeddings.",
      features: [
        "Dual modes: Normal and CodeCraft for coding prompts",
        "Clerk authentication with persistent chat history",
        "30% improvement in context handling",
        "20% increase in user satisfaction"
      ],
      tech: ["React", "Clerk", "Vector Embeddings", "AI", "Context Memory"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "DomainInventor",
      description: "An AI tool that generates domain name suggestions based on business prompts and user intent, boosting conversion rates by 15%.",
      features: [
        "RAG with PDF-based vector search",
        "25% improvement in suggestion relevance",
        "Built with Node.js, LangChain.js, and Gemini",
        "Intelligent business prompt analysis"
      ],
      tech: ["Node.js", "LangChain.js", "Gemini", "RAG", "Vector Search"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "VO.3",
      description: "A website builder using Next.js, Node.js, Anthropic, and WebContainers, enabling AI-driven website generation and reducing development time by 40%.",
      features: [
        "WebContainers for in-browser compilation",
        "AI-generated structured folder hierarchy",
        "Live previews with 40% faster preview time",
        "30% improvement in code management efficiency"
      ],
      tech: ["Next.js", "Node.js", "Anthropic", "WebContainers", "AI"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, from AI-powered applications to full-stack platforms that make a real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CometCard>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View Project
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};