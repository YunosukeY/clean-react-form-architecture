import React from "react";
import { Form as FinalForm, FormRenderProps } from "react-final-form";
import FormView from "../../form-ui/FormView";
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
  return (
    <FinalForm
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values) => console.log(values)}
      render={({
        handleSubmit,
        form: { getFieldState, change, mutators },
        dirty,
        valid,
      }: FormRenderProps<User>) => (
        <FormView
          getValue={(name) => getFieldState(name as any)?.value}
          setValue={change as (name: string, value: unknown) => void}
          isDirty={dirty}
          isValid={valid}
          validate={mutators.validate}
          onSubmit={handleSubmit}
          getUseField={getUseField}
        />
      )}
      validate={validate}
      validateOnBlur
      subscription={{ values: true, dirty: true, valid: true }}
      mutators={{ validate: () => {} }}
    />
  );
};

export default FormPresenter;
