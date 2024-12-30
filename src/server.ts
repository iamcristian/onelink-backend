import "dotenv/config";
import express from "express";
import router from "./router";
import { corsConfig } from "./config/cors";
import cors from "cors";

const app = express();

app.use(cors(corsConfig));

app.use("/api", router);

export default app;
