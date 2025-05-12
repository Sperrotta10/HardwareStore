import { Router } from "express";
import { ControllerLogin } from "../controller/login.js";
import { loginLimiter } from "../../../middlewares/loginLimit.js";
import { authMiddleware } from "../../../middlewares/authentification.js";
import { authorizeRole } from "../../../middlewares/authorizeRole.js";

export const loginRouter = Router();

loginRouter.post('/', loginLimiter, ControllerLogin.login); // ✅
loginRouter.post('/refresh-token', authMiddleware, authorizeRole('admin', 'user'), ControllerLogin.refresh); // ✅