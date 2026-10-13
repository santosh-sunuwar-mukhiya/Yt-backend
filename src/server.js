import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world, YT clone.");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
