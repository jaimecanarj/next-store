import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nombre debe contener al menos 2 caracteres." })
    .max(100, { message: "Nombre no puede superar 100 caracteres." }),
  company: z.string().min(4),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Precio debe ser un número positivo." }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: "La descripción debe contener entre 10 y 1000 palabras." }
  ),
  featured: z.coerce.boolean(),
});

const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "El tamaño de la imagen debe ser menos de 1MB.")
    .refine((file) => {
      return (
        !file ||
        acceptedFileTypes.some((type) => {
          return file.type.startsWith(type);
        })
      );
    }, "Archivo debe ser una imagen.");
};

export const imageSchema = z.object({
  image: validateImageFile(),
});

export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown
): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => {
      return error.message;
    });
    throw new Error(errors.join(" "));
  }

  return result.data;
};

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== "", {
    message: "ID del producto no puede estar vacía.",
  }),
  authorName: z.string().refine((value) => value !== "", {
    message: "Nombre del autor no puede estar vacío.",
  }),
  authorImageUrl: z.string().refine((value) => value !== "", {
    message: "URL de la imagen del autor no puede estar vacía.",
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Puntuación debe ser al menos de 1." })
    .max(5, { message: "Puntuación debe ser como máximo de 5." }),
  comment: z
    .string()
    .min(10, { message: "Comentario debe ser al menos 10 caracteres." })
    .max(1000, { message: "Comentario no puede superar 1000 caracteres." }),
});
