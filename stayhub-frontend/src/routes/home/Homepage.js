import React, { useState } from "react";
import "./Homepage.css";
import Navbars from "../../components/navbar/Navbars";
import Footer from "../../components/footer/Footer"; 

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");

  const placesArray = [
    {
      id: "1",
      place: "Roma",
      description: "La città eterna",
      price: "€100 a notte",
      date: "12-15 Febbraio",
      title: "Appartamento nel centro storico",
      image: "https://www.archeoroma.it/wp-content/uploads/2019/03/hotel-5-stelle-roma.jpg",
    
      host: "Mario"
    },

    {
      id: "2",
      place: "Milano",
      description: "La capitale della moda",
      price: "€120 a notte",
      date: "18-22 Marzo",
      title: "appartamento con terrazza panoramica",
      image: "https://siviaggia.it/wp-content/uploads/sites/2/2020/09/milano-bosco-verticale-garibaldi-isola-design.jpg",
     
      host: "Luigi"
    },
    {
      id: "3",
      place: "Napoli",
      description: "Il cuore pulsante del sud Italia",
      price: "€80 a notte",
      date: "8-12 Aprile",
      title: "Appartamento con vista sul golfo",
      image: "https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/165/2016/07/07101558/Hotel_Vesuvio_slideshow1.jpg",
      
      host: "Giovanna"
    },
    {
      id: "4",
      place: "Torino",
      description: "Culla dell'industria automobilistica",
      price: "€90 a notte",
      date: "15-20 Maggio",
      title: "Loft in centro con terrazza",
      image: "https://www.kayak.it/rimg/himg/a7/8b/ff/leonardo-81676-156730596-960621.jpg?width=1366&height=768&crop=true",
      category: "Città",
      host: "Carlo"
    },
    {
      id: "5",
      place: "Palermo",
      description: "Arte, storia e cucina siciliana",
      price: "€110 a notte",
      date: "1-7 Giugno",
      title: "Villetta tradizionale in centro",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/52497209.jpg?k=3bbf040b507011a22f40eaa2e4c46378b1a3a84097b4e8d2d7f0d3482a4ed4e2&o=&hp=1",
     
      host: "Maria"
    },
    {
      id: "6",
      place: "Genova",
      description: "La Superba, tra mare e montagna",
      price: "€95 a notte",
      date: "10-15 Luglio",
      title: "Appartamento con vista sul porto",
      image: "https://www.raggidisolebologna.it/uploads/contenuti/20170224-181325-ingresso4-media.jpg",
     
      host: "Giuseppe"
    },
    {
      id: "7",
      place: "Bologna",
      description: "Cultura, università e ottima cucina",
      price: "€100 a notte",
      date: "18-22 Agosto",
      title: "Casetta nel centro storico",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/335329340.jpg?k=608b6c6333c60ce43cffd4914f05b8ac0fdc04f672b8b7b9c043e160ba2e7e33&o=",
      
      host: "Antonio"
    },
    {
      id: "8",
      place: "Firenze",
      description: "Culla del Rinascimento",
      price: "€130 a notte",
      date: "5-10 luglio",
      title: "Appartamento d'epoca con giardino",
      image: "https://lh3.googleusercontent.com/proxy/AKynXHBrHv9kj91_dQbd-j9HhAd4jo6B_W17LY4t5nS9vuQ3tBXl1IlEGlerdatH5y7Ul9C6IJown_5kiD6yrPNk6rY12buv1SE9nXzFfR3sInehXayaGdde6N8AFUEXN8iwXJifx_bS1LqIw2xudBrx",
      
      host: "Elena"
    },
    {
      id: "9",
      place: "Bari",
      description: "Porta d'Oriente",
      price: "€85 a notte",
      date: "15-20 Ottobre",
      title: "Appartamento con piscina",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/6a/dc/b9/piscina-esterna-urban.jpg?w=700&h=-1&s=1",
     
      host: "Roberto"
    },
    {
      id: "10",
      place: "Catania",
      description: "Tra l'Etna e il mare",
      price: "€95 a notte",
      date: "1-5 marzo",
      title: "Appartamento moderno con balcone",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f2/0b/8a/b-b-miro.jpg?w=1000&h=-1&s=1",
     
      host: "Giulia"
    },
    {
      id: "11",
      place: "Venezia",
      description: "La città sull'acqua",
      price: "€150 a notte",
      date: "10-15 maggio",
      title: "Casa sul Canal Grande",
      image: "https://www.rialtohotel.com/wp-content/uploads/2016/09/hotel-rialto-home.jpg",
    
      host: "Paolo"
    },
  
    
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredPlaces = placesArray.filter((item) => {
    if (inputValue === "") {
      return true;
    } else if (item.place.toLowerCase().includes(inputValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Navbars />
      <div className="m-2 mt-5 homepage">
        <div className="d-flex mt-4 justify-content-center flex-wrap">
          {filteredPlaces.map((item) => (
            <div
              className="m-3 border-0 mt-4 card"
              key={item.id}
              style={{ display: "inline-block", width: "250px" }}
            >
              <img
                className="rounded"
                src={item.image}
                alt={item.place}
                width={"100%"}
                height={"180px"}
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{fontWeight: "bold"}}>{item.place}</h6>
                <p className="card-text mb-1">Date: {item.date}</p>
                <p className="card-text mb-1">Title: {item.title}</p>
                <p className="card-text mb-1">Host: {item.host}</p>
                <p className="card-text mb-1">{item.category}</p>
                <p className="card-text mb-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Homepage;
