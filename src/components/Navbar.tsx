import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
    const { cycleTheme } = useTheme();

    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const links = [
        { name: 'Features', href: '#features' },
        { name: 'Philosophy', href: '#about' },
        { name: 'Reviews', href: '#reviews' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${isScrolled ? 'mx-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-lg h-16' : 'h-16 bg-transparent'
                    }`}>
                    <div className="flex justify-between items-center h-full px-2">
                        {/* Logo */}
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={cycleTheme}
                                className="flex items-center justify-center p-1 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <img src="images/app-icon.png" alt="Theme Icon" className="w-8 h-8 object-contain" />
                            </button>
                            <a href="#" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                                Lily
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-primary transition-colors hover:scale-105 transform duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/notles1/lily-productivity-app/releases/tag/release"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex bg-white hover:bg-white/90 text-black px-5 py-2 rounded-full text-sm font-bold items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                            >
                                <Download size={16} />
                                Download Beta
                            </a>

                            <button
                                className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                                <button onClick={cycleTheme}>
                                    <img src="images/app-icon.png" alt="Theme Icon" className="w-8 h-8 object-contain" />
                                </button>
                                Lily
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-2xl font-bold hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.a
                            href="https://github.com/notles1/lily-productivity-app/releases/tag/release"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-auto bg-primary text-black py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                        >
                            <Download size={20} />
                            Download Beta
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
