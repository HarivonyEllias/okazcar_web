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

function Annonce(){
    return(
            <div class="featured-cars-content" style={{boxShadow: "0px 14px 37px -6px",width:"350px",display:"flex",justifyContent:"center"}}>
                <div class="single-featured-cars" style={{
                        
                        borderRadius: "0px",
                        width: "300px",
                        margin: "5px"
                    }}>
                    <div class="featured-img-box">
                        <div class="featured-cars-img">
                            <img src="../assets/images/featured-cars/fc1.png" alt="cars" />
                        </div>
                        <div class="featured-model-info">
                            <p>
                                details voiture
                            </p>
                        </div>
                    </div>
                    <div class="featured-cars-txt">
                        <h2><a href="#">BMW 6-series gran coupe</a></h2>
                        <h3>$89,395</h3>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
                        </p>
                    </div>
                    <div>
                        <button style={{backgroundColor:"blue"}}>CONTACT</button>
                    </div>
                </div>
            </div>
    )
}
export default Annonce;