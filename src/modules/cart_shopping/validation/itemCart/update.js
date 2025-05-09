import zod from "zod";

const validation = zod.object({
    quantity : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
}).strict();


export function validationUpdateItemCart(data) {
    return validation.safeParse(data);
}