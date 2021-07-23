const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required"]
    },
    price: {
        type: Number,
        required: [true, "The price is required"]
    },
    description: {
        type: String,
        required: [true, "The description is required"]
    },
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;