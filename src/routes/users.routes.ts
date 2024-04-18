import multer from "multer";
import { Router } from "express";

import { configureMulter } from "../configs/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { createUser } from "../user/create-user";
import { updateUser } from "../user/update-user";
import { uploadAvatarUser } from "../user/upload-avatar-user";
import { getAvatarUser } from "../user/get-avatar-user";

const usersRoutes = Router();
const upload = multer(configureMulter());

usersRoutes.post("/newuser", ensureAuthenticated, createUser);
usersRoutes.patch("/upload/:userId", upload.single("avatar"), uploadAvatarUser);
usersRoutes.get("/:userId/avatar", getAvatarUser);
usersRoutes.put("/:userId", ensureAuthenticated, updateUser);

export { usersRoutes };
