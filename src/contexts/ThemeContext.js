import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = "dark";

    try {
      theme = JSON.parse(localStorage.getItem("theme"));
    } catch (error) {
      console.log(error);
    }

    this.state = {
      theme,
    };
  }
  handleToogleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }),
      () => {
        localStorage.setItem("theme", JSON.stringify(this.state));
      }
    );
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
