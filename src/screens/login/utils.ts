import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  password: z
    .string()
    .min(1, "Campo obrigatório")
    .min(8, "Senha deve ter no mínimo 8 caracteres"),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
