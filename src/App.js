import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
  Component,
} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import themes from "./styles/themes/";

// function App() {
//   const [theme, setTheme] = useState("dark");
//   const firstRender = useRef(true);
//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToogleTheme() {
//     setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
//   }

//   useEffect(() => {
//     if (firstRender) {
//       firstRender.current = false;
//       return;
//     }
//   }, [theme]);

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout onToogleTheme={handleToogleTheme} selectedTheme={theme} />
//     </ThemeProvider>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props); // React.Component.constructor()

    this.state = {
      theme: "dark",
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToogleTheme={() => {
            this.setState((prevState) => ({
              theme: prevState.theme === "dark" ? "light" : "dark",
            }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}
