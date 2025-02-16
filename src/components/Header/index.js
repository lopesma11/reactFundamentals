import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Header extends React.Component {
  render() {
    const history = useHistory();

    function handleNavigate() {
      history.push("/");
    }

    return (
      <ThemeContext.Consumer>
        {({ theme, handleToogleTheme }) => {
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={handleToogleTheme}>
              {theme === "dark" ? "☀️" : "🌑"}
            </button>
            <button
              onClick={handleNavigate}
              style={{
                color: "#fff",
              }}
            >
              Navegar entre telas
            </button>
          </Container>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
