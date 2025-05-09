import { Router } from "express";
import { cartRouter } from "../../modules/cart_shopping/router/cart.js"
import { loginRouter } from '../../modules/login/router/login.js'
import { notificationRouter } from "../../modules/notification/router/notification.js"
import { payRouter } from "../../modules/pay/router/pay.js"
import { productsRouter } from "../../modules/products/router/product.js"
import { registerRouter } from "../../modules/register/router/register.js"
import { saleRouter } from "../../modules/sale/router/sale.js"

export const apiRouter = Router();

apiRouter.use("/cart-shopping", cartRouter);
//apiRouter.use("/login", loginRouter);
apiRouter.use("/notification", notificationRouter);
//apiRouter.use("/pay", payRouter);
apiRouter.use("/products", productsRouter);
//apiRouter.use("/register", registerRouter);
//apiRouter.use("/sale", saleRouter);