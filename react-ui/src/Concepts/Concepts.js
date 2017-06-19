/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
// import logo from './remiixlogo.png';
// import reality from './reality.png'
// import concepts from './concepts.png'
// import tunez from './tunez.png'
// import wrdz from './wrdz.png'
import {Link, Route} from 'react-router-dom'
import Overlay from '../Overlay.js';


class Concepts extends Component {

    render() {

        return (
            <div className="Concepts">
                <Overlay/>
                <div className="Pagetitle">CONCEPTS</div>
                <div className="Page-div">
                    <div className="Concept-view"></div>
                    <div className="Concept-title"></div>
                    <div className="Concept-Inspiration"></div>
                </div>
            </div>
        );
    }
}

export default Concepts;
