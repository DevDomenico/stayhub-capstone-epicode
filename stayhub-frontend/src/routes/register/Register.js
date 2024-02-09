import React, { useState } from "react";
import axios from "axios";
import Navbars from "../../components/navbar/Navbars";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [createdAt, setCreatedAt] = useState("");


    const handleRegister = async () => {
        setCreatedAt(new Date());
        try {
            const response = await axios.post("http://localhost:3030/users/register", {
                name,
                surname,
                email,
                password,
                createdAt

            });
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    

    return (
        <div className="register-page">
            <Navbars />
            <div className="register-container">
                <div className="register-content">
                    <h2>Benvenuto su StayHub!</h2>
                    <p>StayHub offre una vasta gamma di opzioni, inclusi appartamenti, case vacanze e camere in affitto, garantendo un'esperienza utente intuitiva e coinvolgente.</p>
                    <p>Accedi o registrati per iniziare a esplorare le nostre offerte e prenotare la tua prossima avventura!</p>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="button-container">
                        
                        <button onClick={handleRegister}>Registrati</button>
                        <button onClick={() => navigate("/login")}>Accedi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;