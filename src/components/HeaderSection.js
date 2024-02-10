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
import {useSignOut} from "react-auth-kit";
import {useNavigate} from "react-router-dom";


export default function HeaderSection({height}){
    const logout = useSignOut()
    const navigate = useNavigate()
    const handleLogoutClick = (event) => {
        event.preventDefault()
        const resp = window.confirm("Voulez-vous vraiment vous déconnecter ?")
        if (resp) {
            logout()
            navigate("/login")
        }
    };



    return(
        <>
        <section id="home" className="welcome-hero">

            <div className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div className="container">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="/">Okazcar<span></span></a>

                            </div>

                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className=" scroll active"><a href="/">accueil</a></li>
                                    <li className="scroll"><a href="/messages">message-box</a></li>
                                    <li className="scroll"><a href="/profil">profil</a></li>
                                    <li className="scroll">
                                        <a href="#" style={{ borderStyle: "double", height: "fit-content" }} onClick={handleLogoutClick}>
                                            <i className="fa fa-sign-out"></i> Se déconnecter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                </div>
                <div className="clearfix"></div>
            </div>


            {/* Regulateur taille header */}
            <div className="container" style={{height:height}}></div>
        </section>
        </>
    )
}