import { validationUpdate } from "../validation/update.js";
import { validationCreate } from "../validation/create.js";
import { ModelProduct } from "../model/product.js";

export class ControllerProduct {

    // obtener todos los productos (any)
    static async getAll(req, res) {

        const { category_id } = req.query;
        console.log("Hola")
        try {

            let products;

            if (category_id) {
                console.log("Hola2")
                products = await ModelProduct.getCategory(category_id);

                return res.status(200).json({message : "Peticion exitosa", data : products});

            } else {
                console.log("Hola3")
                products = await ModelProduct.getAll();

                return res.status(200).json({message : "Peticion Exitosa", data : products});
            }

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }

    }

    // obtener producto por id (id)
    static async getId(req, res) {

        const { product_id } = req.params;

        try {
            
            const product = await ModelProduct.getId(product_id);

            return res.status(200).json({message : "Peticion exitosa", data : product});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor"});
        }

    }

    // crear producto (objeto con atributos)
    static async create(req, res) {

        const result = validationCreate(req.body);

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const product = await ModelProduct.create(result.data);

            return res.status(201).json({message : "Producto creado", data : product});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
        
    }

    // modificar un producto (id y objeto con la modificacion)
    static async updateId(req, res) {

        const result = validationUpdate(req.body);
        const { product_id } = req.params;

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const product = await ModelProduct.updateId(product_id, result.data);

            return res.status(204).json({message : "Producto actualizado"});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }

    }

    /*
    // modificar un producto (name y objeto con la modificacion)
    static async updateName(req, res) {

        const result = validationUpdate(req.body);

        if (!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {
            
            const product = await ModelProduct.updateName(result.data);

            return res.status(204).json({message : "Producto actualizado"});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }
    */

    // eliminar producto
    static async delete(req, res) {

        const { product_id } = req.params;

        try {
            
            const product = await ModelProduct.delete(product_id);

            return res.status(204).json({ message : "Producto eliminado"});

        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }
    
}