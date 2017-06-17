import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './Home/Home.js'
import Reality from './Reality/Reality.js'
import Wrdz from './Wrdz/Wrdz.js'
import Tunez from './Tunez/Tunez.js'
import Concepts from './Concepts/Concepts.js'

class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path={'/home'} component={Home}/>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route path={'/reality'} component={Reality}/>
                    <Route path={'/wrdz'} component={Wrdz}/>
                    <Route path={'/tunez'} component={Tunez}/>
                    <Route path={'/concepts'} component={Concepts}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
