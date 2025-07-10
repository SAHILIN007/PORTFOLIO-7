'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';

const skillDomains = [
  {
    domain: 'Frontend',
    icon: '🖥️',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.3)'
  },
  {
    domain: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'Flask'],
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.3)'
  },
  {
    domain: 'Security & OS',
    icon: '🛡️',
    skills: ['Linux (RHEL 9)', 'Docker', 'Bash'],
    color: 'from-red-500 to-orange-500',
    glowColor: 'rgba(239, 68, 68, 0.3)'
  },
  {
    domain: 'AI & ML Tools',
    icon: '🤖',
    skills: ['Jenkins', 'Git & GitHub', 'LangChain', 'Kubernetes', 'Streamlit'],
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.3)'
  },
  {
    domain: 'Google Badge – Prompt Design',
    icon: '🎓',
    skills: ['AI', 'Gemini API', 'Prompt Engineering', 'Vertex AI'],
    color: 'from-yellow-500 to-amber-500',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  {
    domain: 'Google Badge – Gemini & Imagen',
    icon: '🧠',
    skills: ['Gemini', 'Imagen', 'NLP', 'Vertex AI'],
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.3)'
  },
  {
    domain: 'Generative AI Tools & Agentic AI',
    icon: '🚀',
    skills: ['AI Agents', 'GenAI Systems'],
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.3)'
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    setHoveredCard(null);
  };

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold section-title">
            Skills &
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.domain}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Glassmorphism card */}
              <div className="relative h-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                {/* Animated background gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-20' : ''
                  }`}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                  style={{
                    boxShadow: hoveredCard === index ? `0 0 40px ${domain.glowColor}` : 'none',
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                />

                {/* Floating particles effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${domain.color} rounded-full`}
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
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Domain header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`text-3xl p-2 rounded-xl bg-gradient-to-r ${domain.color} bg-opacity-20`}>
                      {domain.icon}
                    </div>
                    <h3 className="font-space-grotesk text-lg font-bold text-white leading-tight">
                      {domain.domain}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {domain.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.color} transition-all duration-300 ${
                            hoveredCard === index ? 'scale-125 shadow-lg' : ''
                          }`}
                          style={{
                            boxShadow: hoveredCard === index ? `0 0 10px ${domain.glowColor}` : 'none'
                          }}
                        />
                        <span className={`text-sm text-gray-300 transition-colors duration-300 ${
                          hoveredCard === index ? 'text-white' : ''
                        }`}>
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill count indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {domain.skills.length} Skills
                      </span>
                      <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${domain.color} opacity-60`} />
                    </div>
                  </div>
                </div>

                {/* Ambient light effect */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${domain.color} opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-60' : ''
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-purple-dark border border-purple-500/20 rounded-full">
            <span className="text-sm text-gray-300">Continuously learning and evolving</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}