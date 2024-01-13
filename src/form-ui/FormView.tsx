import React from "react";
import { Button, Grid } from "@mui/material";
import { GetUseField } from "./types";
import Field from "./Field";

export type FormViewProps = {
  getValue: (path: string) => unknown;
  setValue: (path: string, value: unknown) => void;
  validate: () => void;
  isDirty: boolean;
  isValid: boolean;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  getUseField: GetUseField;
};

const FormView: React.FC<FormViewProps> = ({
  getValue,
  setValue,
  isDirty,
  isValid,
  onSubmit,
  getUseField,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Field useDependencies={getUseField("firstName")} />
        </Grid>
        <Grid item>
          <Field useDependencies={getUseField("lastName")} />
        </Grid>
      </Grid>
      <Button type="submit" disabled={!isDirty || !isValid}>
        Submit
      </Button>
    </form>
  );
};

export default FormView;
