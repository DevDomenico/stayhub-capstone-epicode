import React, { useState } from "react";
import axios from "axios";
import Navbars from "../../components/navbar/Navbars";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    console.log({
      email,
      password,
    });
    try {
      const response = await axios.post("http://localhost:3030/users/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

 

  return (
    <div className="login-page">
      <Navbars />
      <div className="login-container">
        <div className="login-content">
          <h2>Benvenuto su StayHub!</h2>
          <p>StayHub offre una vasta gamma di opzioni, inclusi appartamenti, case vacanze e camere in affitto, garantendo un'esperienza utente intuitiva e coinvolgente.</p>
          <p>Accedi o registrati per iniziare a esplorare le nostre offerte e prenotare la tua prossima avventura!</p>
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
          <button onClick={() => navigate("/register")}>Registrati</button>
          <button onClick={ handleLogin}>Accedi</button>
                       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
