
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/home/Home";
import Nosotros from "./componentes/nosotros/Nosotros";
import Guitarras from "./componentes/guitarras/Guitarras";
import Bajos from "./componentes/bajos/Bajos";
import Baterias from "./componentes/baterias/Baterias";
import Productos from "./componentes/productos/Productos";

import NavBar from "./componentes/navBar/NavBar"
import Footer from "./componentes/footer/Footer"


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/todos-los-productos' element={<Productos/>} />
        <Route path='/guitarras' element={<Guitarras/>} />
        <Route path='/bajos' element={<Bajos/>} />
        <Route path='/baterias' element={<Baterias />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;
