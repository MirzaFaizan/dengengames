import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
    Route,
    HashRouter
} from "react-router-dom";

//components
import Home from './views/Home/Home';
import DegenPlatform from './views/Section1/Section1';
import Ante from './views/Section2/Section2';
import SuperRepresentative from './views/Section3/Section3';
import RoadMap from './views/Section4/Section4';

import Partners from './views/Section5/Section5';
// import Footer from '../Footer/Footer.jsx';
import PlayNow from './views/PlayNow/Drawer/Drawer';
import TestDrawer from "./views/PlayNow/Drawer/TestDrawer";

class App extends Component {
  render() {
    return (

        <HashRouter className="App">
                <div className="App">
                    <Route exact path="/" component={Home}/>
                    <Route path="/degenplatform" component={DegenPlatform}/>
                    <Route path="/ante" component={Ante}/>
                    <Route path="/superrepresentative" component={SuperRepresentative}/>
                    <Route path="/roadmap" component={RoadMap}/>
                    <Route path="/partners" component={Partners}/>
                    {/*<Route path="/playnow" component={PlayNow}/>*/}
                  <Route path="/test-playnow" component={TestDrawer}/>
                    <Route path="/playnow" component={TestDrawer}/>

                </div>
        </HashRouter>
    );
  }
}

export default App;
