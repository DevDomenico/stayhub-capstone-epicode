import { Schema, model } from "mongoose"

const bookingSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    placeid: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default model("Booking", bookingSchema)

