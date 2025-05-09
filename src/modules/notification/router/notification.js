import { Router } from "express";
import { ControllerNotification } from "../controller/notification.js";

export const notificationRouter = Router();

notificationRouter.get('/active', ControllerNotification.getAllActive);
notificationRouter.get('/disable', ControllerNotification.getAllDisable);
notificationRouter.post('/', ControllerNotification.create);
notificationRouter.patch('/:notification_id', ControllerNotification.update);
notificationRouter.delete('/:notification_id', ControllerNotification.delete);