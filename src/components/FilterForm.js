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

//gett all categorie
function getAllCategorie(token) {
    return fetch('https://okazcar.up.railway.app/categories',{
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching categories:', error);
        throw error; 
      });
}

//get all modele
function getAllModele(token) {
    return fetch('https://okazcar.up.railway.app/modeles',{
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching modeles:', error);
        throw error; 
      });
}

//get all type
function getAllType(token) {
    return fetch('https://okazcar.up.railway.app/types',{
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching types:', error);
        throw error; 
      });
}

//get all localisation
function getAllVoiture(token) {
    return fetch('https://okazcar.up.railway.app/voitureUtilisateurs_validated',{
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching voitureUtilisateurs_validated:', error);
        throw error; 
    });
}

//valider
function submitForm(params, token) {
    const queryParams = new URLSearchParams(params).toString();
    const url = `https://okazcar.up.railway.app/v_annonces_search?${queryParams}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Response data:', data);
        return data;
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        throw error;
    });
}


export default function FilterForm(){
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6Im1haGZpdGFoaWFuYUBnbWFpbC5jb20iLCJpYXQiOjE3MDc0NjMzODgsImV4cCI6MTcwNzQ3NDE4OH0.Z9O3-40WL2_uT-MsLgQsEvht4nwFe9YOatkU4Tqr2Wo';
    const [categories, setCategorie] = useState([]);
    const [types, setType] = useState([]);
    const [modeles, setModele] = useState([]);
    const [voitures, setVoiture] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    //Categorie
    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                const categorieData = await getAllCategorie(token);
                setCategorie(categorieData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategorie();
    }, []);

    // Type
    useEffect(() => {
        const fetchType= async () => {
            try {
                const typeData = await getAllType(token);
                setType(typeData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchType();
    }, []);

    //Modele
    useEffect(() => {
        const fetchModele= async () => {
            try {
                const typeData = await getAllModele(token);
                setModele(typeData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchModele();
    }, []);

    //Voitures
    useEffect(() => {
        const fetchVoiture= async () => {
            try {
                const typeData = await getAllVoiture(token);
                setVoiture(typeData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchVoiture();
    }, []);

    //Valider
    const [formData, setFormData] = useState({
        categorie: '',
        localisation: '',
        modele: '',
        couleur: '',
        type: ''
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await submitForm(formData, token);
            console.log('Form submitted successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Error submitting form:', error.toString());
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log('event '+event.target);
        setFormData({ ...formData, [name]: value });
    };


    return(
            <div class="container" >
                <div class="row">
                    <div class="col-md-12">
                        <div class="model-search-content" style={{bottom:"-150px",zIndex:"1000"}}>
                        <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>Catégorie</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-categorie"
                                                name="categorie"
                                                onChange={handleChange}
                                                value={formData.categorie}
                                            >
                                                {categories.map((categorie) => (
                                                    <option
                                                        value={categorie.nom}
                                                    >
                                                        {categorie.nom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                        <h2>Localisation</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-voiture"
                                                name="voiture"
                                                onChange={handleChange}
                                                value={formData.localisation}
                                            >
                                                {voitures.map((voiture) => ( 
                                                    <option
                                                        value={voiture.voitureUtilisateur.voiture.localisation}
                                                    >
                                                        {voiture.voitureUtilisateur.voiture.localisation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>Model</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-modele"
                                                name="modele"
                                                onChange={handleChange}
                                                value={formData.modele}
                                            >
                                            {modeles.map((modele) => (
                                                <option
                                                    value={modele.nom}
                                                >
                                                        {modele.nom}
                                                </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                        <h2>Couleur</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-couleur"
                                                name="couleur"
                                                onChange={handleChange}
                                                value={formData.couleur}
                                            >
                                                <option value="ford">Violet</option>
                                                <option value="default">Rouge</option>
                                                <option value="kia-rio">Bleu</option>
                                                <option value="mitsubishi">Blanc</option>
                                                <option value="ford">Noir</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>Type</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-type"
                                                name="type"
                                                onChange={handleChange}
                                                value={formData.type}          
                                            >
                                                {types.map((type) => (
                                                <option
                                                    value={type.nom}
                                                >
                                                    {type.nom}
                                                </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                    <h2>voiture</h2>
                                        <div class="model-select-icon">
                                            <select 
                                                class="form-control"
                                                id="input-voiture"
                                                name="voiture"
                                            >
                                                {voitures.map((voiture, index) => (
                                                    voiture.localisation && (
                                                        <option
                                                            key={index}
                                                            value={voiture.nom}
                                                        >
                                                            {voiture.nom}
                                                        </option>
                                                    )
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="single-model-search text-center">
                                        <button class="welcome-btn model-search-btn" type="submit">
                                            Rechercher
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}