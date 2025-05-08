import express from "express";
import { enviroment } from "./config/enviroment.js";
import { sequelize } from "./config/dataBase.js"
import { apiRouter } from "./api/v1/routes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); // middleware que permite el manejo de jsons

app.use("/api/v1/", apiRouter);

const PORT = enviroment.PORT;

async function main() {
    
    try {

        await sequelize.authenticate();
        await sequelize.sync();
        console.log("===============================================")
        console.log('✅ Conexión de la base de datos establecida.');

        app.listen(PORT, () => {
            console.log(`✅ Servidor escuchando en http://localhost:${PORT}`)
            console.log("===============================================")
        })   
    } catch (error) {
        console.log("❌ Error al conectar servidor", error)
    }
}

main();
