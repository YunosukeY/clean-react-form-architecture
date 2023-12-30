import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormTemplate from "../../form-ui/FormTemplate";
import { User, userSchema } from "../../schema/user";
import { ComponentContext } from "../../form-ui/ComponentContext";
import TextField from "./TextField";
import ErrorMessage from "./ErrorMessage";

const validate = (user: unknown) => {
  const errors: Record<string, string> = {};

  const result = userSchema.safeParse(user);
  if (result.success) return errors;

  result.error.issues.forEach((issue) =>
    issue.path.forEach((name) => (errors[name] = issue.message))
  );

  return errors;
};

const Form: React.FC = () => {
  const formik = useFormik<User>({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => console.log(values),
    validate,
  });

  return (
    <ComponentContext.Provider
      value={{
        TextField,
        ErrorMessage,
      }}
    >
      <FormikProvider value={formik}>
        <FormTemplate onSubmit={formik.handleSubmit} />
      </FormikProvider>
    </ComponentContext.Provider>
  );
};

export default Form;
