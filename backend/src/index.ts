import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hello", (_, res) => {
    res.json({ message: "Hello World!" });
});

export const testApp = app;
