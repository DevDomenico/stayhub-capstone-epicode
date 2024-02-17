import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbars from "../../components/navbar/Navbars";
import "./Prenotazione.css";

const Prenotazione = () => {
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        const userMail = JSON.parse(sessionStorage.getItem("user"));
        let token = sessionStorage.getItem("token");
        
        axios.get("http://localhost:3030/booking/get", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            const { data } = response;
            const { user, placeid, createdAt } = data;
            
            
           
            
            const placeIds = data.map((element) => element.placeid);
            console.log(placeIds);
            
            axios.get("http://localhost:3030/post/get", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                const filteredData = response.data.filter((item) => placeIds.includes(item.title));
                console.log(filteredData);
                setFilteredPlaces(filteredData);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
        })
        .catch((error) => {
            console.error("Error fetching bookings:", error);
        });
    }, []);

    return (
        <div className="prenotazione-page">
            <Navbars />
            <div className="d-flex  flex-column align-items-center justify-content-center w-100">
                <p className="testo pt-5 mt-3"> Prenotazioni effettuate</p>
                <div className="prenotazioni">
                    {filteredPlaces.map((item) => (
                        <div
                            className="m-3 border-0 mt-4 card"
                            key={item._id}
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
                                <h6 className="card-title mb-1" style={{ fontWeight: "bold" }}>
                                    {item.place}
                                </h6>
                                <p className="card-text mb-1">Date: {new Date(item.date).toLocaleDateString()}</p>
                                <p className="card-text mb-1"> {item.title}</p>
                                <p className="card-text mb-1">Host: {item.host}</p>
                                <p className="card-text mb-1">{item.category}</p>
                                <div className="d-flex justify-content-between pe-2">
                                    <p className="card-text mb-1">{item.price}€</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Prenotazione;
