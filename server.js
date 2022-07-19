import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config();   // To inintialize the dotenv file.

app.use(cors());
app.use('/', Route);

// Basically we hv to build the frontend in single folder.
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb://${username}:${password}@ac-5tzayz0-shard-00-00.oq2cg5j.mongodb.net:27017,ac-5tzayz0-shard-00-01.oq2cg5j.mongodb.net:27017,ac-5tzayz0-shard-00-02.oq2cg5j.mongodb.net:27017/?ssl=true&replicaSet=atlas-2g44cs-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT ,() => console.log(`Server is running successfully on ${PORT}`));

DefaultData();