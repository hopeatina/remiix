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
import SongItem from './SongItem.js'


class Tunez extends Component {

    render() {

        return (
            <div className="Tunez">
                <Overlay/>
                <div className="Pagetitle">TUNEZ</div>
                <div className="Page-div">
                    <div className="Tunez-list">
                        <div className="Tunez-category">Songs</div>
                        <SongItem/>
                        <SongItem/>
                        <SongItem/>
                        <SongItem/>
                        <SongItem/>
                    </div>
                    <div className="Tunez-playing">
                        <div className="Tunez-songwave">
                        </div>
                        <div className="Tunez-ctrlback"></div>
                        <div className="Tunez-play"></div>
                        <div className="Tunez-ctrlnext"></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tunez;
