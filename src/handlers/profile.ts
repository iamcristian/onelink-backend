import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";

export const updateProfile = async (req: Request, res: Response) => {
  try {
    // Check if handle already exists
    const handle = slug(req.body.handle, "");
    const handleExists = await User.findOne({ handle });
    if (handleExists && handleExists.email !== req.user!.email) {
      res.status(400).send({ message: "Handle already exists" });
      return;
    }

    req.user!.handle = handle;
    req.user!.description = req.body.description;
    req.user!.links = req.body.links;
    await req.user!.save();
    res.send(req.user);
  } catch (error) {
    res.status(500).send({ message: "Update Profile error" });
  }
};
