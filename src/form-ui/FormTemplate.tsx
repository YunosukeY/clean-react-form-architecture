import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import { TextFieldContext } from "./TextFieldContext";

type FormTemplateProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormTemplate: React.FC<FormTemplateProps> = ({ onSubmit }) => {
  const TextField = useContext(TextFieldContext);
  if (TextField === undefined) return null;

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField name="firstName" label="First name" />
        </Grid>
        <Grid item>
          <TextField name="lastName" label="Last name" />
        </Grid>
      </Grid>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormTemplate;
