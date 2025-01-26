import {createContext, useState, ReactNode} from "react";

type ThemeContextType = {
    theme: string;
    changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    changeTheme: () => {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<string>("light");

    const changeTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


