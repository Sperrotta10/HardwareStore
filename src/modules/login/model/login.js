import { User, Role } from "../../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { enviroment } from "../../../config/enviroment.js";
import dotenv from "dotenv"
dotenv.config()

export class ModelLogin {

    static async login(data) {

        try {

            const user = await User.findOne({
                where : {email : data.email},
                include : {
                    model : Role,
                    as : 'role',
                    attributes: ['name']
                }
            });

            if(!user) return {message : "El email no existe"};

            const verifyPassword = await bcrypt.compare(data.password, user.password);

            if(!verifyPassword) return {message : "Error al loguearse"};

            const token = jwt.sign(
                {user_id : user.user_id, user_name : user.user_name, email : user.email, role : user.role.name }, 
                enviroment.JWT_SECRET_KEY,
                {expiresIn : '1h'}
            )

            const refresh_token = jwt.sign(
                { user_id: user.user_id, user_name : user.user_name, email : user.email, role : user.role.name },
                enviroment.REFRESH_JWT_SECRET_KEY,
                { expiresIn: '7d' }
            );

            const userReturn = { user_id : user.user_id, user_name : user.user_name, email : user.email, role : user.role.name };
            
            return {message : "Login exitoso", data : userReturn, access_token : token, refresh_token};

        } catch (error) {
            console.error("Error al hacer el login", error.message);
            throw error;
        }
    }

    static async refresh(token) {

        try {

            const payload = jwt.verify(token, enviroment.REFRESH_JWT_SECRET_KEY);

            const newAccessToken = jwt.sign(
                { user_id: payload.user_id, user_name : payload.user_name, email : payload.email},
                enviroment.JWT_SECRET_KEY,
                { expiresIn: "1h" }
            );

            return {message : "Token refrescado", access_token : newAccessToken};

        } catch (error) {
            console.error("Token de refresco inválido o expirado", error);
            throw error;
        }
    }
}