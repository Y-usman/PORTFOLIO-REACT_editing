import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import ProjectPage from './components/ProjectPage';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <main className="main" >
        <Home />
      </main>
    </div>
  );
}

export default App;
