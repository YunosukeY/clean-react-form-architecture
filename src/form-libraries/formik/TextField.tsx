import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { FastField, FieldProps } from "formik";
import { TextFieldProps } from "../../form-ui/props";

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <FastField name={props.name}>
      {({ field }: FieldProps) => <MuiTextField {...props} {...field} />}
    </FastField>
  );
};

export default TextField;
