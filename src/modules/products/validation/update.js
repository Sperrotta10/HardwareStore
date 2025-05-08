import zod from 'zod';

const validation = zod.object({
    name: zod.string().trim().min(1, { message: "El nombre no puede estar vacío" }).optional(),
    description: zod.string().max(255, { message: "La descripción tiene que ser como máximo 255 caracteres" }).optional(),
    price: zod.number().positive({ message: "El precio tiene que ser un número mayor a cero" }).optional(),
    image: zod.string().url({ message: "La imagen tiene que ser un URL válido" }).optional(),
    stock: zod.number().nonnegative({ message: "El stock tiene que ser un número positivo" }).optional(),
    min_stock: zod.number().nonnegative({ message: "El minstock tiene que ser un número positivo" }).optional(),
    category_id: zod.number().nonnegative({ message: "El id de la categoría tiene que ser un número positivo" }).optional(),
    offer_percentage: zod.number().min(0).max(100, { message: "El porcentaje de oferta tiene que estar entre 0 y 100" }).default(0.0).optional(),
    product_status: zod.boolean().optional(),
    updated_at: zod.date({ message: "La fecha de actualización tiene que ser de tipo date" }).default(() => new Date()),
});

export function validationUpdate(data) {
    return validation.safeParse(data);
}