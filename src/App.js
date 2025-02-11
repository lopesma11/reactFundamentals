import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import themes from "./styles/themes/";

function App() {
  const [theme, setTheme] = useState("dark");
  const firstRender = useRef(true);
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToogleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    if (firstRender) {
      firstRender.current = false;
      return;
    }
  }, [theme]);

  // useLayoutEffect(() => {
  //   for (let i = 0; i < 15000; i++) {
  //     console.debug(i);
  //   }
  // }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToogleTheme={handleToogleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;
