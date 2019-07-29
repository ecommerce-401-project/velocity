import React from 'react';
import './App.css';
import Footer from './components/footer/'
import Header from './components/header/'
import Navigation from './components/navigation/'
import Home from './components/home/'

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
