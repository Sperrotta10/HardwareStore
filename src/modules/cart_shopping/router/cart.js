import { Router } from "express";
import { ControllerCart } from "../controller/cart.js";
import { authMiddleware } from "../../../middlewares/authentification.js";
import { authorizeRole } from "../../../middlewares/authorizeRole.js";
import { verifyCartOwner } from "../../../middlewares/cart_shopping/cartAuth.js";
import { verifyItemOwner } from "../../../middlewares/cart_shopping/itemCartAuth.js";

export const cartRouter = Router();

cartRouter.get('/', authMiddleware, authorizeRole('admin'), ControllerCart.getAllCart); // ✅
cartRouter.get('/:cart_id', authMiddleware, authorizeRole('user', 'admin'), verifyCartOwner, ControllerCart.getIdCart); // ✅
cartRouter.post('/cart', authMiddleware, authorizeRole('user'), ControllerCart.createCart); // ✅
cartRouter.post('/itemCart', authMiddleware, authorizeRole('user'), ControllerCart.createItemCart); // ✅
cartRouter.patch('/:item_id', authMiddleware, authorizeRole('user'), verifyItemOwner, ControllerCart.updateItemCart); // ✅
cartRouter.delete('/:item_id', authMiddleware, authorizeRole('user'), verifyItemOwner, ControllerCart.deleteItemCart); // ✅

