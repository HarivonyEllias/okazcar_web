import React from "react";
import "../assets/css/backoffice.css";

export default function BackOfficeNav({ idactive, mainComponent: MainComponent }){
    const index=["","","","","","","",""];
    index[idactive] = "active";
    return(
        <body id="body-pd">
            <header className="header" id="header">
                <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
                {/* <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div> */}
            </header>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div> 
                        <a href="#" className="nav_logo">
                            <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Okazcar Office</span>
                        </a>
                        <div className="nav_list">
                            <a href="#" className={`nav_link ${index[0]}`}><i className='bx bx-grid-alt nav_icon'></i><span className="nav_name">Liste</span></a>
                            <a href="#" className={`nav_link ${index[1]}`}><i className='bx bx-grid-alt nav_icon'></i><span className="nav_name">Statistiques</span></a>
                            <a href="#" className={`nav_link ${index[2]}`}> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Categorie</span> </a>
                            <a href="#" className={`nav_link ${index[3]}`}> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Marque</span> </a>
                            <a href="#" className={`nav_link ${index[4]}`}> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Modele</span> </a>
                            <a href="#" className={`nav_link ${index[5]}`}> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Type</span> </a>
                            <a href="#" className={`nav_link ${index[6]}`}> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Devise</span></a>
                            <a href="#" className={`nav_link ${index[7]}`}> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Commision</span></a>
                        </div>
                    </div> 
                    <a href="#" className="nav_link"><i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span></a>
                </nav>
            </div>
            <div style={{margin:"5% 0px 0px 0px"}}></div>
            {/* <div className="height-100 bg-light">
                {MainComponent && <MainComponent />}
            </div> */}
        </body>
    );
}
