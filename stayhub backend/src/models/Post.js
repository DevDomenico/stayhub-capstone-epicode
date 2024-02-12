import { Schema, model } from "mongoose"

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default model("Post", postSchema)

