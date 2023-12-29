import React from "react";
import { FormikProvider, useFormik } from "formik";
import FormTemplate from "../../form-ui/FormTemplate";

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <FormikProvider value={formik}>
      <FormTemplate onSubmit={formik.handleSubmit} />
    </FormikProvider>
  );
};

export default Form;
