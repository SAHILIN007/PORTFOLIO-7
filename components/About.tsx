'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-indigo-900/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold section-title">
            Building the
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              Future of AI
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an AI enthusiast on a mission to turn imagination into innovation. While I'm just starting out in this field, my curiosity for how intelligence can be built and scaled digitally drives everything I do.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              From language models to creative automation, I'm passionate about exploring how AI can solve human problems, unlock potential, and shape a smarter future. I believe learning by building is the best way to grow — and I'm here to do exactly that.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-medium italic">
              "I'm not waiting for the future. I'm building it — one AI project at a time."
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-gradient-purple-dark border border-purple-500/30 rounded-full text-sm">
                🤖 Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-purple-dark border border-purple-500/30 rounded-full text-sm">
                🧠 Deep Learning
              </span>
              <span className="px-4 py-2 bg-gradient-purple-dark border border-purple-500/30 rounded-full text-sm">
                💬 NLP
              </span>
              <span className="px-4 py-2 bg-gradient-purple-dark border border-purple-500/30 rounded-full text-sm">
                🔮 Generative AI
              </span>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-purple-dark rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl" />
              <div className="relative z-10">
                {/* <div className="w-32 h-32 bg-gradient-purple rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  <img src="https://ik.imagekit.io/cwwwpfw59/WhatsApp%20Image%202025-07-08%20at%2012.05.25_d85e4208.jpg?updatedAt=1752130412811" alt=""/> 
                </div> */}
                <div className="w-32 h-32 bg-gradient-purple rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  <b>AI</b>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Sahil Singh</h3>
                <p className="text-gray-300 text-center mb-6">
                  AI is not the future — it's the tool we use to create it.
                </p>
                {/* <div className="text-center mb-6">
                  <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Envision. Execute. Evolve.
                  </p>
                </div> */}
                <div className="flex justify-center gap-4">
                  {/* <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">AI Enthusiast</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">AI Expert</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Innovation</span> */}
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Envision</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Execute</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Evolve</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}