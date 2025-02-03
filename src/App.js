import React from "react";
import Post from "./Post";

const tituloZeroUm = "Título Zero Um";

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da Semana</h2>

      <hr></hr>

      <Post
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />

      <Post
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />

      <Post
        post={{
          title: { tituloZeroUm },
          subtitle: "Subtítulo da Notícia 01",
        }}
      />
    </>
  );
}

export default App;
