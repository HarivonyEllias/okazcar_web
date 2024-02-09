import React, {useState,useEffect} from "react";
import axios from 'axios';
// import {useAuthHeader} from "react-auth-kit";

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

function Favoris(){
    const [favoris, setFavoris] = useState([]);
    // const token = useAuthHeader();
    const token='Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwic3ViIjoibWFoZXJ5X2ZpdGFoaWFuYUB5YWhvby5jb20iLCJpYXQiOjE3MDc1MDI3NzUsImV4cCI6MTcwNzUxMzU3NX0.Q9Ek9JY93APDHdeCfAL-N-tUqZlcOBUGBkIDl4zjNlc';
    
    useEffect(() => {
        listFavoris();
    }, []);
    
    const listFavoris = () => {
        axios.get('https://okazcar.up.railway.app/annonces_favori', {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          console.log('API Response:', response.data); 
          setFavoris(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des anonnces_favori', error);
        });
      };

      return(
        <div>
            {favoris.map(annonce => (
                <div key={annonce.annonce.voitureUtilisateur.id} className="featured-cars-content" style={{ boxShadow: "0px 14px 37px -6px", width: "350px", display: "flex", justifyContent: "center" }}>
                    <div className="single-featured-cars" style={{ borderRadius: "0px", width: "300px", margin: "5px" }}>
                        <h4>{annonce.annonce.voitureUtilisateur.utilisateur.username}</h4>
                        <div className="featured-img-box">
                            <div className="featured-cars-img">
                            <img src={`data:image/png;base64,${annonce.annonce.voitureImage.imagesBytes[0]}`} alt="cars" />
                            </div>
                            <div className="featured-model-info">
                                <p>{annonce.annonce.voitureUtilisateur.voiture.description}</p>
                            </div>
                        </div>
                        <div className="featured-cars-txt">
                            <h2>{annonce.annonce.voitureUtilisateur.voiture.nom}</h2>
                            <h3>{annonce.annonce.voitureUtilisateur.prix} {annonce.annonce.voitureUtilisateur.devise.nom}</h3>
                            <p>{annonce.annonce.voitureUtilisateur.voiture.localisation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Favoris;