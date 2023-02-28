import express from "express";

import { getAllProduct, createProduct, getProductDetails, updateProduct } from "../contoller/product.controller.js";


const router = express.Router()

router.route("/").get(getAllProduct)
router.route("/:id").get(getProductDetails)
router.route("/").post(createProduct)
router.route("/:id").patch(updateProduct)


export default router 