import dotenv from "dotenv"
dotenv.config()

export const enviroment = {
    PORT : process.env.PORT,
    DB_NAME : process.env.DB_NAME,
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PORT : process.env.DB_PORT,
    DB_PASSWORD : process.env.DB_PASSWORD,
    SALT : process.env.SALT,
    JWT_SECRET_KEY : process.env.SECRET_JWT_KEY,
    REFRESH_JWT_SECRET_KEY : process.env.REFRESH_SECRET_JWT_KEY,
    SECURE_COOKIE : process.env.SECURE_COOKIE
}