import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: "dark",
  };

  handleToogleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToogleTheme: this.handleToogleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
