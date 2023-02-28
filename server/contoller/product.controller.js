
import productModel from "../models/product.js";
import { v2 as cloudinary } from "cloudinary";

import * as dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECREAT,
});

const getAllProduct = async (req, res) => {
  try {
    const property = await productModel.find({}).limit(req.query._end);

    console.log(property);
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await productModel.findOne({ _id: id });

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createProduct = async (req, res) => {
  const { title, price, description, color, image } = req.body;

  // start new session
  // const session = await mongoose.startSession()

  const photoUrl = await cloudinary.uploader.upload_large(image);
  try {
    const newProduct = await productModel.create({
      title,
      color,
      price,
      description,
      image: photoUrl.url,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {};

export { updateProduct, getAllProduct, getProductDetails, createProduct };
