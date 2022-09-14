import "./App.css";
import Footer from "./components/Footer/Footer";
import Herotxt from "./components/HeroTxt/Herotxt";
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herotxt />
      <Footer />
    </div>
  );
}

export default App;
