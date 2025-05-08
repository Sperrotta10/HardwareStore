import zod from 'zod';

const validation = zod.object({
    name: zod.string().refine(val => val.trim().length > 0, {
        message: "El nombre tiene que ser un string no vacío"
    }),
    description: zod.string().max(255, { message: "La descripción tiene que ser un string y como máximo 255 caracteres" }),
    price: zod.number().positive({ message: "El precio tiene que ser un número mayor a cero" }),
    image: zod.string().url({ message: "La imagen tiene que ser un URL válido" }),
    stock: zod.number().nonnegative({ message: "El stock tiene que ser un número positivo" }),
    min_stock: zod.number().nonnegative({ message: "El minstock tiene que ser un número positivo" }),
    category_id: zod.number().nonnegative({ message: "El id de la categoría tiene que ser un número positivo" }),
    offer_percentage: zod.number().min(0).max(100, { message: "El porcentaje de oferta tiene que estar entre 0 y 100" }).default(0.0),
    product_status: zod.boolean().default(true).refine(val => typeof val === "boolean", {
        message: "El status tiene que ser un booleano"
    }),
    created_at: zod.date({ message: "La fecha de creación tiene que ser de tipo date" }).default(() => new Date()),
    updated_at: zod.date({ message: "La fecha de actualización tiene que ser de tipo date" }).default(() => new Date()),
})

export function validationCreate(data) {
    return validation.safeParse(data);
}