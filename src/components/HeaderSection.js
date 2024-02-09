import React, { useState } from "react";
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
import Modal from "./Modal";


export default function HeaderSection({height}){
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLoginClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return(
        <>
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
                                    <li class=" scroll active"><a href="/">accueil</a></li>
                                    <li class="scroll"><a href="/messages">message-box</a></li>
                                    <li class="scroll"><a href="/profil">profil</a></li>
                                    <li class="scroll"><a href="#new-cars">new cars</a></li>
                                    <li class="scroll"><a href="#brand">brands</a></li>
                                    <li className="scroll">
                                        <a href="#contact" style={{ borderStyle: "double", height: "fit-content" }} onClick={handleLoginClick}>
                                            <i className="fa fa-user"></i> Se connecter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                </div>
                <div class="clearfix"></div>
            </div>


            {/* Regulateur taille header */}
            <div class="container" style={{height:height}}></div>
        </section>  
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </>
    )
}