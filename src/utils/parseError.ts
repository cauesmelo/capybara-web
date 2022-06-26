export const parseError = (error: any): string => {
  if (error.response) {
    if (error.response?.data.error === "INVALID_USERNAME") {
      return "Usuário inválido.";
    }

    if (error.response?.data.error === "INVALID_PASSWORD") {
      return "Senha inválida.";
    }
  }

  return "Erro ao processar requisição, tente mais tarde novamente.";
};
