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
