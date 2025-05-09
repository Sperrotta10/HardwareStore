import zod from "zod";

const validation = zod.object({
    user_name : zod.string().min(3).max(30, {message : "El usuario tiene que ser un string entre 3 y 30 caracteres"}).optional(),
    email : zod.string().email({message : "El email tiene que ser un string"}).optional(),
    password : zod.string().min(6, {message : "El password tiene que ser un string y como minimo 6 caracteres"}).optional(),
    user_status : zod.boolean({message : "El status tiene que ser un booleano"}).optional(),
    updated_at : zod.date({message : "Tiene que ser un dato de tipo date"}).default(() => new Date())
}).strict();

export function validationUpdate(data) {
    return validation.safeParse(data);
}