import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Idea</h2>
                <p className="text-text-secondary">Simple on the surface. Powerful underneath.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] pointer-events-none" />
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="p-2 bg-red-500/20 rounded-lg text-red-500"><X size={20} /></span>
                        Instead of juggling...
                    </h3>
                    <ul className="space-y-4 text-text-secondary">
                        <li className="flex items-center gap-3 decoration-slate-600 line-through decoration-1">A todo app</li>
                        <li className="flex items-center gap-3 decoration-slate-600 line-through decoration-1">A notes app</li>
                        <li className="flex items-center gap-3 decoration-slate-600 line-through decoration-1">A habit tracker</li>
                        <li className="flex items-center gap-3 decoration-slate-600 line-through decoration-1">A calendar</li>
                        <li className="flex items-center gap-3 decoration-slate-600 line-through decoration-1">A motivation app</li>
                    </ul>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-3xl border border-primary/20 relative overflow-hidden shadow-[0_0_30px_rgba(212,255,0,0.05)]"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                        <span className="p-2 bg-primary/20 rounded-lg text-primary"><Check size={20} /></span>
                        Lily puts everything in one place
                    </h3>
                    <p className="text-text-secondary mb-6">
                        Designed to replace multiple apps with one calm, friendly, offline-first experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Zero Stress', 'Consistent Design', 'Private'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-sm text-primary border border-primary/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
