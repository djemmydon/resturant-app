import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    
    color: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
})

const productModel = mongoose.model("Product", ProductSchema)

export default productModel