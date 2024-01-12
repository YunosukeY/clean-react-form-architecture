import React from "react";
import { Button, Grid } from "@mui/material";
import { FieldRenderProps } from "./props";
import FieldView from "./FieldView";

type FormTemplateProps = {
  getValue: (path: string) => unknown;
  setValue: (path: string, value: unknown) => void;
  validate: () => void;
  isDirty: boolean;
  isValid: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  useField: (name: string) => FieldRenderProps;
};

const FormView: React.FC<FormTemplateProps> = ({
  getValue,
  setValue,
  isDirty,
  isValid,
  onSubmit,
  useField,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <FieldView useField={useField} name="firstName" />
        </Grid>
        <Grid item>
          <FieldView useField={useField} name="lastName" />
        </Grid>
      </Grid>
      <Button type="submit" disabled={!isDirty || !isValid}>
        Submit
      </Button>
    </form>
  );
};

export default FormView;
