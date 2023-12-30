import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { Field, FieldProps } from "formik";
import { TextFieldProps } from "../../form-ui/ComponentProps";

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <Field name={props.name}>
      {({ field }: FieldProps) => <MuiTextField {...props} {...field} />}
    </Field>
  );
};

export default TextField;
