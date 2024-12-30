import { Router } from "express";
import { createAccount, login } from "../handlers/auth";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const routerAuth = Router();

routerAuth.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("Handle is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  handleInputErrors,
  createAccount
);

routerAuth.post(
  "/auth/login",
  body("email").isEmail().withMessage("Email is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  handleInputErrors,
  login
);

export default routerAuth;
