import React from "react";
import { Form as FinalForm } from "react-final-form";
import FormTemplate from "../../form-ui/FormTemplate";
import { userSchema } from "../../schema/user";
import { ComponentContext } from "../../form-ui/ComponentContext";
import TextField from "./TextField";
import ErrorMessage from "./ErrorMessage";

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
    <ComponentContext.Provider
      value={{
        TextField,
        ErrorMessage,
      }}
    >
      <FinalForm
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => console.log(values)}
        render={({ handleSubmit }) => <FormTemplate onSubmit={handleSubmit} />}
        validate={validate}
      />
    </ComponentContext.Provider>
  );
};

export default Form;
