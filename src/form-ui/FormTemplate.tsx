import React from "react";
import { Button, Grid } from "@mui/material";
import { ErrorMessageProps, TextFieldProps } from "./ComponentProps";

type FormTemplateProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  TextField: React.FC<TextFieldProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormTemplate;
