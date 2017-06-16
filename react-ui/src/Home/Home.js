/**
 * Created by theon on 6/6/2017.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <ColorLines></ColorLines>
                <HomeLogo></HomeLogo>
                <Subscriber></Subscriber>
                <HomeOption></HomeOption>
                <HomeOption></HomeOption>
                <HomeOption></HomeOption>
                <HomeOption></HomeOption>
                <div className="NavPage"> About </div>|
                <div className="NavPage"> Contact </div>

            </div>
        );
    }
}

export default Home;
