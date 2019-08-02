import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/';
// import Header from './components/header/';
import Navigation from './components/navigation/';
import Home from './components/home/';
import UserLibrary from './components/userLibrary';
import GameView from './components/game-view';
import About from './components/about';
// import Twitch from './components/twitch';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={UserLibrary} />
        <Route path="/game/:gameId" component={GameView} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
