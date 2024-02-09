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

//get all Annonce
function getAllAnnonce() {
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6Im1haGZpdGFoaWFuYUBnbWFpbC5jb20iLCJpYXQiOjE3MDc0NjMzODgsImV4cCI6MTcwNzQ3NDE4OH0.Z9O3-40WL2_uT-MsLgQsEvht4nwFe9YOatkU4Tqr2Wo';
   
    return fetch('https://okazcar.up.railway.app/voitureUtilisateurs_validated',{
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching annonces:', error);
        throw error; 
      });
  }

function Annonce({owner}){
    const [annonces, setAnnonce] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        //Annonce
        useEffect(() => {
            const fetchAnnonce= async () => {
                try {
                    const typeData = await getAllAnnonce();
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
                {annonces.map((annonce) => (
                    <div class="featured-cars-content" style={{ boxShadow: "0px 14px 37px -6px", width: "350px", display: "flex", justifyContent: "center" }}>
                        <div class="single-featured-cars" style={{ borderRadius: "0px", width: "300px", margin: "5px" }}>
                            <h4>{owner}</h4>
                            <div class="featured-img-box">
                                <div class="featured-cars-img">
                                    <img src={`data:image/png;base64,${annonce.voitureImage.imagesBytes[0]}`} alt="cars" />
                                </div>
                                <div class="featured-model-info">
                                    <p>details voiture</p>
                                </div>
                            </div>
                            <div class="featured-cars-txt" key={annonce.voitureUtilisateur.id}>
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