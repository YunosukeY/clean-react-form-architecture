import React from "react";
import { Button, Grid } from "@mui/material";
import { FieldRenderProps } from "./props";
import Field from "./Field";

type FormTemplateProps = {
  getValue: (path: string) => unknown;
  setValue: (path: string, value: unknown) => void;
  validate: () => void;
  isDirty: boolean;
  isValid: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  useField: (name: string) => FieldRenderProps;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
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
          <Field useField={useField} name="firstName" />
        </Grid>
        <Grid item>
          <Field useField={useField} name="lastName" />
        </Grid>
      </Grid>
      <Button type="submit" disabled={!isDirty || !isValid}>
        Submit
      </Button>
    </form>
  );
};

export default FormTemplate;
