/**
 * Created by theon on 6/6/2017.
 */
import React, {Component} from 'react';
import '../App.css';
import logo from './remiixlogo.png';
import reality from './reality.png'
import concepts from './concepts.png'
import favicolor from './favicolor.png';
import tunez from './tunez.png'
import wrdz from './wrdz.png'
import homesvg from './home-back.svg'
import {Link, Route,} from 'react-router-dom'


class Home extends Component {

    constructor() {
        super();
        this.scrollheight = {height: document.body.scrollHeight};
    }

    render() {
        let Subtext = null;
        Subtext = <div className="home-subscribe-text">
            Get dope weekly updates
        </div>;

        const nav = <div className="home-nav-h"><Link to={'/'}> Home</Link> | <Link to={'/about'}> About</Link> | <Link
            to={'/contact'}>Contact</Link></div>;
        const navac = <div className="home-nav-ac"><Link to={'/'}> Home</Link> | <Link to={'/about'}> About</Link> |
            <Link
                to={'/contact'}>Contact</Link></div>;


        const About = <div>
            <div className="home-aboutcard"><div className="home-card-title">About</div>
                <div className="home-aboutgrad">
                </div>
                <div className="home-about-logo">
                    <img  height="100%" src={favicolor}></img>
                </div>
                <div className="home-about-text">
                    Hello! This is remiix.life. Few valuable things in life are straightforward. This site is made by
                    Hope Atina, ME!, to document the exploration
                    of the intersections of our advancing shared human experience through graphics, concepts, words, and
                    sounds. Lol that's jargon for a dope/different project site.
                    Make sure you <a target="blank" href="https://www.getrevue.co/profile/hope/add_subscriber">subscribe</a> to the weekly update newsletter, to follow the journey!
                </div>
            </div>
            {navac} </div>;
        const Contact = <div>
            <div className="home-aboutcard"><div className="home-card-title">Contact</div>
                <div className="home-aboutgrad"></div>
                <div className="home-about-logo">
                    <img  height="100%" src={favicolor}></img>
                </div>
                <div className="home-about-text">
                    You can contact me on:
                    <div> Twitter: <a href="https://twitter.com/The_OnlyHope">@The_OnlyHope</a></div>
                    <div> Medium: <a href="https://medium.com/@The_OnlyHope">@The_OnlyHope</a></div>
                    <div> Email: [firstname][lastname]@gmail.com</div>
                </div>
            </div>
            {navac} </div>;
        const Home = <div>
            <div className="home-subscribe-text">
                <div id="revue-embed">
                    <form action="https://www.getrevue.co/profile/hope/add_subscriber" method="post" id="revue-form"
                          name="revue-form" target="_blank">
                        <div className="revue-form-group">
                            <input className="home-subscribe-input" placeholder="Your Email Address..." type="email"
                                   name="member[email]" id="member_email"></input>
                            <input className="home-submit" type="submit" value="Subscribe" name="member[subscribe]"
                                   id="member_submit"></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className="home-options">

                <Link to="/reality">
                    <div className="option-1"><img alt="athing" src={reality} className="home-img" height="200"></img>
                    </div>
                </Link>
                <Link to="/wrdz">
                    <div className="option-2"><img alt="athing" src={wrdz} className="home-img" height="200"></img>
                    </div>
                </Link>
                <Link to="/concepts">
                    <div className="option-3"><img alt="athing" src={concepts} className="home-img" height="200"></img>
                    </div>
                </Link>
                <Link to="/tunez">
                    <div className="option-4"><img alt="athing" src={tunez} className="home-img" height="200"></img>
                    </div>
                </Link>

            </div>
            {nav}
        </div>;

        const homelogo = <div className="home-logodiv">
            <img alt="logodiv" src={logo} className="home-logo" height={'auto'} width={'auto'}></img>
        </div>;

        const homesvg = <div className="home-svgdiv">
            {/*<object type="image/svg+xml" data={homesvg}>Your browser does not support SVGs</object>*/}
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1659 1365"
                 version="1.1">
                <title>Canvas.svg</title>
                <desc>Created using Figma</desc>
                <g id="Canvas" transform="translate(-3002 -730)">
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path0_fill" transform="translate(3127 1343)" fill="#F9FF70"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path0_fill" transform="translate(4201 1343)" fill="#7C10E1"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path0_fill" transform="translate(3846 1343)" fill="#ABFE59"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path0_fill" transform="translate(3491 1343)" fill="#2E8CE6"/>*/}
                    {/*</g>*/}
                    <g id="Group">
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path1_fill" transform="translate(3190.09 736)" fill="#F9FF70"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path2_fill" transform="translate(3237.86 738)" fill="#2E8CE6"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path3_fill" transform="translate(3285.63 730)" fill="#9B51E0"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path4_fill" transform="translate(4041.98 1824)" fill="#9B51E0"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path5_fill" transform="translate(4089 1301)" fill="#ABFE59"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path6_fill" transform="translate(4136.53 1824)" fill="#F9FF70"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path7_fill"
                                 transform="matrix(5.33596e-17 -1 1 7.02666e-17 3002 1850)"
                                 fill="#9B51E0"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path8_fill"
                                 transform="matrix(5.33596e-17 -1 1 7.02666e-17 3002 1880.16)"
                                 fill="#ABFE59"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path9_fill"
                                 transform="matrix(5.33596e-17 -1 1 7.02666e-17 3002 1910)"
                                 fill="#2E8CE6"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path10_fill"
                                 transform="matrix(6.09385e-17 -1 1 6.15276e-17 4323.63 1080)"
                                 fill="#2E8CE6"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path11_fill"
                                 transform="matrix(6.09385e-17 -1 1 6.15276e-17 4231.07 1106)"
                                 fill="#F9FF70"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path12_fill"
                                 transform="matrix(6.09385e-17 -1 1 6.15276e-17 4534.61 1132)"
                                 fill="#ABFE59"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path11_fill"
                                 transform="matrix(6.09385e-17 -1 1 6.15276e-17 4224.11 1988)"
                                 fill="#F9FF70"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path13_fill"
                                 transform="matrix(6.12323e-17 -1 1 6.12323e-17 3002 1507)"
                                 fill="#2E8CE6"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path13_fill"
                                 transform="matrix(6.12323e-17 -1 1 6.12323e-17 3002 1539)"
                                 fill="#F9FF70"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path13_fill"
                                 transform="matrix(6.12323e-17 -1 1 6.12323e-17 3002 1572)"
                                 fill="#ABFE59"/>
                        </g>
                        <g id="Rectangle 8" className="verticalline">
                            <use href="#path2_fill" transform="translate(4371.4 738)" fill="#ABFE59"/>
                        </g>
                    </g>
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path14_fill" transform="translate(3148 1361)" fill="#FFFFFF"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path14_fill" transform="translate(3510 1361)" fill="#FFFFFF"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path14_fill" transform="translate(3864 1361)" fill="#FFFFFF"/>*/}
                    {/*</g>*/}
                    {/*<g id="Rectangle 7">*/}
                    {/*<use href="#path14_fill" transform="translate(4219 1361)" fill="#FFFFFF"/>*/}
                    {/*</g>*/}
                </g>
                <defs>
                    {/*<path id="path0_fill" d="M 0 0L 329 0L 329 340L 0 340L 0 0Z"/>*/}
                    <path id="path1_fill" d="M 0 0L 8.95681 0L 8.95681 558L 0 558L 0 0Z"/>
                    <path id="path2_fill" d="M 0 0L 8.95681 0L 8.95681 261L 0 261L 0 0Z"/>
                    <path id="path3_fill" d="M 0 0L 8.95681 0L 8.95681 376L 0 376L 0 0Z"/>
                    <path id="path4_fill" d="M 0 0L 7.96161 0L 7.96161 271L 0 271L 0 0Z"/>
                    <path id="path5_fill" d="M 0 0L 9 0L 9 790L 0 790L 0 0Z"/>
                    <path id="path6_fill" d="M 0 0L 8.95681 0L 8.95681 271L 0 271L 0 0Z"/>
                    <path id="path7_fill" d="M 0 0L 10 0L 10 569.255L 0 569.255L 0 0Z"/>
                    <path id="path8_fill" d="M 0 0L 10.3279 0L 10.3279 429.927L 0 429.927L 0 0Z"/>
                    <path id="path9_fill" d="M 0 0L 10 0L 10 654.842L 0 654.842L 0 0Z"/>
                    <path id="path10_fill" d="M 0 0L 9 0L 9 337.373L 0 337.373L 0 0Z"/>
                    <path id="path11_fill" d="M 0 0L 9 0L 9 429.927L 0 429.927L 0 0Z"/>
                    <path id="path12_fill" d="M 0 0L 9 0L 9 126.391L 0 126.391L 0 0Z"/>
                    <path id="path13_fill" d="M 0 0L 10 0L 10 1651.04L 0 1651.04L 0 0Z"/>
                    {/*<path id="path14_fill" d="M 0 0L 294 0L 294 304L 0 304L 0 0Z"/>*/}
                </defs>
            </svg>
        </div>;

        return (
            <div className="App">
                <Route path="/" component={() => homelogo}/>
                <Route exact={true} path="/" component={() => Subtext}/>
                <Route exact={true} path="/" component={() => Home}/>
                <Route path="/about" component={() => About}/>
                <Route path="/contact" component={() => Contact}/>
                {homesvg}

            </div>
        );
    }
}

export default Home;
