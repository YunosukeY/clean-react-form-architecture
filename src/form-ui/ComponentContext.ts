import { createContext } from "react";
import { ErrorMessageProps, TextFieldProps } from "./ComponentProps";

type ContextValue = {
  TextField: React.FC<TextFieldProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
};

export const ComponentContext = createContext<ContextValue | undefined>(
  undefined
);
