import { validationCreate } from "../validation/create.js";
import { validationUpdate } from "../validation/update.js";
import { ModelNotification } from "../model/notification.js";

export class ControllerNotification {

    static async getAllActive(req,res) {

        try {
            
            const alerts = await ModelNotification.getAllActive();

            return res.status(200).json({message : alerts.message, data : alerts.data});

        } catch (error) {
            return res.status(500).json({message : "Error internos del servidor", error : error.message});
        }
    }

    static async getAllDisable(req,res) {

        try {
            
            const alerts = await ModelNotification.getAllDisable();

            return res.status(200).json({message : alerts.message, data : alerts.data});

        } catch (error) {
            return res.status(500).json({message : "Error internos del servidor", error : error.message});
        }
    }

    static async create(req,res) {
        
        const result = validationCreate(req.body);

        if(!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {
            
            const alert = await ModelNotification.create(result.data);

            return res.status(200).json({message : alert.message, data : alert.data});

        } catch (error) {
            return res.status(500).json({message : "Error internos del servidor", error : error.message});
        }
    }

    static async update(req,res) {
        
        console.log(req.body);
        const result = validationUpdate(req.body);
        const { notification_id } = req.params;

        if(!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {
            
            const alert = await ModelNotification.update(notification_id, result.data);

            return res.status(200).json({message : alert.message});

        } catch (error) {
            return res.status(500).json({message : "Error internos del servidor", error : error.message});
        }
    }

    static async delete(req,res) {
        
        const { notification_id } = req.params;

        try {
            
            const alert = await ModelNotification.delete(notification_id);

            return res.status(200).json({message : alert.message});

        } catch (error) {
            return res.status(500).json({message : "Error internos del servidor", error : error.message});
        }
    }
}