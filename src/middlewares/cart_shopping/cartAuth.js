import { Cart } from "../../models/index.js";

export const verifyCartOwner = async (req, res, next) => {
    try {
        const { cart_id } = req.params;

        const cart = await Cart.findByPk(cart_id);

        if (!cart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }

        // Solo verificar propiedad si el usuario es 'user'
        if (req.user.role === 'user' && cart.user_id !== req.user.user_id) {
            return res.status(403).json({ message: 'Acceso denegado: este carrito no te pertenece' });
        }

        next();
    } catch (error) {
        console.error('Error al verificar el dueño del carrito:', error.message);
        res.status(500).json({ message: 'Error interno al verificar el carrito' });
    }
};
