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

class SongItem extends Component {

    render() {

        return (
            <div className="Tunez-item" onClick={this.props.onClick}>
                <div className="Tunez-cover"></div>
                <div className="Tunez-title">Tune Title</div>
                <div className="Tunez-date">January 1, 2017</div>
                <div className="Tunez-length">08:30</div>
            </div>
        )
    }
}

export default SongItem