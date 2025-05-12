import { Router } from "express";
import { ControllerRegister } from "../controller/register.js";
import { authMiddleware } from "../../../middlewares/authentification.js";
import { authorizeRole } from "../../../middlewares/authorizeRole.js";
import { verifyUserOwner } from "../../../middlewares/register/registerAuth.js";

export const registerRouter = Router();

registerRouter.get('/', authMiddleware, authorizeRole('admin'), ControllerRegister.getAll); // ✅
registerRouter.get('/:user_id', authMiddleware, authorizeRole('admin'), ControllerRegister.getId); // ✅
registerRouter.post('/', ControllerRegister.create); // ✅
registerRouter.patch('/:user_id', authMiddleware, authorizeRole('admin', 'user'), verifyUserOwner, ControllerRegister.update); // ✅
registerRouter.delete('/:user_id', authMiddleware, authorizeRole('admin'), ControllerRegister.delete); // ✅