import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Page components
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to our website!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Learn more about us here.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us!</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
