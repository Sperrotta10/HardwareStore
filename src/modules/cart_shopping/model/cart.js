import { Cart, itemCart } from "../../../models/index.js";


export class ModelCart {

    static async getAllCart() {

        try {

            const carts = await Cart.findAll({
                include : {
                    model : itemCart,
                    as : 'itemCart'
                }
            });

            return {message : "Carts obtenidos", data : carts};
            
        } catch (error) {
            console.error("Error al obtener los carts");
            throw error;
        }
    
    }
    
    static async getIdCart(cart_id) {
        
        try {

            const cart = await Cart.findByPk(cart_id,{
                include : {
                    model : itemCart,
                    as : 'itemCart'
                }
            });

            if(cart) {
                return {message : "Cart obtenido", data : cart};
            } else {
                return {message : "El cart no existe", data : cart};
            }
            
        } catch (error) {
            console.error("Error al obtener el cart");
            throw error;
        }
    }

    static async createCart(data) {

        try {

            // verificamos si existe un cart asociado a ese usuario
            const statusCart = await Cart.findOne({where : {user_id : data.user_id}});

            if (statusCart) {

                return { message : "Cart ya existe", data : statusCart};
            } else {
                const cart = await Cart.create(data);

                return { message : "Cart creado", data : cart};
            }

        } catch (error) {
            console.error("Error al crear carrito", error);
            throw error;
        }


        
    }

    static async createItemCart(data) {
        
        try {

            // verificamos si ese item ya esta en el carrito
            const exist = await itemCart.findOne({
                where: {
                    cart_id: data.cart_id,
                    product_id: data.product_id
                }
            });
            
            let item;

            if (exist) {
                
                const quantity = data.quantity + exist.quantity; 
                item = await itemCart.update({quantity}, {where : {item_id : exist.item_id}});

                return {message : "Item actualizado"};

            } else {

                item = await itemCart.create(data);

                return {message : "Item creado", data : item};
            }

        } catch (error) {
            console.error("Error al agregar items al cart", error);
            throw error;
        }
    }

    static async updateItemCart(item_id, data) {
        
        try {

            const exist = await itemCart.findByPk(item_id);
            if(!exist) return {message : "Item del cart no encontrado"}

            const item = await itemCart.update(data,{where : {item_id : item_id}});

            return {message : "Item del cart actualizado"}

        } catch (error) {
            console.error("Error al actualizar el item del cart");
            throw error;
        }
    }

    static async deleteItemCart(item_id) {
        
        try {

            const exist = await itemCart.findByPk(item_id);
            if(!exist) return {message : "Item del cart no encontrado"}

            const item = await itemCart.destroy({where : {item_id : item_id}});

            return {message : "Item del cart eliminado"}

        } catch (error) {
            console.error("Error al eliminar el item del cart");
            throw error;
        }
    }
}