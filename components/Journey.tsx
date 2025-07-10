'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

const journeyData = [
  {
    id: 'motivation',
    title: 'MOTIVATION',
    subtitle: 'To build something different in the world of AI.',
    description: 'Fueled by curiosity and the desire to innovate, my journey began with a strong belief in the transformative power of Artificial Intelligence. I\'ve always wanted to create technologies that change how we live, learn, and connect.',
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.4)'
  },
  {
    id: 'skills',
    title: 'SKILLS TIMELINE',
    subtitle: 'Growing through hands-on learning, challenges, and global courses.',
    description: 'Started with core programming concepts and Linux fundamentals • Explored AI through the Linux World Summer Internship • Deepened understanding via Google Vertex AI, NLP, Gemini API certifications • Participated in GenAI Events, Hackathons, and Bootcamps • Applied tools like Docker, Git, LangChain, Jenkins, and Streamlit in real projects',
    color: 'from-blue-500 to-purple-500',
    glowColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    id: 'milestones',
    title: 'MAJOR MILESTONES',
    subtitle: 'Recognized learning, real-world builds, and transformative experiences.',
    description: 'Completed Linux World GenAI Internship (45 days) with project delivery • Earned Google Badges in Prompt Engineering, NLP, Gemini, Imagen • Built multi-utility apps like SIP Calculator, Executive Command Center, and CI/CD Pipelines • Developed real-world AI use cases and portfolio-level tools',
    color: 'from-green-500 to-teal-500',
    glowColor: 'rgba(34, 197, 94, 0.4)'
  },
  {
    id: 'challenges',
    title: 'CHALLENGES & GROWTH',
    subtitle: 'Learning from failures — transforming problems into progress.',
    description: 'Facing compatibility issues, debugging live Docker deployments, adapting to new APIs quickly — these tested my patience. But every error was a lesson, and every obstacle made my systems-thinking stronger. I learned to document, collaborate, and solve fast — like a real engineer.',
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.4)'
  },
  {
    id: 'current',
    title: 'CURRENT FOCUS',
    subtitle: 'Deep-diving into GenAI, DevOps automation, and AI agent development.',
    description: 'Exploring Agentic AI workflows with LLMs • Mastering integration between GenAI models and real-time interfaces • Automating backend workflows with CI/CD, Docker, and Jenkins • Creating self-aware AI assistants using Google Gemini and LangChain',
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.4)'
  },
  {
    id: 'future',
    title: 'FUTURE VISION',
    subtitle: 'To launch a next-gen tech company — at the intersection of AI, innovation, and impact.',
    description: 'My long-term goal is to become a master in AI and start a tech company that solves real-world human problems using intelligent systems. I want to lead a team, mentor talent, and contribute to open-source. Entrepreneurship is my next frontier — powered by purpose.',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.4)'
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={containerRef} className="relative py-20 px-4 overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold section-title mb-4">
            MY JOURNEY
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              IN AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Curiosity to Innovation — Driven by Purpose, Shaped by Learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Spine */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-700 transform -translate-x-1/2" />
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 shadow-lg"
            style={{
              height: timelineHeight,
              opacity: timelineOpacity,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
            }}
          />
          
          <div className="space-y-32">
            {journeyData.map((item, index) => {
              const [itemRef, itemInView] = useInView({
                triggerOnce: false,
                threshold: 0.3,
              });

              return (
                <motion.div
                  key={item.id}
                  ref={itemRef}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ 
                    duration: 0.1, 
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`relative flex items-center min-h-[80vh] ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <motion.div
                      className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-500 group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={{ 
                        scale: 1.02,
                        y: -10,
                      }}
                      style={{
                        boxShadow: hoveredItem === item.id ? `0 20px 60px ${item.glowColor}` : 'none'
                      }}
                    >
                      {/* Animated background gradient */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl transition-opacity duration-500 ${
                          hoveredItem === item.id ? 'opacity-20' : ''
                        }`}
                      />
                      
                      {/* Ambient light effect */}
                      <div 
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-500 rounded-t-2xl ${
                          hoveredItem === item.id ? 'opacity-80' : ''
                        }`}
                      />

                      <div className="relative z-10">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold mb-3 font-space-grotesk text-white relative group/title"
                          whileHover={{ x: 5 }}
                        >
                          {item.title}
                          <motion.div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} origin-left`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.h3>
                        
                        <p className={`text-lg mb-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-medium`}>
                          {item.subtitle}
                        </p>
                        
                        <div className="text-gray-300 leading-relaxed">
                          {item.description.split(' • ').map((point, i) => (
                            <motion.p 
                              key={i}
                              className="mb-3 flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={itemInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                              <span>{point}</span>
                            </motion.p>
                          ))}
                        </div>
                      </div>

                      {/* Floating particles on hover */}
                      {hoveredItem === item.id && (
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                              initial={{ 
                                x: Math.random() * 100 + '%', 
                                y: '100%',
                                opacity: 0 
                              }}
                              animate={{ 
                                y: '-10%',
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                delay: i * 0.3,
                                repeat: Infinity,
                                ease: 'easeOut'
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 w-8 h-8 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-20"
                    style={{
                      background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                      boxShadow: itemInView ? `0 0 30px ${item.glowColor}` : 'none'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={itemInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.3 }}
                  >
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400"
                      animate={itemInView ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 0, 0.8]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <div className="w-full md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}