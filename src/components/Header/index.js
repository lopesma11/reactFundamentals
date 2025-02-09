import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";
import Title from "../Title";

export default function Header({ props }) {
  const { onToogleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
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
