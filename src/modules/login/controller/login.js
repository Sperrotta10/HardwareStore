import { validationLogin } from "../validation/login.js";
import { ModelLogin } from "../model/login.js";
import { enviroment } from "../../../config/enviroment.js";
import dotenv from "dotenv"
dotenv.config()

export class ControllerLogin {

    static async login(req,res) {

        const result = validationLogin(req.body);

        if(!result.success) return res.status(422).json({message : "Error de validacion", error : result.error.errors});

        try {

            const login = await ModelLogin.login(result.data);

            res.cookie('access_token', login.access_token, {
                httpOnly : true, // la cookie solo se puede acceder en el servidor
                secure : enviroment.SECURE_COOKIE === 'production', // la cookie solo se puede acceder en https
                maxAge : 1000 * 60 * 60 // duracion de una hora
            });

            res.cookie('refresh_token', login.refresh_token, {
                httpOnly : true,
                secure : enviroment.SECURE_COOKIE === 'production',
                maxAge : 1000 * 60 * 60 * 24 * 7
            });

            return res.status(200).json({message : login.message, data : login.data});
            
        } catch (error) {

            return res.status(500).json({message : "Error interno del servidor", error : error.message});
        }
    }

    static async refresh(req, res) {
        
        const token = req.cookies.refresh_token;

        if (!token) return res.status(401).json({ message: "Token de refresco no encontrado" });

        try {

            const newAccessToken = await ModelLogin.refresh(token);

            res.cookie('access_token', newAccessToken, {
                httpOnly: true,
                secure: enviroment.SECURE_COOKIE === 'production',
                maxAge: 1000 * 60 * 60
            });

            return res.status(200).json({ message : newAccessToken.message, access_token: newAccessToken.access_token });
            
        } catch (error) {
            return res.status(403).json({message : "Token de refresco inválido o expirado", error : error.message});
        }
    }
}