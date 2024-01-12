import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { Field } from "react-final-form";
import { TextFieldProps } from "../../form-ui/props";

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <Field
      name={props.name}
      render={({ input }) => <MuiTextField {...props} {...input} />}
    />
  );
};

export default TextField;
