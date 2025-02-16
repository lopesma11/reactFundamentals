import React from "react";
import { Container } from "../styles";
import Post from "./Post";
import posts from "../posts";

export default function Post({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}
