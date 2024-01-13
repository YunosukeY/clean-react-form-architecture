import React from "react";
import { GetUseField } from "./types";
import { TextField, Typography } from "@mui/material";

type FieldViewProps = {
  useDependencies: ReturnType<GetUseField>;
};

const FieldView: React.FC<FieldViewProps> = ({ useDependencies }) => {
  const { input, error } = useDependencies();
  return (
    <>
      <TextField {...input} error={error !== undefined} />
      <Typography color="error">{error}</Typography>
    </>
  );
};

export default FieldView;
