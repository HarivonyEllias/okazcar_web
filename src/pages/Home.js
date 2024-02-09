import React from "react";
import Annonce from "../components/Annonce";
import FilterForm from "../components/FilterForm";
import HeaderSection from "../components/HeaderSection";

function Home(){
    const gridContainerStyle = {
        margin: "15% auto 0% auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(20px, 1fr))", // Adjust the number of columns and minmax values as needed
        gridGap: "16px", // Adjust the gap between grid items as needed
        backgroundColor: "white",
        width: "75%",
        height: "75vh",
        bottom: "16px",
        zIndex: "1000",
        position: "",
        borderRadius: "10px",
        boxShadow: "0px 5px 25px 1px black",
        overflow: "scroll",
      };
    return(
        <>
            <HeaderSection />
            <FilterForm />
            <div style={gridContainerStyle}>
                <Annonce/>
            </div>
        </>
    )
}

export default Home;