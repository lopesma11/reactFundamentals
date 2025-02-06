import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";
import styles from "./Header.css";

export default function Header({ props }) {
  const { onToogleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{styles.title}</h1>
      <Button onClick={onToogleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
