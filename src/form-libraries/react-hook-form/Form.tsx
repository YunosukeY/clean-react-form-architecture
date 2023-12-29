import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormTemplate from "../../form-ui/FormTemplate";

const Form: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <FormTemplate
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      />
    </FormProvider>
  );
};

export default Form;
