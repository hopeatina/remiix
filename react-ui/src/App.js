import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js'
import Reality from './Reality/Reality.js'
import Wrdz from './Wrdz/Wrdz.js'
import Tunez from './Tunez/Tunez.js'
import Concepts from './Concepts/Concepts.js'

class App extends Component {


    render() {
        // const NotFound = () => (
        //     <h1>404.. This page is not found!</h1>);
        return (
            <BrowserRouter>
                <div>
                    {/*<Route path={'/'} component={Home}/>*/}
                    <Switch>
                        <Route path={'/reality'} component={Reality}/>
                        <Route path={'/wrdz'} component={Wrdz}/>
                        <Route path={'/tunez'} component={Tunez}/>
                        <Route path={'/concepts'} component={Concepts}/>
                        {/*<Route component={NotFound}/>*/}
                        <Route path={'/'} component={Home}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
