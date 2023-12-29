import React from "react";
import { Form as FinalForm } from "react-final-form";
import FormTemplate from "../../form-ui/FormTemplate";

const Form: React.FC = () => {
  return (
    <FinalForm
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit }) => <FormTemplate onSubmit={handleSubmit} />}
    />
  );
};

export default Form;
