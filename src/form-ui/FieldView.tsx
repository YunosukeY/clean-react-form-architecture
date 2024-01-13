import React from "react";
import { GetUseField } from "./types";
import { TextField, Typography } from "@mui/material";

type FieldViewProps = {
  useDependencies: ReturnType<GetUseField>;
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
