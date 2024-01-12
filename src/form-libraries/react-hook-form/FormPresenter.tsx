import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormView from "../../form-ui/FormView";
import { User, userSchema } from "../../schema/user";
import { useField } from "./useField";

const FormPresenter: React.FC = () => {
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
      <FormView
        getValue={methods.watch}
        setValue={methods.setValue as (path: string, value: unknown) => void}
        isDirty={methods.formState.isDirty}
        isValid={methods.formState.isValid}
        validate={methods.trigger}
        onSubmit={methods.handleSubmit((data) => console.log(data))}
        useField={useField}
      />
    </FormProvider>
  );
};

export default FormPresenter;
