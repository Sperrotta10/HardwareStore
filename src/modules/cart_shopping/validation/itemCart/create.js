import zod from "zod";

const validation = zod.object({
    cart_id : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
    product_id : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
    quantity : zod.number().nonnegative({message : "El id tiene que ser un numero mayor o igual a cero"}),
})


export function validationCreateItemCart(data) {
    return validation.safeParse(data);
}