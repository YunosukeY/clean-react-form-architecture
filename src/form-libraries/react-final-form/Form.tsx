import React from "react";
import { Form as FinalForm } from "react-final-form";
import FormTemplate from "../../form-ui/FormTemplate";
import { userSchema } from "../../schema/user";
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

const Form: React.FC = () => {
  return (
    <FinalForm
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values) => console.log(values)}
      render={({
        handleSubmit,
        form: { change, blur, getState },
        dirty,
        valid,
      }) => (
        <FormTemplate
          getValue={() => undefined}
          setValue={change as (name: string, value: unknown) => void}
          isDirty={dirty}
          isValid={valid}
          validate={() => {}}
          onSubmit={handleSubmit}
          useField={useField}
        />
      )}
      validate={validate}
      validateOnBlur
      subscription={{ values: true, dirty: true, valid: true }}
    />
  );
};

export default Form;
