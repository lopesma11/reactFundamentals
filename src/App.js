import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import themes from "./styles/themes/";

export default class App extends Component {
  state = {
    theme: "dark",
  };

  handleToogleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToogleTheme={() => {
            this.handleToogleTheme;
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}
