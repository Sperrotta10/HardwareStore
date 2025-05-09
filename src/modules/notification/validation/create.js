import zod from "zod";

const validation = zod.object({
    product_id : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
    message : zod.string().min(10).max(100, {message : "El mensaje tiene que ser un string y estar entre 10 y 100 caracteres"}),
    notification_status : zod.boolean({message : "El status tienes que ser un booleano"}).default(true),
    created_at : zod.date({message : "El dato tiene que ser de tipo date"}).default(() => new Date()),
});

export function validationCreate(data) {
    return validation.safeParse(data);
}