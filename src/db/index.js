import mongoose from "mongoose"
import DB_NAME from "./utils/constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    } catch (err) {
        
    }
}