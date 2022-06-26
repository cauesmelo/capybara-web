import { IInputState } from "../interfaces/IInputState";
import { IReactState } from "../interfaces/IReactState";

export const hasEmptyInputs = (form: IReactState<IInputState>[]) => {
  return form.reduce((isFormValid, field) => {
    const [fieldState, setFieldState] = field;
    if (!fieldState.content) {
      setFieldState((prevState: IInputState) => ({
        ...prevState,
        error: "Campo obrigatório",
      }));
      return true;
    }
    return isFormValid;
  }, false);
};
