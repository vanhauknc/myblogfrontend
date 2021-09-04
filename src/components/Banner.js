import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <section class="records">
                <div class="overlay overlay-sm">
                    <img src="./img/shapes/square.png" alt="" class="shape square1" />
                    <img src="./img/shapes/square.png" alt="" class="shape square2" />
                    <img src="./img/shapes/circle.png" alt="" class="shape circle" />
                    <img
                        src="./img/shapes/half-circle.png"
                        alt=""
                        class="shape half-circle"
                    />
                    <img src="./img/shapes/wave.png" alt="" class="shape wave wave1" />
                    <img src="./img/shapes/wave.png" alt="" class="shape wave wave2" />
                    <img src="./img/shapes/x.png" alt="" class="shape xshape" />
                    <img src="./img/shapes/triangle.png" alt="" class="shape triangle" />
                </div>

                <div class="container">
                
                </div>
            </section>
        );
    }
}

export default Banner;