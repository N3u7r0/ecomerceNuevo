import './App.css';
import Nav from "./componentes/nav/Nav";
import Header from "./componentes/header/Header";
import Main from "./componentes/main/Main";
import Footer from "./componentes/footer/Footer";
import itemCount from "./componentes/itemCount"

function App() {
  return (
    <div>
      <Nav/>
      <itemCount stock={5} initial={1} onAdd ={0}/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
