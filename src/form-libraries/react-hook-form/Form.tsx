import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTemplate from "../../form-ui/FormTemplate";
import { userSchema } from "../../schema/user";

const Form: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(userSchema),
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
