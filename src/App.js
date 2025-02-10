import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
