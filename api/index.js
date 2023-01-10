import express from "express";
import bodyParser from "body-parser";
import functions from "./apiCall.js";
import cors from "cors"
import multer from "multer";


const {createProduct} = functions


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
});
  
var upload = multer({ storage: storage })

// Routees

app.post("/createProduct", upload.single("file"), (req, res) => {
    const body = req.body
    createProduct(body.name, body.price, body.slug, body.category, req.file ).then((data) => res.json(data))
})
 
app.listen(3001, () => console.log("reading"))