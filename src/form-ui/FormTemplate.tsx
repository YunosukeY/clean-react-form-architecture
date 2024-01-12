import React from "react";
import { Button, Grid } from "@mui/material";
import { ErrorMessageProps, TextFieldProps } from "./props";

type FormTemplateProps = {
  getValue: (path: string) => unknown;
  setValue: (path: string, value: unknown) => void;
  validate: () => void;
  isDirty: boolean;
  isValid: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  TextField: React.FC<TextFieldProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
  getValue,
  setValue,
  isDirty,
  isValid,
  onSubmit,
  TextField,
  ErrorMessage,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField name="firstName" label="First name" />
          <ErrorMessage name="firstName" />
        </Grid>
        <Grid item>
          <TextField name="lastName" label="Last name" />
          <ErrorMessage name="lastName" />
        </Grid>
      </Grid>
      <Button type="submit" disabled={!isDirty || isValid}>
        Submit
      </Button>
    </form>
  );
};

export default FormTemplate;
