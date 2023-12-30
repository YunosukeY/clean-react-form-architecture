import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormTemplate from "../../form-ui/FormTemplate";
import { User, userSchema } from "../../schema/user";

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
    <FormikProvider value={formik}>
      <FormTemplate onSubmit={formik.handleSubmit} />
    </FormikProvider>
  );
};

export default Form;
