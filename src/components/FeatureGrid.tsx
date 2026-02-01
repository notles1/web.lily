import { motion } from 'framer-motion';
import { CheckSquare, PenTool, Zap, BookOpen, Quote, Shield } from 'lucide-react';

const featureGroups = [
    {
        title: "Organize & Plan",
        icon: <CheckSquare className="w-5 h-5 text-black" />,
        color: "bg-primary",
        items: [
            "Todos & Habits tracking",
            "Calendar & Planning",
            "Clear progress indicators (streaks)"
        ]
    },
    {
        title: "Capture Thoughts",
        icon: <PenTool className="w-5 h-5 text-black" />,
        color: "bg-secondary",
        items: [
            "Notes that auto-save",
            "Drawing / Handwriting support",
            "Clean default view → advanced tools"
        ]
    },
    {
        title: "Focus Better",
        icon: <Zap className="w-5 h-5 text-black" />,
        color: "bg-tertiary",
        items: [
            "Pomodoro timer",
            "Distraction-free flow",
            "Offline-first reliability"
        ]
    },
    {
        title: "Stay Motivated",
        icon: <Quote className="w-5 h-5 text-black" />,
        color: "bg-primary-light",
        items: [
            "Daily randomized quotes",
            "Fun facts refresh on tap",
            "TikTok-style inspiration feed"
        ]
    },
    {
        title: "Learn & Reflect",
        icon: <BookOpen className="w-5 h-5 text-black" />,
        color: "bg-white",
        items: [
            "Book tracker & notes",
            "Weekly reflections",
            "Mood / Energy check-ins"
        ],
    },
    {
        title: "Privacy & Security",
        icon: <Shield className="w-5 h-5 text-black" />,
        color: "bg-tertiary",
        items: [
            "Local-only data storage",
            "No account required",
            "Export your data anytime"
        ]
    }
];

export const FeatureGrid = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-4">What Lily helps you do</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureGroups.map((group, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(255,255,255,0.1)' }}
                        className="p-6 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-colors cursor-default will-change-transform"
                    >
                        <div className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center mb-6`}>
                            {group.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">{group.title}</h3>
                        <ul className="space-y-3">
                            {group.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
