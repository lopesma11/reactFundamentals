import React from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToogleTheme }) => {
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={handleToogleTheme}>
              {theme === "dark" ? "☀️" : "🌑"}
            </button>
          </Container>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
