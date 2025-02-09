import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import { ThemeProvider } from "../../context/ThemeContext";
import { Title } from "./styles";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title01",
      subtitle: "Sub01",
      likes: 20,
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Title02",
      subtitle: "Sub02",
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title03",
      subtitle: "Sub03",
      likes: 50,
      read: false,
      removed: false,
    },
  ]);

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title0${posts.length + 1}`,
        subtitle: `Sub0${posts.length + 1}`,
        likes: 50,
      },
    ]);
  };

  const handleRemovePost = (postId) => {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );

    return removePost;
  };

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Ataulizar Página</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
