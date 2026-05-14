import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export function RouteChangePreloader() {
    const location = useLocation();
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        // Show preloader on route change
        setIsNavigating(true);

        // Hide preloader after a short delay
        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 600); // Shorter duration for route changes

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isNavigating && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4"
                    >
                        <div className="relative">
                            {/* Spinning ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="w-16 h-16 border-4 border-slate-200 border-t-[#2563EB] rounded-full"
                            />

                            {/* Inner pulsing circle */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute inset-0 m-auto w-8 h-8 bg-[#2563EB] rounded-full"
                            />
                        </div>

                        <p className="text-slate-700 text-sm font-semibold">Loading page...</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
