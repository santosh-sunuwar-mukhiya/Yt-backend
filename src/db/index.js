import mongoose from "mongoose"
import DB_NAME from "./utils/constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MonogDB connected !! DB Host: ${conn.connection.host}`);
    } catch (err) {
        console.log('MongoDB connection failure ', err.message);
        process.exit(1); // exited with failure
    }
}

export default connectDB;