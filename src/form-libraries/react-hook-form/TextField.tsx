import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { TextFieldProps } from "../../form-ui/props";

const TextField: React.FC<TextFieldProps> = (props) => {
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.defaultValue,
  });

  return <MuiTextField {...props} {...field} />;
};

export default TextField;
