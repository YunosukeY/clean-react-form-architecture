import React from "react";
import { Grid, Typography } from "@mui/material";
import { ComponentContext } from "./form-ui/ComponentContext";
import HookForm from "./form-libraries/react-hook-form/Form";
import HookFormTextField from "./form-libraries/react-hook-form/TextField";
import HookFormErrorMessage from "./form-libraries/react-hook-form/ErrorMessage";
import Formik from "./form-libraries/formik/Form";
import FormikTextField from "./form-libraries/formik/TextField";
import FinalForm from "./form-libraries/react-final-form/Form";
import FinalFormTextField from "./form-libraries/react-final-form/TextField";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>React Hook Form</Typography>
        <ComponentContext.Provider
          value={{
            TextField: HookFormTextField,
            ErrorMessage: HookFormErrorMessage,
          }}
        >
          <HookForm />
        </ComponentContext.Provider>
      </Grid>
      {/* <Grid item>
        <Typography>Formik</Typography>
        <ComponentContext.Provider value={{ TextField: FormikTextField }}>
          <Formik />
        </ComponentContext.Provider>
      </Grid>
      <Grid item>
        <Typography>React Final Form</Typography>
        <ComponentContext.Provider value={{ TextField: FinalFormTextField }}>
          <FinalForm />
        </ComponentContext.Provider>
      </Grid> */}
    </Grid>
  );
}

export default App;
