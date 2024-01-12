import React from "react";
import { FieldRenderProps } from "./props";
import { TextField, Typography } from "@mui/material";

type FieldViewProps = {
  useField: (name: string) => FieldRenderProps;
  name: string;
};

const FieldView: React.FC<FieldViewProps> = ({ useField, name }) => {
  const { error, ...input } = useField(name);
  return (
    <>
      <TextField {...input} />
      <Typography color="error">{error}</Typography>
    </>
  );
};

export default FieldView;
