import zod from "zod";

const validation = zod.object({
    message : zod.string().min(10).max(100, {message : "El mensaje tiene que ser un string y estar entre 10 y 100 caracteres"}).optional(),
    notification_status : zod.boolean({message : "El status tienes que ser un booleano"}),
}).strict();

export function validationUpdate(data) {
    return validation.safeParse(data);
}