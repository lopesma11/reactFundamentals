import React from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header>
        <h2>Posts da Semana</h2>
      </Header>

      <hr></hr>

      <Post
        likes={20}
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />

      <Post
        likes={45}
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />

      <Post
        likes={50}
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />
    </>
  );
}

export default App;
