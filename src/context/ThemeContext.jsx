import {createContext, useState, useContext} from "react"


export const ThemeContext = createContext(null);


const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("winter");
    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error("useUserContext must be used in a provider")
    }

    return context;
}

export default ThemeContextProvider;