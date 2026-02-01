import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Product Designer",
        quote: "Finally, a productivity app that doesn't feel like work. The 'Dog' personality is oddly comforting.",
        stars: 5,
    },
    {
        name: "Mike Chen",
        role: "Developer",
        quote: "The offline-first approach is a game changer for my commute. Simple, fast, and beautiful.",
        stars: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Student",
        quote: "I used to juggle 4 different apps. Lily replaced them all without cluttering my screen.",
        stars: 5,
    }
];

export const Testimonials = () => {
    return (
        <section id="reviews" className="py-32 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by productivity enthusiasts</h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Create a calm space for your best work. Join thousand of users who switched to Lily.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                            className="bg-surface/30 backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 rotate-180" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, si) => (
                                    <Star key={si} size={20} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-lg mb-8 leading-relaxed text-balance">"{t.quote}"</p>

                            <div>
                                <h4 className="font-bold text-white">{t.name}</h4>
                                <p className="text-sm text-text-secondary">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
