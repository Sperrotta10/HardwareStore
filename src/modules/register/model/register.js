import { User, Role} from "../../../models/index.js";
import bcrypt from "bcrypt"
import { enviroment } from "../../../config/enviroment.js";
import dotenv from "dotenv"
dotenv.config()

export class ModelRegister {

    static async create(data) {

        const {user_name, email, password, role_id, user_status, created_at, updated_at} = data;

        try {

            const exist = await User.findOne({where : {email : email}});

            if(exist) return {message : "User ya existe"};

            const salt = parseInt(enviroment.SALT, 10);
            const hashPassword = await bcrypt.hash(password, salt);

            if(!hashPassword) return {message : "No se pudo crear el user"};

            const newData = {user_name, email, password : hashPassword, role_id, user_status, created_at, updated_at}

            const user = await User.create(newData);

            return {message : "User creado", data : user};


        } catch (error) {
            console.error("Error al crear usuario");
            throw error;
        }
    }

    static async getAll() {

        try {
            
            const users = await User.findAll({
                attributes: { exclude: ['password'] } 
            });

            if(users) {
                return {message : "Users obtenidos", data : users};
            } else {
                return {message : "Users no encontrados", data : users};
            }

        } catch (error) {
            console.error("Error al obtener los usuarios");
            throw error;
        }
    }

    static async getId(user_id) {

        try {
            
            const user = await User.findByPk(user_id, {
                attributes: { exclude: ['password'] }  
            });

            if(user) {
                return {message : "User obtenido", data : user};
            } else {
                return {message : "User no encontrados", data : user};
            }

        } catch (error) {
            console.error("Error al obtener user");
            throw error;
        }
    }

    static async update(user_id,data) {
        
        try {

            const exist = await User.findByPk(user_id);

            if(exist) {
                const user = await User.update(data, {where : {user_id : user_id}});

                return {message : "User modificado"};
            } else {
                return {message : "User no encontrado"};
            }
            

        } catch (error) {
            console.error("Error al modificar user");
            throw error;
        }
    }

    static async delete(user_id) {
        
        try {

            const exist = await User.findByPk(user_id);

            if(exist) {
                const user = await User.destroy({where : {user_id : user_id}});

                return {message : "User eliminado"};
            } else {
                return {message : "User no encontrado"};
            }
            

        } catch (error) {
            console.error("Error al eliminar user");
            throw error;
        }
    }
}