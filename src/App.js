import './App.css';
import Nav from "./componentes/nav/Nav";
import Header from "./componentes/header/Header";
import Main from "./componentes/main/Main";
import Footer from "./componentes/footer/Footer";
import ItemCount from "./componentes/itemCount/ItemCount";
/* import ItemListContainer from './componentes/itemListContainer/ItemListContainer'; */

function App() {
  return (
    <div>
      <Nav/>
      <ItemCount stock={5} initial={1} onAdd ={0}/>
      
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
