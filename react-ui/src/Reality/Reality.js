/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
// import {Link, Route} from 'react-router-dom';
import leftarrow from '../Home/leftarrow.png'
import Overlay from '../Overlay.js';



class Reality extends Component {

    render() {

        return (
            <div className="Reality">
                <Overlay/>
                <div className="Pagetitle">REALITY</div>
                <div className="Reality-view">
                    <div className="Reality-control-left">
                    </div>
                    <div className="Reality-control-right"></div>
                    <div className="Reality-carousel-div">
                        <div className="Reality-arrow-left">
                            <img className="Reality-arrow-size" alt="" src={leftarrow}></img>
                        </div>
                            <div className="Reality-viewitem"></div>
                            <div className="Reality-viewitem"></div>
                            <div className="Reality-viewitem"></div>
                            <div className="Reality-viewitem"></div>
                        <div className="Reality-arrow-right">
                            <img className="Reality-arrow-size"  alt="" src={leftarrow}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reality;
