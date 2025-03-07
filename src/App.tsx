import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Page components
const Home = () => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold">Home</h2>
    <p className="text-gray-600">Welcome to our website!</p>
  </div>
);

const About = () => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold">About</h2>
    <p className="text-gray-600">Learn more about us here.</p>
  </div>
);

const Contact = () => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold">Contact</h2>
    <p className="text-gray-600">Get in touch with us!</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 mr-6">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 mr-6">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
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
