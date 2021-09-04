import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div class="overlay overlay-lg">
                    <img src="./img/shapes/square.png" class="shape square" alt="" />
                    <img src="./img/shapes/circle.png" class="shape circle" alt="" />
                    <img
                        src="./img/shapes/half-circle.png"
                        class="shape half-circle1"
                        alt=""
                    />
                    <img
                        src="./img/shapes/half-circle.png"
                        class="shape half-circle2"
                        alt=""
                    />
                    <img src="./img/shapes/x.png" class="shape xshape" alt="" />
                    <img src="./img/shapes/wave.png" class="shape wave wave1" alt="" />
                    <img src="./img/shapes/wave.png" class="shape wave wave2" alt="" />
                    <img src="./img/shapes/triangle.png" class="shape triangle" alt="" />
                    <img src="./img/shapes/letters.png" class="letters" alt="" />
                    <img src="./img/shapes/points1.png" class="points points1" alt="" />
                </div>

                <nav>
                    <div class="container">
                        <div class="logo">
                            <img src="./img/logo.png" alt="" />
                        </div>

                        <div class="links">
                            <ul>
                                <li>
                                    <a href="#header">Home</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                                {/* <li>
                                    <a href="#hireme" class="active">Hire me</a>
                                </li> */}
                            </ul>
                        </div>

                        <div class="hamburger-menu">
                            <div class="bar"></div>
                        </div>
                    </div>
                </nav>

                <div class="header-content">
                    <div class="container grid-2">
                        <div class="column-1">
                            <h1 class="header-title">Hau Nguyen</h1>
                            <p class="text">
                                Hello, I'm Hau Nguyen, web developer. 
                            </p>
                            <a href="#" class="btn">Contact Now</a>
                        </div>

                        <div class="column-2 image">
                            <img
                                src="./img/shapes/points2.png"
                                class="points points2"
                                alt=""
                            />
                            <img src="./img/person.jpg" class="img-element z-index radiusx" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;