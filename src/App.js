import Header from './components/Header';
import Footer from './components/Footer';
import Cards from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards src="./imgs/dobleplay.jpg" title="JUGADA 1" descripcion="Jugada de doble play" />
      <Cards src="./imgs/outentercera.jpg" title="JUGADA 2" descripcion="Out esperado en tercera base" />
      <Cards src="./imgs/outrobando.jpg" title="JUGADA 3" descripcion="Out robando base" />
      <Cards src="./imgs/pitcher.jpg" title="POSICION" descripcion="El pitcher es la posición N°1" />
      <Cards src="./imgs/quietoenhome.jpg" title="ARBITRO" descripcion="Es el juez del juego" />
      <Cards src="./imgs/reunion.jpg" title="MANAGER" descripcion="Reune al equipo para dar indicaciones" />
      <Footer />
    </div>
  );
}

export default App;
