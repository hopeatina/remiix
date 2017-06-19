/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import './App.css';
// import reality from './reality.png'
// import concepts from './concepts.png'
// import tunez from './tunez.png'
// import wrdz from './wrdz.png'
import {Link, Route} from 'react-router-dom'
import menuicon from './Home/menuicon.png';
import homeicon from './Home/remixlogoblack.png';


class Overlay extends Component {

    render() {

        return (
            <div className="Overlay">
                <div className="home-svgdiv">
                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1663 1365" version="1.1">
                        <title>Group.svg</title>
                        <desc>Created using Figma</desc>
                        <g id="Canvas" transform="translate(-1283 -2209)">
                            <g id="Group">
                                <g id="Rectangle 8">
                                    <use href="#path0_fill" transform="translate(1471.55 2215)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path1_fill" transform="translate(1519.43 2217)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path2_fill" transform="translate(1567.32 2209)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path3_fill" transform="translate(2325.49 3303)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path4_fill" transform="translate(2372.38 2754)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path5_fill" transform="translate(2420.26 3303)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path6_fill" transform="matrix(5.33596e-17 -1 1 7.02666e-17 1283 3329)"
                                         fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path7_fill"
                                         transform="matrix(5.33596e-17 -1 1 7.02666e-17 1283 3359.16)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path8_fill" transform="matrix(5.33596e-17 -1 1 7.02666e-17 1283 3389)"
                                         fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path9_fill"
                                         transform="matrix(6.10854e-17 -1 1 6.13796e-17 2607.81 2559)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path10_fill"
                                         transform="matrix(6.10854e-17 -1 1 6.13796e-17 2515.04 2585)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path11_fill"
                                         transform="matrix(6.10854e-17 -1 1 6.13796e-17 2819.3 2611)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path10_fill"
                                         transform="matrix(6.10854e-17 -1 1 6.13796e-17 2508.05 3467)" fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path12_fill" transform="matrix(6.12323e-17 -1 1 6.12323e-17 2564 2986)"
                                         fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path13_fill" transform="matrix(6.12323e-17 -1 1 6.12323e-17 2703 3018)"
                                         fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path14_fill" transform="matrix(6.12323e-17 -1 1 6.12323e-17 1618 3051)"
                                         fill="#000000" opacity=".2"/>
                                </g>
                                <g id="Rectangle 8">
                                    <use href="#path1_fill" transform="translate(2655.7 2217)" fill="#000000" opacity=".2"/>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <path id="path0_fill" d="M 0 0L 8.9784 0L 8.9784 558L 0 558L 0 0Z"/>
                            <path id="path1_fill" d="M 0 0L 8.9784 0L 8.9784 261L 0 261L 0 0Z"/>
                            <path id="path2_fill" d="M 0 0L 8.9784 0L 8.9784 376L 0 376L 0 0Z"/>
                            <path id="path3_fill" d="M 0 0L 7.9808 0L 7.9808 271L 0 271L 0 0Z"/>
                            <path id="path4_fill" d="M 0 0L 8.9784 0L 8.9784 816L 0 816L 0 0Z"/>
                            <path id="path5_fill" d="M 0 0L 8.9784 0L 8.9784 271L 0 271L 0 0Z"/>
                            <path id="path6_fill" d="M 0 0L 10 0L 10 570.628L 0 570.628L 0 0Z"/>
                            <path id="path7_fill" d="M 0 0L 10.3279 0L 10.3279 430.963L 0 430.963L 0 0Z"/>
                            <path id="path8_fill" d="M 0 0L 10 0L 10 656.421L 0 656.421L 0 0Z"/>
                            <path id="path9_fill" d="M 0 0L 9 0L 9 338.187L 0 338.187L 0 0Z"/>
                            <path id="path10_fill" d="M 0 0L 9 0L 9 430.963L 0 430.963L 0 0Z"/>
                            <path id="path11_fill" d="M 0 0L 9 0L 9 126.695L 0 126.695L 0 0Z"/>
                            <path id="path12_fill" d="M 0 0L 10 0L 10 374L 0 374L 0 0Z"/>
                            <path id="path13_fill" d="M 0 0L 10 0L 10 235L 0 235L 0 0Z"/>
                            <path id="path14_fill" d="M 0 0L 10 0L 10 667L 0 667L 0 0Z"/>
                        </defs>
                    </svg>
                </div>
                <div className="Sideoverlay">
                    <div className="Menuicon">
                        <img src={menuicon} height='50px'></img>
                    </div>
                </div>
                <div className="Homeicon">
                    <img src={homeicon} height='50px'></img>
                </div>
            </div>
        );
    }
}

export default Overlay;
