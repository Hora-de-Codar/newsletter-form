import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório"; // Use a chave diretamente para atribuir a mensagem de erro.
  }

  if (!data.email) {
    errors["email"] = "O e-mail é obrigatório";
  }

  if (!data.agree) {
    errors["agree"] = "Você precisa concordar com os termos";
  }

  return errors;
};
