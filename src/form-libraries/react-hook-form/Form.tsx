import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTemplate from "../../form-ui/FormTemplate";
import { User, userSchema } from "../../schema/user";
import TextField from "./TextField";
import ErrorMessage from "./ErrorMessage";

const Form: React.FC = () => {
  const methods = useForm<User>({
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
        TextField={TextField}
        ErrorMessage={ErrorMessage}
      />
    </FormProvider>
  );
};

export default Form;
