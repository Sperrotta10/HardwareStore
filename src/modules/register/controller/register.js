import { validationCreate } from "../validation/create.js";
import { validationUpdate } from "../validation/update.js";
import { ModelRegister } from "../model/register.js";

export class ControllerRegister {

    static async create(req,res) {

        const result = validationCreate(req.body);

        if(!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const user = await ModelRegister.create(result.data);

            return res.status(201).json({message : user.message, data : user.data});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }

    }

    static async getAll(req,res) {

        try {

            const user = await ModelRegister.getAll();

            return res.status(200).json({message : user.message, data : user.data});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async getId(req,res) {

        const { user_id } = req.params;

        try {

            const user = await ModelRegister.getId(user_id);

            return res.status(200).json({message : user.message, data : user.data});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async update(req,res) {

        const result = validationUpdate(req.body);
        const { user_id } = req.params;

        if(!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const user = await ModelRegister.update(user_id, result.data);

            return res.status(200).json({message : user.message});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async delete(req,res) {

        const { user_id } = req.params;

        try {

            const user = await ModelRegister.delete(user_id);

            return res.status(200).json({message : user.message});
            
        } catch (error) {
            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }
}