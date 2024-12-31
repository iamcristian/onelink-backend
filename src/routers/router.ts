import { Router } from "express";
import { getUser } from "../handlers/user";
import { authenticate } from "../middleware/auth";
import { updateProfile, uploadImage } from "../handlers/profile";
import { validateSchema } from "../middleware/validateSchema";
import { updateUserSchema } from "../schemas/userSchema";

const router = Router();

// GET /api/user - Get user with authentication JWT
router.get("/user", authenticate, getUser);

// PATCH /api/user - Update user profile
router.patch(
  "/user",
  validateSchema(updateUserSchema),
  authenticate,
  updateProfile
);

router.post("/user/image", authenticate, uploadImage);

export default router;
