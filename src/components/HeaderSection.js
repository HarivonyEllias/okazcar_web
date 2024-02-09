import React from "react";
import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/flaticon.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";


export default function HeaderSection({height}){
    return(
        <section id="home" class="welcome-hero">

            <div class="top-area">
                <div class="header-area">
                    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div class="container">

                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <a class="navbar-brand" href="/">Okazcar<span></span></a>

                            </div>

                            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li class=" scroll active"><a href="/">home</a></li>
                                    <li class="scroll"><a href="/messages">message-box</a></li>
                                    <li class="scroll"><a href="#featured-cars">featured cars</a></li>
                                    <li class="scroll"><a href="#new-cars">new cars</a></li>
                                    <li class="scroll"><a href="#brand">brands</a></li>
                                    <li class="scroll"><a href="#contact" style={{borderStyle:"double",height:"fit-content"}}><i class="fa fa-user"></i> Log In</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                </div>
                <div class="clearfix"></div>

            </div>

            <div class="container" style={{height:height}}>
                <div class="welcome-hero-txt">
                    {/* <h2 style={{color:"#4e4ffa"}}>get your desired car in resonable price</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua. 
                    </p>
                    <button class="welcome-btn" onclick="window.location.href='#'">contact us</button> */}
                </div>
            </div>

        </section>  
    )
}