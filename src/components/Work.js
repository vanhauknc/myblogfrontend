import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <section class="portfolio section" id="portfolio">
                <div class="background-bg">
                    <div class="overlay overlay-sm">
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
                        <img src="./img/shapes/square.png" class="shape square" alt="" />
                        <img src="./img/shapes/wave.png" class="shape wave" alt="" />
                        <img src="./img/shapes/circle.png" class="shape circle" alt="" />
                        <img
                            src="./img/shapes/triangle.png"
                            class="shape triangle"
                            alt=""
                        />
                        <img src="./img/shapes/x.png" class="shape xshape" alt="" />
                    </div>
                </div>

                <div class="container">
                    <div class="section-header">
                        <h3 class="title" data-title="My works">Portfolio</h3>
                    </div>

                    <div class="section-body">
                        <div class="filter">

                        </div>

                        <div class="grid">

                            <div class="grid-item webdev">
                                <div class="gallery-image">
                                    <img src="./img/portfolio/port2.png" alt="" />
                                    <div class="img-overlay">
                                        <div class="plus"></div>
                                        <div class="img-description">
                                            <h3>Web Development</h3>
                                            <h5>View Demo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid-item webdev">
                                <div class="gallery-image">
                                    <img src="./img/portfolio/port5.jpg" alt="" />
                                    <div class="img-overlay">
                                        <div class="plus"></div>
                                        <div class="img-description">
                                            <h3>Web Development</h3>
                                            <h5>View Demo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid-item webdev">
                                <div class="gallery-image">
                                    <img src="./img/portfolio/port6.jpg" alt="" />
                                    <div class="img-overlay">
                                        <div class="plus"></div>
                                        <div class="img-description">
                                            <h3>Web Development</h3>
                                            <h5>View Demo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="more-folio">
                            <a href="#" class="btn">More Folio</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;