import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

import connectDB from "./db/index.js";
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`The server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(`Server Failed: ${err.message}`);
  }
};

startServer();
