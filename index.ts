import express from "express";

const app = express();

app.get("/", (req, res) => res.status(200).json({ hello: "world" }));

app.listen(3000, () => console.log("Up!"));
