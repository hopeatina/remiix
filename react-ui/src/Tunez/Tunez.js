/**
 * Created by theon on 6/6/2017.
 */
import React, { Component } from 'react';
import '../App.css';
// import reality from './reality.png'
// import concepts from './concepts.png'
// import tunez from './tunez.png'
// import wrdz from './wrdz.png'
import {Link, Route} from 'react-router-dom'
import Overlay from '../Overlay.js';


class Tunez extends Component {

    render() {

        return (
            <div className="Tunez">
                <Overlay/>
                <div className="Pagetitle">TUNEZ</div>
            </div>
        );
    }
}

export default Tunez;
