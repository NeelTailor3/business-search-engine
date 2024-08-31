import './App.css';
import React from 'react';
import Home from './pages/Home';
import AppNavbar from './components/Navbar';

function App() {
  return (
    <>
    <div className="Navbar">
      <AppNavbar/>
    </div>
    <div className="App">
      <h1>Business Search Engine</h1>
      <Home/>
    </div>
    </>
  );
}

export default App;

