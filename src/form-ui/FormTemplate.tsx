import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import { ComponentContext } from "./ComponentContext";

type FormTemplateProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormTemplate: React.FC<FormTemplateProps> = ({ onSubmit }) => {
  const value = useContext(ComponentContext);
  if (value === undefined) return null;
  const { TextField, ErrorMessage } = value;

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
