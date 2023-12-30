import React from "react";
import { Grid, Typography } from "@mui/material";
import HookForm from "./form-libraries/react-hook-form/Form";
import Formik from "./form-libraries/formik/Form";
import FinalForm from "./form-libraries/react-final-form/Form";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>React Hook Form</Typography>
        <HookForm />
      </Grid>
      <Grid item>
        <Typography>Formik</Typography>
        <Formik />
      </Grid>
      <Grid item>
        <Typography>React Final Form</Typography>
        <FinalForm />
      </Grid>
    </Grid>
  );
}

export default App;
