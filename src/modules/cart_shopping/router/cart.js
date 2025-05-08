import { Router } from "express";
import { ControllerCart } from "../controller/cart.js";

export const cartRouter = Router();

cartRouter.get('/', ControllerCart.getAllCart); // ✅
cartRouter.get('/:cart_id', ControllerCart.getIdCart); // ✅
cartRouter.post('/cart', ControllerCart.createCart); // ✅
cartRouter.post('/itemCart', ControllerCart.createItemCart); // ✅
cartRouter.patch('/:item_id', ControllerCart.updateItemCart); // ✅
cartRouter.delete('/:item_id', ControllerCart.deleteItemCart); // ✅

