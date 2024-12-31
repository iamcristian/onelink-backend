import { Router } from "express";
import { createAccount, login } from "../handlers/auth";
import { validateSchema } from "../middleware/validateSchema";
import { loginUserSchema, registerUserSchema } from "../schemas/userSchema";

const routerAuth = Router();

/**
 * @swagger
 * /api/auth/register:
 * post:
 * summary: Register user
 * description: Register user
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/registerUserSchema'
 */
routerAuth.post(
  "/auth/register",
  validateSchema(registerUserSchema),
  createAccount
);

/**
 * @swagger
 * /api/auth/login:
 * post:
 * summary: Login user
 * description: Login user
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/loginUserSchema'
 */
routerAuth.post("/auth/login", validateSchema(loginUserSchema), login);

export default routerAuth;
