// Importing required modules
import express from "express"
//import User from "../models/Users.js"
import Booking from "../models/booking.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import authControl from "../middleware/authControl.js"


// Creating an instance of express router
const bookingRoute = express.Router()

bookingRoute
.post("/book", authControl, async (req, res) => {
    try {
        // Destructure the request body to extract parameters
        const { user,placeid } = req.body;

        // Create a new Post object
        const newBooking = new Booking({
            user,
            placeid,
            
        });

        // Save the new post to the database
        const savedBooking = await newBooking.save();

        // Respond with the saved post
        res.status(201).json(savedBooking);
    } catch (error) {
        // Handle errors
        console.error("Error while adding new booking:", error);
        res.status(500).send("Internal Server Error");
    }
})
.get("/get", async (req, res) => {
    try {
      
        const bookings = await Booking.find();

     
        res.status(200).json(bookings);
    } catch (error) {
    
        console.error("Error while retrieving bookings:", error);
        res.status(500).send("Internal Server Error");
    }
});
    


      
    


export default bookingRoute



