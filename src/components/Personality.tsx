import { motion } from 'framer-motion';
import { Sun, Moon, CloudRain, Heart } from 'lucide-react';

export const Personality = () => {
    return (
        <section className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/30 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 rounded-full bg-primary/10 mb-6"
                >
                    <Heart className="text-primary w-8 h-8 fill-primary" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8">The Lily "Personality"</h2>
                <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                    Lily is named after my dog, a German Shepherd—and that matters. It invites you to be productive without the pressure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="p-6 rounded-2xl bg-surface/50 border border-white/5">
                        <h3 className="text-primary font-bold mb-2">Encouraging</h3>
                        <p className="text-sm text-text-secondary">"Hey, you did great today." instead of "You failed your goals."</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-surface/50 border border-white/5">
                        <h3 className="text-secondary font-bold mb-2">Adaptive Tone</h3>
                        <div className="flex gap-3 mt-2 text-text-secondary">
                            <Sun size={16} /> <Moon size={16} /> <CloudRain size={16} />
                        </div>
                        <p className="text-sm text-text-secondary mt-2">Adjusts based on time of day, weather, and your activity.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-surface/50 border border-white/5">
                        <h3 className="text-tertiary font-bold mb-2">Companion</h3>
                        <p className="text-sm text-text-secondary">Loyal and protective of your peace. Reacts to your progress with streaks and celebrations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
