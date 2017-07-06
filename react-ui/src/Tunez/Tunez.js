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
import back from '../Home/back.png'
import play from '../Home/play.png'
import pause from '../Home/next.png'
import next from '../Home/next.png'
import ReactAudioPlayer from 'react-audio-player';
import Waveform from './Waveform.js';
import song from '../Data/FirstLivev2.wav';

class Tunez extends Component {

    constructor() {
        super();
        this.state = {selected: "Select a Song", playimg: play};
        // this.switchSelection = this.switchSelection.bind(this);
    }

    switchSelection(j) {
        console.log(j);
        this.setState({
            selected: j
        });
    }

    switchPlay(){
        this.setState({
            playimg: this.state.playimg == play ? pause : play
        });
    }

    render() {

        return (
            <div className="Tunez">
                <Overlay/>
                <div className="Pagetitle">TUNEZ</div>
                <div className="Page-div">
                    <div className="Tunez-list">
                        <div onClick={() => this.switchSelection("New Title")} className="Tunez-category">Songs</div>
                        <SongItem onClick={() => this.switchSelection("New Title")}/>
                        <SongItem onClick={() => this.switchSelection("New Title2")}/>
                        <SongItem onClick={() => this.switchSelection("New Title3")}/>
                        <SongItem onClick={() => this.switchSelection("New Title4")}/>
                        <SongItem onClick={() => this.switchSelection("New Title5")}/>
                    </div>
                    <div className="Tunez-playing">
                        <div  className="Tunez-songwave">
                            <div className="Tunez-selected"> {this.state.selected} </div>
                            <div id="intro"></div>
                            {/*<ReactAudioPlayer src={song} controls className="audioplayer"/>*/}
                            <Waveform song={song}/>
                        </div>
                        <div className="Tunez-ctrlback">
                            <img className="ctrlicon" src={back}></img>
                        </div>
                        <div onClick={() => this.switchPlay()} className="Tunez-play">
                            <img className="ctrlicon" src={this.state.playimg}></img>
                        </div>
                        <div className="Tunez-ctrlnext">
                            <img className="ctrlicon" src={next}></img>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tunez;
