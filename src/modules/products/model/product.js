import { Product } from "../../../models/index.js";
import { Category } from "../../../models/index.js";

export class ModelProduct {

    static async getAll() {

        try {
            
            const products = await Product.findAll({
                include: {
                    model: Category,
                    as : 'category',
                    attributes: ['name']
                  }
            });

            return products;

        } catch (error) {
            console.error("Error al obtener productos", error);
            throw new Error("Error al obtener productos");
        }
    }

    static async getId(product_id) {

        try {
            
            const product = await Product.findByPk(product_id, {
                include: {
                    model: Category,
                    as : 'category',
                    attributes: ['name']
                }
            });

            console.log("Hola", product)
            return product;

        } catch (error) {
            console.error("Error al obtener producto por id", error);
            throw new Error("Error al obtener producto por id");
        }
    }

    static async getCategory(category_id) {

        try {
            
            const product = await Product.findAll({
                where : {category_id : category_id}, 
                include: {
                    model: Category,
                    as : 'category',
                    attributes: ['name']
                }
            });

            return product;

        } catch (error) {
            console.error("Error al obtener producto por categoria", error);
            throw new Error("Error al obtener producto por categoria");
        }
    }

    static async create(data) {

        try {
            
            const product = await Product.create(data);

            return product;

        } catch (error) {
            console.error("Error al crear producto:", error);
            throw new Error("Error al crear producto");
        }

    }

    static async updateId(product_id, data) {
    
        try {
            
            const product = await Product.update(data, {where : {product_id : product_id}});

        } catch (error) {
            console.error("Error al modificar el producto por id", error);
            throw new Error("Error al modificar el producto por id");
        }
    }

    /*
    static async updateName(data) {

        try {
            
            const product = await Product.update(data, {where : {name : data.name}});

        } catch (error) {

            throw new Error("Error al modificar el producto por nombre");
        }
    }
    */

    static async delete(product_id) {

        try {
            
            const product = await Product.destroy({where : {product_id : product_id}});

        } catch (error) {
            console.error("Error al eliminar producto", error);
            throw new Error("Error al eliminar producto");
        }
    }
}