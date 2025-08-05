"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const store_1 = require("../store");
const ui_slice_1 = require("../store/slices/ui-slice");
const ThemeContext = (0, react_1.createContext)(undefined);
function ThemeProvider({ children }) {
    const dispatch = (0, store_1.useAppDispatch)();
    const theme = (0, store_1.useAppSelector)((state) => state.ui.theme);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch((0, ui_slice_1.setTheme)(newTheme));
    };
    const handleSetTheme = (newTheme) => {
        dispatch((0, ui_slice_1.setTheme)(newTheme));
    };
    // Apply theme to document element
    (0, react_1.useEffect)(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);
    // Load theme from localStorage when component mounts
    (0, react_1.useEffect)(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            dispatch((0, ui_slice_1.setTheme)(savedTheme));
        }
    }, [dispatch]);
    // Save theme to localStorage when theme changes
    (0, react_1.useEffect)(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: {
            theme,
            toggleTheme,
            setTheme: handleSetTheme
        }, children: children }));
}
function useTheme() {
    const context = (0, react_1.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
