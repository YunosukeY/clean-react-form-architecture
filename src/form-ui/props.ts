import { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & { name: string };

export type ErrorMessageProps = { name: string };

export type FieldProps = {
  value: unknown;
  onChange: (event: any) => void;
  error?: string;
};
