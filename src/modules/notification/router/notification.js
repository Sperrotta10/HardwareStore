import { Router } from "express";
import { ControllerNotification } from "../controller/notification.js";
import { authMiddleware } from "../../../middlewares/authentification.js";
import { authorizeRole } from "../../../middlewares/authorizeRole.js"

export const notificationRouter = Router();

notificationRouter.get('/active', authMiddleware, authorizeRole('admin'), ControllerNotification.getAllActive);
notificationRouter.get('/disable', authMiddleware, authorizeRole('admin'), ControllerNotification.getAllDisable);
notificationRouter.post('/', authMiddleware, ControllerNotification.create);
notificationRouter.patch('/:notification_id', authMiddleware, authorizeRole('admin'), ControllerNotification.update);
notificationRouter.delete('/:notification_id', authMiddleware, authorizeRole('admin'), ControllerNotification.delete);