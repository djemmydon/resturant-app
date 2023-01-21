import express from "express";
import { login } from "../contoller/auth.js"


const router = express.Router()

router.post("/login", login)

export default router