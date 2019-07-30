import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/';
import Header from './components/header/';
import Navigation from './components/navigation/';
import Home from './components/home/';
import UserLibrary from './components/userLibrary';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={UserLibrary} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
