import React from 'react';
import './App.css';
import Footer from './components/footer/';
import Header from './components/header/';
import Navigation from './components/navigation/';
import Home from './components/home/';
import AuthModal from './components/auth-modal';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
