import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToogleTheme: PropTypes.func.isRequired,
  };
  render() {
    const { onToogleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToogleTheme}>
          {selectedTheme === "dark" ? "☀️" : "🌑"}
        </button>
      </Container>
    );
  }
}

// Header.PropTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToogleTheme: PropTypes.func.isRequired,
// };
