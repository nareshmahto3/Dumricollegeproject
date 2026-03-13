import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
        >
          {/* Animated Background Shapes */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [-50, 50, -50],
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            />
          </div>

          {/* Loader Content */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="mb-8"
            >
              <div className="relative">
                {/* Pulsing Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-32 h-32 mx-auto bg-blue-400/20 rounded-full"
                />
                
                {/* Logo Container */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-4 border-blue-400/40 shadow-2xl p-3"
                >
                  <img src={logoImage} alt="Dumri College" className="w-full h-full object-contain" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">Jharkhand Commerce Inter College</h1>
              <p className="text-blue-200 text-lg mb-8 font-medium">Empowering Minds, Shaping Futures</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 shadow-lg"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-100 text-sm mt-3 font-medium"
              >
                {progress}%
              </motion.p>
            </div>

            {/* Loading Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 bg-blue-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}