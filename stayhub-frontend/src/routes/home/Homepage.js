import React, { useState } from "react";
import "./Homepage.css";
import Navbars from "../../components/navbar/Navbars";
import Footer from "../../components/footer/Footer"; 

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");

  const placesArray = [
    {
      id: "1",
      place: "Londra",
      description: "Beach and Sunset Views",
      price: "$100 per night",
      date: "15-20 May",
      title: "Hotel 0000",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg",
      category: "city"
    },
    {
      id: "2",
      place: "Russia",
      description: "Explore the largest country in the world",
      price: "$80 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "country"
    },
    {
      id: "3",
      place: "Spagna",
      description: "Experience the sunny beaches and delicious cuisine",
      price: "$120 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "spiaggia"
    },
    {
      id: "4",
      place: "Italia",
      description: "Discover the art, history and culture of Italy",
      price: "$110 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "country"
    },
    {
      id: "5",
      place: "Parigi",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "city"
    },
    {
      id: "6",
      place: "New York",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "city"
    },
    {
      id: "7",
      place: "Dubai",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
      category: "city"
    },
    {
      id: "8",
      place: "Tokyo",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "9",
      place: "Cina",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "10",
      place: "Grecia",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "11",
      place: "Turchia",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "12",
      place: "Messico",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "13",
      place: "Brasile",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "14",
      place: "Argentina",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    },
    {
      id: "15",
      place: "Australia",
      description: "Explore the city of love",
      price: "$90 per night",
      image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
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
              style={{ display: "inline-block" }}
            >
              <img
                className="rounded"
                src={item.image}
                alt={item.place}
                width={"250px"}
                height={"250px"}
              />
              <p className="h3 px-2 m-1 font-weight-bold">{item.place}</p>
              <p className="px-2 pt-1 mb-0 text-secondary">{item.category}</p>
              <p className="px-2 h6">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Homepage;
