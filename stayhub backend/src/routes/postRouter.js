// Importing required modules
import express from "express"
//import User from "../models/Users.js"
import Post from "../models/Post.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import authControl from "../middleware/authControl.js"


// Creating an instance of express router
const postRoute = express.Router()

postRoute
.post("/add", authControl, async (req, res) => {
    try {
        // Destructure the request body to extract parameters
        const { title, place, description, price, date, image, host } = req.body;

        // Create a new Post object
        const newPost = new Post({
            title,
            place,
            description,
            price,
            date,
            image,
            host,
        });

        // Save the new post to the database
        const savedPost = await newPost.save();

        // Respond with the saved post
        res.status(201).json(savedPost);
    } catch (error) {
        // Handle errors
        console.error("Error while adding new post:", error);
        res.status(500).send("Internal Server Error");
    }
})
.get("/get", async (req, res) => {
    try {
        // Retrieve all posts from the database
        const posts = await Post.find();

        // Respond with the retrieved posts
        res.status(200).json(posts);
    } catch (error) {
        // Handle errors
        console.error("Error while retrieving posts:", error);
        res.status(500).send("Internal Server Error");
    }
});
    


      
    

// Exporting the usersRoute
export default postRoute



