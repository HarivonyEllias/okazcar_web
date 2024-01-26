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

function Annonce({owner}){
    return(
        <div class="featured-cars-content" style={{boxShadow: "0px 14px 37px -6px",width:"350px",display:"flex",justifyContent:"center"}}>
            <div class="single-featured-cars" style={{
                
                borderRadius: "0px",
                width: "300px",
                margin: "5px"
            }}>
                <h4>{owner}</h4>
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
                <div style={{display:"flex"}}>
                    <div>
                        <button style={{backgroundColor:"blue",color:"white",width:"100px",borderRadius:"150px"}}>CONTACT</button>
                    </div>
                    <div>
                        <button style={{marginLeft:"35px", backgroundColor:"green",color:"white",width:"150px",borderRadius:"40px"}}>VENDU</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Annonce;