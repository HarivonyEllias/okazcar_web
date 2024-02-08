import React from "react";
import ProfilContent from "../components/ProfilContent";
import HeaderSection from "../components/HeaderSection";
import NiceList from "../components/NiceList";

export default function Profil(){
    return(
        <>
            <HeaderSection height={"20vh"}/>
            <ProfilContent />
            <div >
                <h2>Historique</h2>
                <NiceList />
            </div>
            <div >
                <h2>Favoris</h2>
                <NiceList />
            </div>
            <div>
                <h2>Annonce en cours</h2>
                <NiceList />
            </div>
            <div>
                <h2>Annonce en attente</h2>
                <NiceList />
            </div>
        </>
    );
}