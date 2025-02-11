import React, { useEffect } from "react";
import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default function Layout({ onToogleTheme, selectedTheme }) {
  useEffect(() => {
    console.debug({ selectedTheme });

    return () => {
      console.log(`<Layout /> saiu da tela`);
    };
  }, [selectedTheme]);

  return (
    <>
      <Header onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
      <PostsList />
      <Footer onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
    </>
  );
}
