import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="grid-4">
                        <div class="grid-4-col footer-about">
                            <h3 class="title-sm">About</h3>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                                officiis quo officia quia?
                            </p>
                        </div>

                        <div class="grid-4-col footer-links">
                            <h3 class="title-sm">Links</h3>
                            <ul>
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
                                    <a href="#testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div class="grid-4-col footer-links">
                            <h3 class="title-sm">Services</h3>
                            <ul>
                                <li>
                                    <a href="#">Web Design</a>
                                </li>
                                <li>
                                    <a href="#">Web Dev</a>
                                </li>
                                <li>
                                    <a href="#">App Design</a>
                                </li>
                                <li>
                                    <a href="#">Marketing</a>
                                </li>
                                <li>
                                    <a href="#">UI Design</a>
                                </li>
                            </ul>
                        </div>

                        <div class="grid-4-col footer-newstletter">
                            <h3 class="title-sm">Subscribe</h3>
                            <p class="text">
                                Lorem ipsum dolor, sit amet ipsum dolor sit amet.
                            </p>
                            <div class="footer-input-wrap">
                                <input type="email" class="footer-input" placeholder="Email" />
                                <a href="#" class="input-arrow">
                                    <i class="fas fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-footer">
                        <div class="copyright">
                            <p class="text">
                                Copyright&copy;2020 All rights reserved | Made by
                                <span> Hau Nguyen</span>
                            </p>
                        </div>

                        <div class="followme-wrap">
                            <div class="followme">
                                <h3>Follow me</h3>
                                <span class="footer-line"></span>
                                <div class="social-media">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="back-btn-wrap">
                                <a href="#" class="back-btn">
                                    <i class="fas fa-chevron-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;