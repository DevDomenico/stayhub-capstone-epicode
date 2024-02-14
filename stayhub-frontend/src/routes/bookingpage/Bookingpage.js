import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbars from '../../components/navbar/Navbars';
import './Bookingpage.css'; // Importa il file CSS di Bookingpage

const BookingPage = () => {
  const [bookingParams, setBookingParams] = useState({});

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

  return (
    <div className="booking-page">
      <Navbars />
      <div className="booking-container">
        <h2>Effettua la tua prenotazione</h2>
        <img src={bookingParams.image} alt={bookingParams.title} />
        <p>{bookingParams.description}</p>
        <p>Host: {bookingParams.host}</p>
        <p>Place: {bookingParams.place}</p>
        <p>Price: {bookingParams.price}</p>
        <button>Prenota</button>
      </div>
    </div>
  );
};

export default BookingPage;
