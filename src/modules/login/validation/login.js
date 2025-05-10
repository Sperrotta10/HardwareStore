import zod from "zod";

const validation = zod.object({
    email : zod.string().email({message : "El email tiene que ser valido"}),
    password : zod.string().min(6, {message : "La password tiene que tener como minimo 6 caracteres"})
})

export function validationLogin(data) {
    return validation.safeParse(data);
}