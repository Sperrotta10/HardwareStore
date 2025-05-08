import { validationCreateCart } from "../validation/cart/create.js";
//import { validationUpdateCart } from "../validation/cart/update";
import { validationCreateItemCart } from "../validation/itemCart/create.js";
import { validationUpdateItemCart } from "../validation/itemCart/update.js";
import { ModelCart } from "../model/cart.js";

export class ControllerCart {

    static async getAllCart(req, res) {

        try {

            const cart = await ModelCart.getAllCart();

            return res.status(200).json({message : cart.message, data : cart.data});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async getIdCart(req, res) {
        
        const { cart_id } = req.params; 

        try {

            const cart = await ModelCart.getIdCart(cart_id);

            return res.status(200).json({message : cart.message, data : cart.data});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async createCart(req, res) {
        
        const result = validationCreateCart(req.body);

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const cart = await ModelCart.createCart(result.data);

            return res.status(201).json({message : cart.message, data : cart.data});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async createItemCart(req, res) {
        
        const result = validationCreateItemCart(req.body);

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const itemCart = await ModelCart.createItemCart(result.data);

            return res.status(201).json({message : itemCart.message, data : itemCart.data});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async updateItemCart(req, res) {
        
        const result = validationUpdateItemCart(req.body);
        const { item_id } = req.params;

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const itemCart = await ModelCart.updateItemCart(item_id, result.data);

            return res.status(204).json({message : itemCart.message});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async deleteItemCart(req, res) {
        
        const { item_id } = req.params;

        try {

            const itemCart = await ModelCart.deleteItemCart(item_id);

            return res.status(204).json({message : itemCart.message});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }
}