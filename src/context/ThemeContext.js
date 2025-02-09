import React, { useContext } from "react";

export const ThemeContext = createContext("dark");

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");
  const handleToogleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, onToogleTheme: handleToogleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
