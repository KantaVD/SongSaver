import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <Header />
        
      <nav className="navigation">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
