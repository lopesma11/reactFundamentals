import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title01",
      subtitle: "Sub01",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Title02",
      subtitle: "Sub02",
      likes: 10,
    },
    {
      id: Math.random(),
      title: "Title03",
      subtitle: "Sub03",
      likes: 50,
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
  return (
    <>
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
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
