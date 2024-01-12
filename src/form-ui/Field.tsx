import React from "react";
import { FieldRenderProps } from "./props";
import { TextField, Typography } from "@mui/material";

type FieldProps = {
  useField: (name: string) => FieldRenderProps;
  name: string;
};

const Field: React.FC<FieldProps> = ({ useField, name }) => {
  const { error, ...input } = useField(name);
  return (
    <>
      <TextField {...input} />
      <Typography color="error">{error}</Typography>
    </>
  );
};

export default Field;
