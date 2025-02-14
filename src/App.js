import React, { Component } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
} from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import themes from "./styles/themes/";
import { ThemeProvider } from "./contexts/ThemeContext";

export default class App extends Component {
  state = {
    changed: false,
  };

  // componentDidMount é Equivalente à useEffect(() => {}, [])
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {
    console.log({ error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  // componentWillUnmount() {}

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
