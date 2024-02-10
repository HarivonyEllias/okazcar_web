import React, {useState} from "react";
import "./Login.css"
import axios from "axios";
import {useSignIn} from "react-auth-kit";
import {useNavigate} from "react-router-dom";
export const Login = () => {
    const [error, setError] = useState("")
    const [disable, setDisable] = useState(false)
    const signIn = useSignIn()
    const navigate = useNavigate()
    const handleLogin = async (event) => {
        event.preventDefault()
        setDisable(true)
        const formInformation = new FormData(event.target)
        try {
            let response = await axios.post("https://okazcar.up.railway.app/utilisateur/historicLogin", formInformation)
            response = response.data
            if (response.hasOwnProperty('Data')) {
                signIn({
                    token: response.Data.Token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: { email: event.target.querySelector("[type=email]").value, username: response.Data.Username, image: response.Data.Image }
                });
                navigate("/");
            } else {
                setDisable(false)
                setError(response.Error)
            }
        } catch (e) {
            setDisable(false)
            setError(e.toString())
        }

    }
    return (
        <div className="body__login">
            <div className="container__login">
                <form onSubmit={handleLogin} className="form" id="login">
                    <h1 className="form__title">Okazcar</h1>
                    <h5 style={{fontSize: "2rem"}}>Veuillez entrez le code à 10 chiffres</h5>
                    {error !== "" && <div className="error__login">{error}</div>}
                    <div className="form__input-group">
                        <input type="text" name="codeChiffre" className="form__input" autoFocus
                               placeholder="codeChiffre" id="codeChiffre"/>
                    </div>
                    <div className="form__input-group">
                        <input type="email" name="email" className="form__input" autoFocus placeholder="email"
                               id="codeChiffre"/>
                        <div className="padding"></div>
                        <button className="form__button" disabled={disable} id="loginButton">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}