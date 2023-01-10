import SanityClient from "@sanity/client";
import dotenv from "dotenv";

dotenv.config()


export default SanityClient({
    projectId: "dgcyry4z",
    dataset: "production",
    useCdn: "false",
    apiVersion: "2023-01-08",
    token: process.env.SANITY_API_TOKEN
})

