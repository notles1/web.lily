import { useTheme } from '../context/ThemeContext';
import { Calendar } from 'lucide-react';

export const Footer = () => {
    const { currentThemeConfig } = useTheme();
    const ThemeIcon = currentThemeConfig.icon;

    return (
        <footer className="py-12 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex justify-center items-center gap-2 mb-8 text-primary">
                    <img src="images/app-icon.png" alt="Lily Logo" className="w-8 h-8 object-contain" />
                </div>
                <p className="text-text-secondary mb-4">
                    "Simplicity is the ultimate sophistication."
                </p>
                <p className="text-sm text-text-secondary/50">
                    Created by <span className="text-white">Selton de Souza</span>. All rights reserved &copy; {new Date().getFullYear()}.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 opacity-50">
                    <Calendar size={20} />
                    <span className="text-xs text-text-secondary/30">v1.2.0 • Made with ❤️ for productivity</span>
                </div>
            </div>
        </footer>
    );
};
