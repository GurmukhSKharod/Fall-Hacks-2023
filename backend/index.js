import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"; 
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Fall Hacks 2023 Application backend");
});

mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    