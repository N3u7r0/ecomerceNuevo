
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/home/Home";
import Nosotros from "./componentes/nosotros/Nosotros";
import Guitarras from "./componentes/guitarras/Guitarras";
import Bajos from "./componentes/bajos/Bajos";
import Baterias from "./componentes/baterias/Baterias";

import NavBar from "./componentes/navBar/NavBar"
import Footer from "./componentes/footer/Footer"


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route patch='/' element={<Home />} />
        <Route patch='/nosotros' element={<Nosotros />} />
        <Route patch='/guitarras' element={<Guitarras/>} />
        <Route patch='/bajos' element={<Bajos/>} />
        <Route patch='/baterias' element={<Baterias />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;
