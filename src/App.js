import React from "react";

import Container from "./components/Container";
import MenuLateral from "./components/MenuLateral";
import "./App.css";
import Contenido from "./components/Contenido";

const App = () => {
  return (
    <Container>
      <MenuLateral />
      <Contenido />
    </Container>
  );
};

export default App;
