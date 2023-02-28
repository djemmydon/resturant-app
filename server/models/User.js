import mongoose from "mongoose";

const UserSChema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        image: {
            type: String,
            default: "",
        },
        password: {
            type: String,
            required: true,
            min: 5

        },

        location: String,
        occupation: String,
    },
    
    {timestamps: true}
    
)

const User = mongoose.model("User", UserSChema)
 export default User