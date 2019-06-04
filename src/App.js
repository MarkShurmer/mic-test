import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact/Contact';
import mktImg from './assets/mktStuff.png';

function App() {
  return (
    <div className="app">
      <div className="app-content">
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1> Make it cheaper test</h1>
      </header>

      <section className="main">
        <img src={mktImg} />
        <Contact />
      </section>

      <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
