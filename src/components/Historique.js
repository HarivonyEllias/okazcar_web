import React, {useState,useEffect } from "react";
import axios from 'axios';
import {useAuthHeader} from "react-auth-kit";

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
import "../assets/css/profilAnnonce.css";

function Historique({owner}){
    const [historiques, setHistorique] = useState([]);
    // const token = useAuthHeader();
    const token='Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6Im1haGZpdGFoaWFuYUBnbWFpbC5jb20iLCJpYXQiOjE3MDc1MDI5NzMsImV4cCI6MTcwNzUxMzc3M30.rbjEgNM59djjMMSUftyhupcLLeDM3eQzuKZFaUSTGBk';

    useEffect(() => {
        listHistorique();
    }, []);

    const listHistorique = () => {
        axios.get('https://okazcar.up.railway.app/v_annonces_vendu', {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          console.log('API Response:', response.data); 
          setHistorique(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des historiques', error);
        });
      };

      return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {historiques.map(annonce => (
                <div key={annonce.idAnnonce} className="featured-card">
                    <div className="featured-card-content">
                        <h4>{annonce.vendeurNom}</h4>
                        <div className="featured-img-box">
                            <div className="featured-cars-img">
                                {/* <img src={`data:image/png;base64,${annonce.voitureImage.imagesBytes[0]}`} alt="cars" /> */}
                            </div>
                            <div className="featured-model-info">
                                <p>{annonce.description}</p>
                            </div>
                        </div>
                        <div className="featured-cars-txt">
                            <h2>{annonce.voiture}</h2>
                            <h3>{annonce.prix}</h3>
                            <p>{annonce.localisation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    
}
export default Historique;