/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
// import reality from './reality.png'
// import concepts from './concepts.png'
// import tunez from './tunez.png'
// import wrdz from './wrdz.png'
import {Link, Route} from 'react-router-dom'
import Overlay from '../Overlay.js';
import arrow from '../Home/leftarrow.png'

class Wrdz extends Component {

    render() {

        return (
            <div className="Wrdz">
                <Overlay/>
                <div className="Pagetitle">WRDZ</div>
                <div className="Page-div">
                    <div className="Wrdz-view">
                        <div className="Wrdz-back">
                            <img src={arrow}></img>
                            <div>Previous</div>
                        </div>

                        <div className="Wrdz-title">Article Title</div>
                        <div className="Wrdz-artcontent">
                            Content Goes Here
                        </div>
                        <div className="Wrdz-next">
                            <img src={arrow}></img>
                            <div className="arrow-text">Next</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrdz;
