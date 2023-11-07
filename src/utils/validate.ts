import { User } from "../types/User";

export const validate = (data: User) => {
  const errors: User[] = [];

  const extractedErrors: User = {};

  if (!data.name) {
    errors.push({ name: "O nome é obrigatório" });
  }

  if (!data.lastname) {
    errors.push({ lastname: "O sobrenome é obrigatório" });
  }

  if (!data.email) {
    errors.push({ email: "O e-mail é obrigatório" });
  }

  if (!data.gender) {
    errors.push({ gender: "Selecione uma opção" });
  }

  if (!data.password) {
    errors.push({ password: "A senha é obrigatória" });
  }

  if (!data?.confirmPassword) {
    errors.push({ confirmPassword: "A confirmação da senha é obrigatória" });
  }

  if (data.confirmPassword !== data.password) {
    errors.push({ confirmPassword: "As senhas não conferem" });
  }

  if (!data.agree) {
    errors.push({ agree: "Você precisa concordar com os termos" });
  }

  errors.forEach((err) => {
    const key = Object.keys(err)[0];
    extractedErrors[key] = err[key];
  });

  return extractedErrors;
};
