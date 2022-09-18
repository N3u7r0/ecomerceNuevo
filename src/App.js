import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/home/Home";
import Nosotros from "./componentes/nosotros/Nosotros";
import Guitarras from "./componentes/guitarras/Guitarras";
import Bajos from "./componentes/bajos/Bajos";
import Baterias from "./componentes/baterias/Baterias";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact patch="/" element={<Home />} />
        <Route exact patch="/nosotros" element={<Nosotros />} />
        <Route exact patch="/guitarras" element={<Guitarras />} />
        <Route exact patch="/bajos" element={<Bajos />} />
        <Route exact patch="/baterias" element={<Baterias />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
