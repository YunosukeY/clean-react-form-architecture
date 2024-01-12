import React from "react";
import { Form as FinalForm } from "react-final-form";
import FormView from "../../form-ui/FormView";
import { userSchema } from "../../schema/user";
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
        form: { change, blur, getState },
        dirty,
        valid,
      }) => (
        <FormView
          getValue={() => undefined}
          setValue={change as (name: string, value: unknown) => void}
          isDirty={dirty}
          isValid={valid}
          validate={() => {}}
          onSubmit={handleSubmit}
          getUseField={getUseField}
        />
      )}
      validate={validate}
      validateOnBlur
      subscription={{ values: true, dirty: true, valid: true }}
    />
  );
};

export default FormPresenter;
