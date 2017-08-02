/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
import Overlay from '../Overlay.js';
import arrow from '../Home/leftarrow.png'

class Wrdz extends Component {

    constructor() {
        super();
        console.log(song);
        this.state = {
            post: null,
        };
    }

    componentDidMount() {
        var self = this;
        axios.get(`/api/posts`)
            .then(function(posts){
                console.log(res.data);
                const posts = res.data;
                self.setState({posts: posts});
            }).catch(function(err) {
            console.log(err);
        });
    }

    render() {

        return (
            <div className="Wrdz">
                <Overlay/>
                <div className="Pagetitle">WRDZ</div>
                <div className="Page-div">
                    <div className="Wrdz-view">
                        <div className="Wrdz-back">
                            <img alt="a thing" src={arrow}></img>
                            <div>Previous</div>
                        </div>

                        <div className="Wrdz-title">Introducing Remiix.life</div>
                        <div className="Wrdz-artcontent">
                            This is the beginning.
                        </div>
                        <div className="Wrdz-next">
                            <img alt="a thing" src={arrow}></img>
                            <div className="arrow-text">Next</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrdz;
