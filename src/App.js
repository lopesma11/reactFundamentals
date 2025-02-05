import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title01",
      subtitle: "Sub01",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title02",
      subtitle: "Sub02",
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title03",
      subtitle: "Sub03",
      likes: 50,
      read: false,
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
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));

    return removePost;
  };

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Ataulizar Página</button>
        </h2>
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
