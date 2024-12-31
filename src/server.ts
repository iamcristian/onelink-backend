import "dotenv/config";
import express from "express";
import { corsConfig } from "./config/cors";
import cors from "cors";
import { connectDB } from "./config/db";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import routerAuth from "./routes/auth.routes";
import router from "./routes/user.routes";

// Connect to the database MongoDB
connectDB();

const app = express();

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Enable CORS
app.use(cors(corsConfig));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/", routerAuth);
app.use("/api", router);

export default app;
