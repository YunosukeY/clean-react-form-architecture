import { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & { name: string };

export type ErrorMessageProps = { name: string };
