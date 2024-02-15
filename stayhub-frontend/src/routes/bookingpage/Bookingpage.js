import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbars from '../../components/navbar/Navbars';
import './Bookingpage.css'; // Importa il file CSS di Bookingpage

const BookingPage = () => {
  const [bookingParams, setBookingParams] = useState({});
  const [placesArray, setPlacesArray] = useState([]);
  const [user, setUser] = useState("");
  const [placeid, setPlaceid] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      createdAt: decodeURIComponent(urlParams.get("createdAt")),
      date: decodeURIComponent(urlParams.get("date")),
      description: decodeURIComponent(urlParams.get("description")),
      host: decodeURIComponent(urlParams.get("host")),
      image: decodeURIComponent(urlParams.get("image")),
      place: decodeURIComponent(urlParams.get("place")),
      price: decodeURIComponent(urlParams.get("price")),
      title: decodeURIComponent(urlParams.get("title")),
    };
    
    console.log(urlParams);
    setBookingParams(params);
  }, []);
  const book = async () => {
    try {
     ;
      setPlacesArray(response.data);
      const response = await axios.post("http://localhost:3030/booking/book", {
      user,
      placeid,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="booking-page">
      <Navbars />
      <div className="booking-container">
        <h2>Effettua la tua prenotazione</h2>
        <img src={bookingParams.image} alt={bookingParams.title}  width={"300px"}/>
        <p>{bookingParams.description}</p>
        <p>Host: {bookingParams.host}</p>
        <p>Place: {bookingParams.place}</p>
        <p>Price: {bookingParams.price}</p>
        <button onClick={()=>book()}> Prenota</button>
      </div>
    </div>
  );
};

export default BookingPage;
