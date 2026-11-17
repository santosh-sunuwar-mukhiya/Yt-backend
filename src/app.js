import express from "express";

const app = express();

app.get('/api', (req, res) => {
    res.send('API Check endpoint.')
})

export default app;
