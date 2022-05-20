import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Sear from './components/Search/Sear';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Nav />
      <Sear />

      <Footer />
    </div>
  );
}

export default App;
