'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingMessages = [
    "Initializing Intelligence...",
    "Crafting the Future...",
    "Powering up Sahil's AI Lab...",
    "Loading Neural Networks...",
    "Ready to Innovate..."
  ];

  useEffect(() => {
    const duration = 3500; // 3.5 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Delay before fade out
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Message rotation
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, 700);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-950/20 via-black to-black" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Digital grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Main loading content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Central glowing orb */}
          <div className="relative mb-12">
            {/* Outer pulsing ring */}
            <motion.div
              className="absolute inset-0 w-32 h-32 rounded-full border-2 border-purple-500/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Middle ring */}
            <motion.div
              className="absolute inset-2 w-28 h-28 rounded-full border border-purple-400/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />

            {/* Core orb */}
            <motion.div
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 shadow-2xl"
              style={{
                boxShadow: `
                  0 0 50px rgba(168, 85, 247, 0.6),
                  0 0 100px rgba(168, 85, 247, 0.4),
                  inset 0 0 50px rgba(255, 255, 255, 0.1)
                `,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Rotating inner elements */}
              <motion.div
                className="absolute inset-6 rounded-full border border-white/20"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${40 + i * 10}px 0`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Progress ring */}
          <div className="relative w-24 h-24 mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(168, 85, 247, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                animate={{ 
                  strokeDashoffset: 2 * Math.PI * 45 * (1 - progress / 100)
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="50%" stopColor="#913dff" />
                  <stop offset="100%" stopColor="#280959" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Progress percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-lg font-bold text-purple-300"
                key={Math.floor(progress)}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {Math.floor(progress)}%
              </motion.span>
            </div>
          </div>

          {/* Loading message */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-space-grotesk">
                {loadingMessages[currentMessage]}
              </h2>
              <div className="flex justify-center items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Logo/Initials */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold font-space-grotesk bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 30px rgba(168, 85, 247, 0.8)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SS
            </motion.h1>
            <motion.p
              className="text-sm text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Innovation takes time. Precision is loading...
            </motion.p>
          </motion.div>
        </div>

        {/* Completion animation */}
        {isComplete && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}