import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { getUser, getUserByHandle, searchByHandle, updateProfile, uploadImage } from "../handlers/profile";
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

// POST /api/user/image - Upload user image
router.post("/user/image", authenticate, uploadImage);

// GET /api/user/:handle - Get user by handle
router.get("/user/:handle", getUserByHandle);

// POST /api/user/search - Search user by handle
router.post("/user/search", searchByHandle);

export default router;
