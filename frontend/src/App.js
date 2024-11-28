import './App.css';
import React from 'react';
import Home from './pages/Home';
import AppNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="Navbar">
      <AppNavbar/>
    </div>

    <div className="app-container">
      <Sidebar />
      <div className="App">
        <h1>Business Search Engine</h1>
        <Home/> 
      </div>
    </div>
    </>
  );
}

export default App;

