import { Router } from "express";
import { ControllerRegister } from "../controller/register.js";

export const registerRouter = Router();

registerRouter.get('/', ControllerRegister.getAll); // ✅
registerRouter.get('/:user_id', ControllerRegister.getId); // ✅
registerRouter.post('/', ControllerRegister.create); // ✅
registerRouter.patch('/:user_id', ControllerRegister.update); // ✅
registerRouter.delete('/:user_id', ControllerRegister.delete); // ✅