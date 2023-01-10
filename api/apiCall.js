import { createReadStream } from "fs";
import { basename } from "path";
import SanityClient from "./client.js";

const functions = {};




functions.createProduct = (name, slug, price, category, mainImage) => {
  return SanityClient.assets.upload("image", createReadStream(mainImage.path), {
    filename: basename(mainImage.path)
  }).then((data) => {
    
    return SanityClient.create({
      _type: "product",
      name: name,
      price: price,
      slug: slug,
      category: category,
      created_at: new Date(),
      // mainImage: { asset: { _ref: data._id } }
    });
  })
}
// functions.createProduct = (name, slug, price, category, image) => {
//   return SanityClient.create({
//     _type: "product",
//     name: name,
//     price: price,
//     slug: slug,
//     category: category,
//     created_at: new Date(),
//   });
// };

export default functions;
