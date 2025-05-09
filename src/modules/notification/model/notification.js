import { Notification, Product } from "../../../models/index.js";

export class ModelNotification {

    static async getAllActive() {

        try {

            const alerts = await Notification.findAll({
                where : {notification_status : true},
                include : {
                    model : Product,
                    as : 'product',
                    attributes: ['name']
                }
            });


            if(!alerts.data === null) {
                return {message : "Alertas activas obtenidas", data : alerts};
            } else {
                return {message : "Alertas activas no encontradas", data : alerts};
            }
            
        } catch (error) {
            console.error("Error al obtener las alertas activas");
            throw error;
        }
    }

    static async getAllDisable() {

        try {

            const alerts = await Notification.findAll({
                where : {notification_status : false},
                include : {
                    model : Product,
                    as : 'product',
                    attributes: ['name']
                }
            });

            if(!alerts.data === null) {
                return {message : "Alertas desabilitadas obtenidas", data : alerts};
            } else {
                return {message : "Alertas deshabilitadas no encontradas ", data : alerts};
            }
            
        } catch (error) {
            console.error("Error al obtener las alertas no activas");
            throw error;
        }
    }

    static async create(data) {
        
        try {

            const alert = await Notification.create(data);

            return {message : "Alert creada", data : alert};
            
        } catch (error) {
            console.error("Error al crear alerta")
            throw error;
        }
    }

    static async update(notification_id, data) {
        
        try {

            const exist = await Notification.findByPk(notification_id);

            if(exist) {

                const alert = await Notification.update(data, {where : {notification_id : notification_id}});

                return {message : "Alert modificada"};
            } else {

                return {message : "Alert no encontrada"};
            }
            
        } catch (error) {
            console.error("Error al modificar alerta")
            throw error;
        }
    }

    static async delete(notification_id) {
        
        try {

            const exist = await Notification.findByPk(notification_id);

            if(exist) {

                const alert = await Notification.destroy({where : {notification_id : notification_id}});

                return {message : "Alert eliminada"};
            } else {

                return {message : "Alert no encontrada"};
            }
            
        } catch (error) {
            console.error("Error al eliminada alerta")
            throw error;
        }
    }
}