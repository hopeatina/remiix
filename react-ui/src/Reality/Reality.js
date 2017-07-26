/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
// import {Link, Route} from 'react-router-dom';
import leftarrow from '../Home/leftarrow.png'
import Overlay from '../Overlay.js';
import { Unity } from 'react-unity-webgl';



class Reality extends Component {
    constructor() {
        super();
        this.state = {
            Unity: <div id="gameContainerId" ></div>
        }
    }

    componentDidMount() {
        this.setState({
            Unity: <div id="gameContainerId" ></div>
        })
    }

    render() {

        return (
            <div className="Reality">
                <Overlay/>
                <div className="Pagetitle">REALITY</div>
                <div className="Reality-view">
                    {/*<Unity src={Realityjson} />*/}
                    {this.state.Unity}
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
