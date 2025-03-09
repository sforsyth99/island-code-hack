import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import homeStyles from "./styles/Home.module.css";
import aboutStyles from "./styles/About.module.css";
import { Contact } from "./Contact";

// Page components
const Home = () => {
  const [toggles, setToggles] = React.useState([
    { id: 1, name: 'Sensor 1', enabled: false },
    { id: 2, name: 'Sensor 2', enabled: false },
    { id: 3, name: 'Sensor 3', enabled: false },
    { id: 4, name: 'Sensor 4', enabled: false },
    { id: 5, name: 'Shower Head', enabled: false, fixed: true },
  ]);

  const handleToggle = (id: number) => {
    setToggles(toggles.map(toggle =>
      toggle.id === id ? { ...toggle, enabled: !toggle.enabled } : toggle
    ));
  };

  const handleNameChange = (id: number, newName: string) => {
    setToggles(toggles.map(toggle =>
      toggle.id === id ? { ...toggle, name: newName } : toggle
    ));
  };

  return (
    <div className={homeStyles.container}>
      <h2 className={homeStyles.title}>System Configuration</h2>
      <div className={homeStyles.toggleGrid}>
        {toggles.map(toggle => (
          <div key={toggle.id} className={homeStyles.toggleItem}>
            <div className={homeStyles.toggleContent}>
              {!toggle.fixed ? (
                <input
                  type="text"
                  value={toggle.name}
                  onChange={(e) => handleNameChange(toggle.id, e.target.value)}
                  className={homeStyles.nameInput}
                  placeholder="Enter sensor name"
                />
              ) : (
                <span className={homeStyles.fixedName}>{toggle.name}</span>
              )}
              <label className={homeStyles.toggleLabel}>
                <input
                  type="checkbox"
                  checked={toggle.enabled}
                  onChange={() => handleToggle(toggle.id)}
                  className={homeStyles.toggleInput}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
