import "dotenv/config";
import express from "express";
import { corsConfig } from "./config/cors";
import cors from "cors";
import { connectDB } from "./config/db";
import router from "./routers/router";
import routerAuth from "./routers/routerAuth";

// Connect to the database MongoDB
connectDB();

const app = express();

// Enable CORS
app.use(cors(corsConfig));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/", routerAuth);
app.use("/api", router);

export default app;
