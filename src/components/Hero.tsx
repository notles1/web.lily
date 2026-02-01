import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, Download, ChevronRight, ArrowDown } from 'lucide-react';

export const Hero = () => {
    const { cycleTheme } = useTheme();
    const [tapCount, setTapCount] = useState(0);
    const lastTapTime = useRef(0);
    const [showToast, setShowToast] = useState<{ visible: boolean; title: string, message: string }>({ visible: false, title: '', message: '' });

    const handleIconTap = () => {
        const now = Date.now();
        if (now - lastTapTime.current > 500) {
            setTapCount(1);
        } else {
            const newCount = tapCount + 1;
            setTapCount(newCount);

            if (newCount === 5) {
                const newTheme = cycleTheme();
                setShowToast({
                    visible: true,
                    title: `${newTheme.name} Mode`,
                    message: newTheme.description
                });

                setTapCount(0);
                setTimeout(() => setShowToast({ visible: false, title: '', message: '' }), 2000);
            }
        }
        lastTapTime.current = now;
    };

    const { currentThemeConfig } = useTheme();
    const ThemeIcon = currentThemeConfig.icon;

    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
            {/* Glow Effects */}
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none will-change-transform"
            />
            <div className="absolute top-0 right-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-secondary/10 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />

            {/* Rating Badge */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
            >
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-primary text-primary" />)}
                </div>
                <span className="text-xs font-medium text-white">4.9/5 from early users</span>
            </motion.div>

            {/* App Icon (Easter Egg Target) */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 bg-splash-bg rounded-2xl mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(212,255,0,0.2)] cursor-pointer select-none relative z-10"
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 0 50px rgba(212,255,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleIconTap}
            >
                <div className="w-full h-full p-2 bg-splash-bg rounded-xl overflow-hidden flex items-center justify-center pointer-events-none">
                    <img src="images/app-icon.png" alt="Lily App Icon" className="w-full h-full object-contain rounded-lg" />
                </div>

                {/* Interaction Hint */}
                <AnimatePresence>
                    {tapCount > 0 && tapCount < 5 && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -right-4 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xs"
                        >
                            {5 - tapCount}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Headlines */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-7xl font-bold mb-6 tracking-tight relative z-10"
            >
                Your personal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">productivity companion.</span>
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10 relative z-10"
            >
                Lily helps you organize, focus, and stay motivated.
                <span className="text-white block mt-1">Private by design. Offline first. Zero stress.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 relative z-10"
            >
                <motion.a
                    href="https://github.com/notles1/lily-productivity-app/releases/tag/release"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--color-primary), 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(212,255,0,0.2)] flex items-center gap-2 justify-center"
                >
                    <Download size={20} />
                    Get Early Access
                </motion.a>

                <motion.a
                    href="#features"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 justify-center"
                >
                    See Features
                    <ChevronRight size={18} />
                </motion.a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-xs text-text-secondary/50 flex items-center gap-4"
            >
                <span>✨ No login required</span>
                <span>🔒 Data stays on device</span>
                <span>🌿 100% Free</span>
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
            >
                <ArrowDown size={32} />
            </motion.div>

            {/* Easter Egg Toast */}
            <AnimatePresence>
                {showToast.visible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-surface/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
                    >
                        <div className="p-2 rounded-full bg-primary/20 text-primary">
                            <ThemeIcon size={20} />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-white text-sm">{showToast.title}</h4>
                            <p className="text-xs text-text-secondary">{showToast.message}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
