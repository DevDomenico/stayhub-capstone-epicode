  import React, { useState } from "react";
    import "./Homepage.css";
    import Navbars from "../../components/navbar/Navbars";

    const Homepage = () => {
      const [inputValue, setInputValue] = useState("");

      const placesArray = [
        {
          id: "1",
          place: "london",
          description: "A vibrant city with rich history and culture",
          price: "$100 per night",
          image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
          category: "city"
        },
        {
          id: "2",
          place: "russia",
          description: "Explore the largest country in the world",
          price: "$80 per night",
          image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
          category: "country"
        },
        {
          id: "3",
          place: "spain",
          description: "Experience the sunny beaches and delicious cuisine",
          price: "$120 per night",
          image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
          category: "spiaggia"
        },
        {
          id: "4",
          place: "italy",
          description: "Discover the art, history and culture of Italy",
          price: "$110 per night",
          image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
          category: "country"
        },
        {
          id: "5",
          place: "france",
          description: "Explore the romantic city of Paris",
          price: "$130 per night",
          image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
          category: "city"
        },





        // ... other places
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
          <div className=" m-2 mt-5 homepage">
           
            <div className="d-flex mt-4 justify-content-center">
              {filteredPlaces.map((item) => (
                <div className= "m-3 border-0  mt-4 card" key={item.id} style={{ display: "inline-block" }}>
                  <img className="rounded" src={item.image} alt={item.place} width={"250px"}  height={"250px"}/>
                  <p className="h3 px-2 m-1 font-weight-bold">{item.place}</p>
                  <p className="px-2 pt-1 mb-0 text-secondary">{item.category}</p>
                  <p className="px-2 h6">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Homepage;
