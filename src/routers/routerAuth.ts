import { Router } from "express";
import { createAccount, login } from "../handlers/auth";
import { validateSchema } from "../middleware/validateSchema";
import { loginUserSchema, registerUserSchema } from "../schemas/userSchema";

const routerAuth = Router();

// Register user route
routerAuth.post(
  "/auth/register",
  validateSchema(registerUserSchema),
  createAccount
);

// Login user route
routerAuth.post("/auth/login", validateSchema(loginUserSchema), login);

export default routerAuth;
