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
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <FormTemplate
        getValue={methods.watch}
        setValue={methods.setValue as (path: string, value: unknown) => void}
        isDirty={methods.formState.isDirty}
        isValid={methods.formState.isValid}
        validate={methods.trigger}
        onSubmit={methods.handleSubmit((data) => console.log(data))}
        TextField={TextField}
        ErrorMessage={ErrorMessage}
      />
    </FormProvider>
  );
};

export default Form;
