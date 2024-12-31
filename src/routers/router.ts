import { Router } from "express";
import { getUser } from "../handlers/user";
import { authenticate } from "../middleware/auth";

const router = Router();

router.get("/user", authenticate, getUser);


export default router;
