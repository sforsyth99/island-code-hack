import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import homeStyles from "./styles/Home.module.css";
import aboutStyles from "./styles/About.module.css";

// Page components
const Home = () => (
  <div className={homeStyles.container}>
    <h2 className={homeStyles.title}>Home</h2>
    <p className={homeStyles.text}>Welcome to our website!</p>
  </div>
);

const About = () => (
  <div className={aboutStyles.container}>
    <h2 className={aboutStyles.title}>About</h2>
    <p className={aboutStyles.text}>Learn more about us here.</p>
    <table className={aboutStyles.table}>
      <thead>
        <tr className={aboutStyles.tableHeader}>
          <th className={aboutStyles.tableHeaderCell}>Name</th>
          <th className={aboutStyles.tableHeaderCell}>Age</th>
          <th className={aboutStyles.tableHeaderCell}>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr className={aboutStyles.tableRow}>
          <td className={aboutStyles.tableCell}>John Doe</td>
          <td className={aboutStyles.tableCell}>28</td>
          <td className={aboutStyles.tableCell}>New York</td>
        </tr>
        <tr className={aboutStyles.tableRow}>
          <td className={aboutStyles.tableCell}>Jane Smith</td>
          <td className={aboutStyles.tableCell}>34</td>
          <td className={aboutStyles.tableCell}>California</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Contact = () => (
  <div className={homeStyles.container}>
    <h2 className={homeStyles.title}>Contact</h2>
    <p className={homeStyles.text}>Get in touch with us!</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/about" className={styles.link}>
              About
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>
        </header>

        <main className={styles.main}>
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
