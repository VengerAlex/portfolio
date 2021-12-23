import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Nav from "./components/Nav";

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App bg-gray-800 text-white min-h-screen">
        <Nav />
        <Routes >
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Hero />} />
        </Routes >
        <Footer />
      </div>

    </Router>
  );
}

export default App;
