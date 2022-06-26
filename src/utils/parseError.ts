export const parseError = (error: any): string => {
  if (error.response) {
    if (error.response?.data.error === "INVALID_USERNAME") {
      return "Usuário inválido.";
    }

    if (error.response?.data.error === "INVALID_PASSWORD") {
      return "Senha inválida.";
    }

    if (error.response?.data.error === "NOT_FOUND") {
      return "Item não encontrado.";
    }

    if (error.response?.data.error === "NOT_OWNED") {
      return "Item de outro autor.";
    }
  }

  return "Erro ao processar requisição, tente mais tarde novamente.";
};
