import React from "react";
import ProfilContent from "../components/ProfilContent";
import HeaderSection from "../components/HeaderSection";
import AnnonceAttente from "../components/AnnonceAttente";
import Favoris from "../components/Favoris";
import AnnonceProfil from "../components/AnnonceProfil";
import Historique from "../components/Historique";


export default function Profil(){
    return(
        <>
            <HeaderSection height={"20vh"}/>
            <ProfilContent />
            <div >
                <h2>Historique</h2>
                <Historique />
            </div>
            <div >
                <h2>Favoris</h2>
                <Favoris />
            </div>
            <div>
                <h2>Annonce en cours</h2>
                <AnnonceProfil />
            </div>
            <div>
                <h2>Annonce en attente</h2>
                <AnnonceAttente />
            </div>
        </>
    );
}
