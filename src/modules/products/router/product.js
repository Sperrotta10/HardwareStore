import { Router } from "express";
import { ControllerProduct } from "../controller/product.js";
import { authMiddleware } from "../../../middlewares/authentification.js"
import { authorizeRole } from "../../../middlewares/authorizeRole.js"

export const productsRouter = Router();

productsRouter.get('/', ControllerProduct.getAll); // ✅
productsRouter.get('/:product_id', ControllerProduct.getId); // ✅
productsRouter.post('/', authMiddleware, authorizeRole('admin'), ControllerProduct.create); // ✅
productsRouter.patch('/:product_id', authMiddleware, authorizeRole('admin'), ControllerProduct.updateId); // ✅
//productsRouter.put('/products-name', ControllerProduct.updateName);
productsRouter.delete('/:product_id', authMiddleware, authorizeRole('admin'), ControllerProduct.delete); // ✅