import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Leaf, Flame, Snowflake, Gamepad2, Droplet, type LucideIcon } from 'lucide-react';

export type ThemeName = 'default' | 'cozy' | 'cold' | 'retro' | 'vampire';

export interface ThemeConfig {
    name: string;
    description: string;
    icon: LucideIcon;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        background: string;
        surface: string;
        'primary-light': string;
    }
}

const themes: Record<ThemeName, ThemeConfig> = {
    default: {
        name: 'Eco',
        description: 'Back to roots. Fresh energy.',
        icon: Leaf,
        colors: {
            primary: '#D4FF00',
            secondary: '#00D4FF',
            tertiary: '#E0BBE4',
            background: '#000000',
            surface: 'rgba(30, 41, 59, 0.7)',
            'primary-light': '#E0FF4D'
        }
    },
    cozy: {
        name: 'Cozy',
        description: 'Warm and snug.',
        icon: Flame,
        colors: {
            primary: '#FFB74D',
            secondary: '#FF8A65',
            tertiary: '#A1887F',
            background: '#2E1C0B',
            surface: 'rgba(62, 39, 35, 0.7)',
            'primary-light': '#FFE0B2'
        }
    },
    cold: {
        name: 'Cold',
        description: 'Stay frosty with icy hues.',
        icon: Snowflake,
        colors: {
            primary: '#80DEEA',
            secondary: '#4DD0E1',
            tertiary: '#B2EBF2',
            background: '#0D1B2A',
            surface: 'rgba(27, 38, 59, 0.7)',
            'primary-light': '#E0F7FA'
        }
    },
    retro: {
        name: 'Retro',
        description: 'Neon vibes and synthwave beats.',
        icon: Gamepad2,
        colors: {
            primary: '#FF4081',
            secondary: '#7C4DFF',
            tertiary: '#536DFE',
            background: '#0D0221',
            surface: 'rgba(36, 20, 50, 0.7)',
            'primary-light': '#FF80AB'
        }
    },
    vampire: {
        name: 'Vampire',
        description: 'Eternal night awaits.',
        icon: Droplet,
        colors: {
            primary: '#D50000',
            secondary: '#FF1744',
            tertiary: '#B71C1C',
            background: '#1A0000',
            surface: 'rgba(46, 0, 0, 0.7)',
            'primary-light': '#FF5252'
        }
    }
};

interface ThemeContextType {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;
    currentThemeConfig: ThemeConfig;
    cycleTheme: () => ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeName>('default');

    useEffect(() => {
        const root = document.documentElement;
        const config = themes[theme];

        // Update CSS variables
        root.style.setProperty('--color-primary', config.colors.primary);
        root.style.setProperty('--color-secondary', config.colors.secondary);
        root.style.setProperty('--color-tertiary', config.colors.tertiary);
        root.style.setProperty('--color-background', config.colors.background);
        root.style.setProperty('--color-surface', config.colors.surface);
        root.style.setProperty('--color-primary-light', config.colors['primary-light']);
    }, [theme]);

    const cycleTheme = () => {
        let nextTheme: ThemeName = 'default';
        switch (theme) {
            case 'default': nextTheme = 'cozy'; break;
            case 'cozy': nextTheme = 'cold'; break;
            case 'cold': nextTheme = 'retro'; break;
            case 'retro': nextTheme = 'vampire'; break;
            case 'vampire': nextTheme = 'default'; break;
            default: nextTheme = 'default';
        }
        setTheme(nextTheme);
        return themes[nextTheme];
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig: themes[theme], cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
