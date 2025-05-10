import { Router } from "express";
import { ControllerLogin } from "../controller/login.js";
import { loginLimiter } from "../../../middlewares/loginLimit.js";

export const loginRouter = Router();

loginRouter.post('/', loginLimiter, ControllerLogin.login); // ✅
loginRouter.post('/refresh-token', ControllerLogin.refresh); // ✅