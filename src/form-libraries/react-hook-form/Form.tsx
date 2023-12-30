import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTemplate from "../../form-ui/FormTemplate";
import { User, userSchema } from "../../schema/user";
import { ComponentContext } from "../../form-ui/ComponentContext";
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
    <ComponentContext.Provider
      value={{
        TextField,
        ErrorMessage,
      }}
    >
      <FormProvider {...methods}>
        <FormTemplate
          onSubmit={methods.handleSubmit((data) => console.log(data))}
        />
      </FormProvider>
    </ComponentContext.Provider>
  );
};

export default Form;
