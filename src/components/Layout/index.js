import React, { useEffect } from "react";
import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener("scroll", this.handleScrool);
  }

  componentWillMount() {
    // console.log("componente vai desmontar...");
    // document.removeEventListener("scroll", this.handleScrool);
  }

  handleScrool = () => {
    console.log("scrollou...");
  };

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
