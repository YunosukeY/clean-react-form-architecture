import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextFieldContext } from "./form-ui/TextFieldContext";
import HookForm from "./form-libraries/react-hook-form/Form";
import HookFormTextField from "./form-libraries/react-hook-form/TextField";
import Formik from "./form-libraries/formik/Form";
import FormikTextField from "./form-libraries/formik/TextField";
import FinalForm from "./form-libraries/react-final-form/Form";
import FinalFormTextField from "./form-libraries/react-final-form/TextField";

function App() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography>React Hook Form</Typography>
        <TextFieldContext.Provider value={HookFormTextField}>
          <HookForm />
        </TextFieldContext.Provider>
      </Grid>
      <Grid item>
        <Typography>Formik</Typography>
        <TextFieldContext.Provider value={FormikTextField}>
          <Formik />
        </TextFieldContext.Provider>
      </Grid>
      <Grid item>
        <Typography>React Final Form</Typography>
        <TextFieldContext.Provider value={FinalFormTextField}>
          <FinalForm />
        </TextFieldContext.Provider>
      </Grid>
    </Grid>
  );
}

export default App;
