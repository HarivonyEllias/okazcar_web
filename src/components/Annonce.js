import React, { useState, useEffect } from 'react';

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
import {useAuthHeader} from "react-auth-kit";
//get all Annonce
function getAllAnnonce(token) {
    return fetch('https://okazcar.up.railway.app/voitureUtilisateurs_validated',{
      method: 'GET',
      headers: {
        'Authorization': token()
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching annonces:', error);
        throw error; 
      });
  }

function Annonce({owner}){
    const token = useAuthHeader()
    const [annonces, setAnnonce] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        //Annonce
        useEffect(() => {
            const fetchAnnonce= async () => {
                try {
                    const typeData = await getAllAnnonce(token);
                    setAnnonce(typeData);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchAnnonce();
        }, []);

        return (
            <>
                {annonces.map((annonce , key) => (
                    <div key={key} className="featured-cars-content" style={{ boxShadow: "0px 14px 37px -6px", width: "350px", display: "flex", justifyContent: "center" }}>
                        <div className="single-featured-cars" style={{ borderRadius: "0px", width: "300px", margin: "5px" }}>
                            <h4>{owner}</h4>
                            <div className="featured-img-box">
                                <div className="featured-cars-img">
                                    <img src={`data:image/png;base64,${annonce.voitureImage.imagesBytes[0]}`} alt="cars" />
                                </div>
                                <div className="featured-model-info">
                                    <p>details voiture</p>
                                </div>
                            </div>
                            <div className="featured-cars-txt" key={annonce.voitureUtilisateur.id}>
                                <h2>
                                    <a href="#">
                                        {annonce.voitureUtilisateur.voiture.modele.marque.nom} {annonce.voitureUtilisateur.voiture.modele.nom} {annonce.voitureUtilisateur.voiture.nom}
                                    </a>
                                </h2>
                                <h3>{annonce.voitureUtilisateur.prix} {annonce.voitureUtilisateur.devise.nom}</h3>
                                <p>{annonce.voitureUtilisateur.voiture.description}.</p>
                                <p>{annonce.voitureUtilisateur.voiture.localisation}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <button style={{ backgroundColor: "blue", color: "white", width: "300px",height:"30px", borderRadius: "150px" }}>CONTACTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );        
}
export default Annonce;