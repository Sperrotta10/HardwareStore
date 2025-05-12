import { Cart, itemCart } from '../../models/index.js';

export const verifyItemOwner = async (req, res, next) => {
    try {
        const { item_id } = req.params;

        const item = await itemCart.findByPk(item_id, {
            include: {
                model: Cart,
                as: 'cart', 
                attributes: ['user_id'],
            },
        });

        if (!item) {
            return res.status(404).json({ message: 'Ítem no encontrado' });
        }

        if (req.user.role === 'user' && item.cart.user_id !== req.user.user_id) {
            return res.status(403).json({ message: 'No tienes permiso para modificar este ítem' });
        }

        next();
    } catch (error) {
        console.error('Error al verificar el dueño del ítem:', error.message);
        res.status(500).json({ message: 'Error interno al verificar el ítem del carrito' });
    }
};
