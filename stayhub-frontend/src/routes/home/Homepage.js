import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbars from "../../components/navbar/Navbars";
import Footer from "../../components/footer/Footer";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [placesArray, setPlacesArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3030/post/get");
      setPlacesArray(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const prenota = (e) => {
    const { createdAt, date, description, host, image, place, price, title } = e;
    
    const urlParams = new URLSearchParams();
    urlParams.append("createdAt", createdAt);
    urlParams.append("date", date);
    urlParams.append("description", description);
    urlParams.append("host", host);
    urlParams.append("image", image);
    urlParams.append("place", place);
    urlParams.append("price", price);
    urlParams.append("title", title);

    const encodedParams = urlParams.toString();
    navigate(`/booking?${encodedParams}`);
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
                <a className="text-dark fs-4 prenota" onClick={()=> prenota(item) }><CiBookmark /></a>
                </div>
                
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
