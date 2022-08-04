import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridExample from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GridExample />
      <Footer />
    </div>
  );
}

export default App;
