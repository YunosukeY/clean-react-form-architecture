import React from "react";
import { Field, GetUseField } from "./types";
import { TextField, Typography } from "@mui/material";

type FieldViewProps = Field;

export const FieldView: React.FC<FieldViewProps> = ({ input, error }) => {
  return (
    <>
      <TextField {...input} error={error !== undefined} />
      <Typography color="error">{error}</Typography>
    </>
  );
};

type FieldPresenterProps = {
  useDependencies: ReturnType<GetUseField>;
};

const FieldPresenter: React.FC<FieldPresenterProps> = ({ useDependencies }) => {
  const { input, error } = useDependencies();
  return <FieldView input={input} error={error} />;
};

export default FieldPresenter;
