import zod from "zod";

const validation = zod.object({
    user_id : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
    created_at : zod.date({message : "El dato tiene que ser una fecha"}).default(() => new Date()),
    updated_at : zod.date({message : "El dato tiene que ser una fecha"}).default(() => new Date())
})


export function validationCreateCart(data) {
    return validation.safeParse(data);
}