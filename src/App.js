import React, { Component } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
} from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import themes from "./styles/themes/";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}
