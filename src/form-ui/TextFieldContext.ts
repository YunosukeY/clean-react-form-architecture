import { createContext } from "react";
import { TextFieldProps } from "./TextFieldProps";

export const TextFieldContext = createContext<
  React.FC<TextFieldProps> | undefined
>(undefined);
