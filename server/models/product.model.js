const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required"],
        minLength: [3, "The title must contain more than 3 characters."]
    },
    price: {
        type: Number,
        required: [true, "The price is required"],
        min: [0, "The price must be more than 0; no freebies here!"],
        max: [1000000000, "So, you'd like to by the company?! Otherwise, we don't have anything that expensive here!"],
    },
    description: {
        type: String,
        required: [true, "The description is required"],
        minLength: [3, "The description must contain more than 3 characters. I 'heart' you doesn't count!"],
        maxLength: [300, "Woah there buddy!!  Are you writing a dissertation??!"]
    },
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;