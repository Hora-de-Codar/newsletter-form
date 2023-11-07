import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: User[] = [];

  const extractedErrors: Error = {};

  if (!data.name) {
    errors.push({ name: "O nome é obrigatório" });
  }

  if (!data.email) {
    errors.push({ email: "O e-mail é obrigatório" });
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
