import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormView, { FormViewProps } from "../../form-ui/FormView";
import { User, userSchema } from "../../schema/user";
import { getUseField } from "./getUseField";

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
  const { formik, ...rest } = useDependencies();

  return (
    <FormikProvider value={formik}>
      <FormView {...rest} />
    </FormikProvider>
  );
};

const useDependencies = (): FormViewProps & {
  formik: ReturnType<typeof useFormik<User>>;
} => {
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

  return {
    formik,
    getValue: (name: string) => formik.getFieldProps(name).value,
    setValue: formik.setFieldValue,
    isDirty: formik.dirty,
    isValid: formik.isValid,
    validate: formik.validateForm,
    onSubmit: formik.handleSubmit,
    getUseField,
  };
};

export default FormPresenter;
