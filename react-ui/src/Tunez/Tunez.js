/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import Overlay from '../Overlay.js';
import SongItem from './SongItem.js'
import back from '../Home/back.png'
import play from '../Home/play.png'
import pause from '../Home/pause.png'
import next from '../Home/next.png'
import Waveform from './Waveform.js';
import song from '../Data/FirstLivev2.wav';
import song2 from '../Data/GAFlav3-allind.wav';

class Tunez extends Component {

    constructor() {
        super();
        console.log(song);
        this.state = {selected: "Select a Song",
            playimg: play,
            song: song,
            other: null,
            defaultsong: {songref: song, title: "FirstLivev2", createDate: "January 1, 2017", time: "00:49"},
            secondsong: {songref: song2, title: "GAFlav3", createDate: "January 1, 2017", time: "00:39"}};
        // this.switchSelection = this.switchSelection.bind(this);
    }

    switchSelection(chosen) {
        console.log(chosen);
        this.setState({
            selected: chosen.title,
            song: chosen.songref
        });
    }

    switchPlay(chosen) {
        this.setState({
            playimg: this.state.playimg === play ? pause : play,
        });
    }

    componentDidMount() {
        var self = this;
        axios.get(`/api/song`)
            .then(function(res){
                console.log(res.data);
                const songs = res.data[0].title;
                self.setState({other: songs});
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
                        <SongItem attr={this.state.defaultsong} onClick={() => this.switchSelection(this.state.defaultsong)}/>
                        <SongItem attr={this.state.defaultsong} onClick={() => this.switchSelection(this.state.defaultsong)}/>
                        <SongItem attr={this.state.defaultsong} onClick={() => this.switchSelection(this.state.defaultsong)}/>
                        <SongItem attr={this.state.secondsong} onClick={() => this.switchSelection(this.state.secondsong)}/>
                        <SongItem attr={this.state.secondsong} onClick={() => this.switchSelection(this.state.secondsong)}/>
                    </div>
                    <div className="Tunez-playing">
                        <div className="Tunez-songwave">
                            <div className="Tunez-selected"> {this.state.selected} </div>
                            <div id="intro"></div>
                            {/*<ReactAudioPlayer src={song} controls className="audioplayer"/>*/}
                            <Waveform song={this.state.song}/>
                        </div>
                        <div className="Tunez-ctrlback">
                            <img alt="a thing" className="ctrlicon" src={back}></img>
                        </div>
                        <div onClick={() => this.switchPlay()} className="Tunez-play">
                            <img alt="a thing" className="ctrlicon" src={this.state.playimg}></img>
                        </div>
                        <div className="Tunez-ctrlnext">
                            <img alt="a thing" className="ctrlicon" src={next}></img>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tunez;
