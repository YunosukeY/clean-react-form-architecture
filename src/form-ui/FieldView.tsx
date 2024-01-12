import React from "react";
import { Field } from "./props";
import { TextField, Typography } from "@mui/material";

type FieldViewProps = {
  useDependencies: () => Field;
};

const FieldView: React.FC<FieldViewProps> = ({ useDependencies }) => {
  const { error, ...input } = useDependencies();
  return (
    <>
      <TextField {...input} />
      <Typography color="error">{error}</Typography>
    </>
  );
};

export default FieldView;
