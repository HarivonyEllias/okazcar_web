import React, {useState,useEffect} from "react";
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

function AnnonceAttente(){
    const [annonces, setAnnonceAttente] = useState([]);
    //const token = useAuthHeader();
    const token='Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6Im1haGZpdGFoaWFuYUBnbWFpbC5jb20iLCJpYXQiOjE3MDc1MDI5NzMsImV4cCI6MTcwNzUxMzc3M30.rbjEgNM59djjMMSUftyhupcLLeDM3eQzuKZFaUSTGBk';

    useEffect(() => {
        listAnnonceAttente();
    }, []);

    const listAnnonceAttente = () => {
        axios.get('https://okazcar.up.railway.app/voitureUtilisateurs_not_validated', {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          console.log('API Response:', response.data); 
          setAnnonceAttente(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des anonnces en attentes', error);
        });
      };

    return(
        <div>
            {annonces.map(annonce => (
                <div key={annonce.voitureUtilisateur.id} className="featured-cars-content" style={{ boxShadow: "0px 14px 37px -6px", width: "350px", display: "flex", justifyContent: "center" }}>
                    <div className="single-featured-cars" style={{ borderRadius: "0px", width: "300px", margin: "5px" }}>
                        <h4>{annonce.voitureUtilisateur.utilisateur.username}</h4>
                        <div className="featured-img-box">
                            <div className="featured-cars-img">
                            <img src={`data:image/png;base64,${annonce.voitureImage.imagesBytes[0]}`} alt="cars" />
                            </div>
                            <div className="featured-model-info">
                                <p>{annonce.voitureUtilisateur.voiture.description}</p>
                            </div>
                        </div>
                        <div className="featured-cars-txt">
                            <h2>{annonce.voitureUtilisateur.voiture.nom}</h2>
                            <h3>{annonce.voitureUtilisateur.prix} {annonce.voitureUtilisateur.devise.nom}</h3>
                            <p>{annonce.voitureUtilisateur.voiture.localisation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AnnonceAttente;