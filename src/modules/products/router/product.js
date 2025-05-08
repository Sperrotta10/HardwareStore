import { Router } from "express";
import { ControllerProduct } from "../controller/product.js";

export const productsRouter = Router();

productsRouter.get('/', ControllerProduct.getAll); // ✅
productsRouter.get('/:product_id', ControllerProduct.getId); // ✅
productsRouter.post('/', ControllerProduct.create); // ✅
productsRouter.patch('/:product_id', ControllerProduct.updateId); // ✅
//productsRouter.put('/products-name', ControllerProduct.updateName);
productsRouter.delete('/:product_id', ControllerProduct.delete); // ✅