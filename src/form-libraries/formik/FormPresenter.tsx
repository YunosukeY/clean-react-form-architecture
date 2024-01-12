import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormView from "../../form-ui/FormView";
import { User, userSchema } from "../../schema/user";
import { useField } from "./useField";

const validate = (user: unknown) => {
  const errors: Record<string, string> = {};

  const result = userSchema.safeParse(user);
  if (result.success) return errors;

  result.error.issues.forEach((issue) =>
    issue.path.forEach((name) => (errors[name] = issue.message))
  );

  return errors;
};

const FormPresenter: React.FC = () => {
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
      <FormView
        getValue={() => undefined}
        setValue={formik.setFieldValue}
        isDirty={formik.dirty}
        isValid={formik.isValid}
        validate={() => {}}
        onSubmit={formik.handleSubmit}
        useField={useField}
      />
    </FormikProvider>
  );
};

export default FormPresenter;
