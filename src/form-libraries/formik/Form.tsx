import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormTemplate from "../../form-ui/FormTemplate";
import { User, userSchema } from "../../schema/user";
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
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <FormikProvider value={formik}>
      <FormTemplate
        getValue={() => undefined}
        setValue={formik.setFieldValue}
        isDirty={formik.dirty}
        isValid={formik.isValid}
        validate={() => {}}
        onSubmit={formik.handleSubmit}
        TextField={TextField}
        ErrorMessage={ErrorMessage}
      />
    </FormikProvider>
  );
};

export default Form;
