import { z } from "zod";
import { UserRole } from "../../services/graphql/graphql";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(3, "Campo obrigatório"),
    lastName: z.string().min(3, "Campo obrigatório"),
    userName: z.string().min(3, "Campo obrigatório"),
    email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
    role: z.nativeEnum(UserRole),
    password: z
      .string()
      .min(1, "Campo obrigatório")
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
    passwordConfirm: z
      .string()
      .min(1, "Campo obrigatório")
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais",
        path: ["passwordConfirm"],
      });
    }
  });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
