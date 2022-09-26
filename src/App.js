
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/home/Home";
import Nosotros from "./componentes/nosotros/Nosotros";
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
        <Route path='/:tipo' element={<Productos/>} />
        <Route path='/:id' element={<Productos/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;
