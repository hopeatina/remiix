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
// import {Link, Route} from 'react-router-dom'
import Overlay from '../Overlay.js';
import arrow from '../Home/leftarrow.png'



class Concepts extends Component {

    render() {

        return (
            <div className="Concepts">
                <Overlay/>
                <div className="Pagetitle">CONCEPTS</div>
                <div className="Page-div-concepts">
                    <div className="Concepts-view">
                        <div className="Concepts-back">
                            <img className="Wrdz-next-size" alt="a thing" src={arrow}></img>
                            <div >Previous</div>
                        </div>
                        <div className="Concepts-next">
                            <img className="Wrdz-next-size" alt="a thing" src={arrow}></img>
                            <div className="arrow-text">Next</div>
                        </div>
                    </div>
                    <div className="Concepts-title"></div>
                    <div className="Concepts-inspiration"></div>
                </div>
            </div>
        );
    }
}

export default Concepts;
