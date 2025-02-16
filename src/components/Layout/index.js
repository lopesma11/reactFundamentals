import React, { useEffect } from "react";
import Header from "../Header";
import PostsList from "../../pages/Posts";
import Footer from "../Footer";
import Routes from "../../routes";
import { Link, BrowserRouter } from "react-router-dom";
import { Nav } from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">HomePage</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/id">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
