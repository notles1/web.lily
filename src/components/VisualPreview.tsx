import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const screenshots = [
    'images/screenshot-1.jpg',
    'images/screenshot-2.jpg',
    'images/screenshot-3.jpg',
    'images/screenshot-4.jpg'
];

export const VisualPreview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex justify-center py-20 px-4">
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                // Adjusted dimensions to better match typical modern smartphone aspect ratios
                className="relative w-full max-w-[300px] md:max-w-[320px] h-[600px] md:h-[690px] bg-black border-[8px] border-gray-900 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 cursor-alias"
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-30 flex items-end justify-center pb-1">
                    <div className="w-16 h-1 bg-black/50 rounded-full" />
                </div>

                {/* Carousel */}
                <div className="w-full h-full relative bg-gray-900">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={screenshots[currentIndex]}
                            alt={`Screenshot ${currentIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Gradient Overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1.5 bg-white/20 rounded-full z-30"></div>
            </motion.div>
        </section>
    );
};
