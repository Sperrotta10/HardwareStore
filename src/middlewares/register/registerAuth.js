import { User } from "../../models/index.js";

export const verifyUserOwner = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        // Solo verificar propiedad si el usuario es 'user'
        if (req.user.role === 'user' && user.user_id !== req.user.user_id) {
            return res.status(403).json({ message: 'Acceso denegado: este user no te pertenece' });
        }

        next();
    } catch (error) {
        console.error('Error al verificar el dueño del user:', error.message);
        res.status(500).json({ message: 'Error interno al verificar el user' });
    }
};