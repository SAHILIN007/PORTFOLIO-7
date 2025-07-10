'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'CI/CD Pipeline Automation',
    description: 'A beginner-friendly DevOps setup using Docker, Jenkins, and GitHub. Automates container builds and deployments — demonstrating core CI/CD principles.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Docker', 'Jenkins', 'GitHub', 'CI/CD', 'DevOps'],
    github: 'https://github.com/SAHILIN007/devops_project_1.git',
    live: '#',
    featured: true,
    status: 'Live',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'SIP Calculator — SIPSense',
    description: 'Smart SIP forecasting app created during Linux World Internship 2025. Offers goal tracking and investment visuals for better financial planning.',
    image: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Streamlit', 'Financial Modeling', 'Data Visualization', 'Linux World'],
    github: 'https://github.com/SAHILIN007/SIP_CALCULATOR.git',
    live: '#',
    featured: true,

    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Executive Command Center',
    description: 'Luxury-themed FinTech dashboard built under Vimal Daga Sir\'s mentorship. Features secure messaging, live market data, and trading communities in a single sleek platform.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['FinTech', 'Dashboard', 'Real-time Data', 'Secure Messaging', 'Trading'],
    github: 'https://github.com/SAHILIN007/EXECUTIVE-COMMAND-CENTER.git',
    live: '#',
    featured: true,
    status: 'Coming Soon',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
            Portfolio
          </span>
          <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold section-title">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all duration-500 overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                }}
                style={{
                  boxShadow: hoveredProject === index ? '0 20px 60px rgba(168, 85, 247, 0.3)' : 'none'
                }}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {/* <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </span> */}
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-purple-900/80 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Animated gradient line */}
                  <div 
                    className={`w-full h-0.5 bg-gradient-to-r ${project.color} mb-4 opacity-60 transition-opacity duration-500 ${
                      hoveredProject === index ? 'opacity-100' : ''
                    }`}
                  />

                  <motion.h3 
                    className="text-xl font-bold mb-3 font-space-grotesk text-white"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(168, 85, 247, 0.3)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.status === 'Live' ? 'Live Demo' : 'Coming Soon'}
                    </motion.a>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full`}
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
                          duration: 2.5,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/SAHILIN007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-purple text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}