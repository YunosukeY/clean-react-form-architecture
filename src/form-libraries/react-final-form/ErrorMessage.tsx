import React from "react";
import { Field } from "react-final-form";
import { ErrorMessageProps } from "../../form-ui/ComponentProps";
import { Typography } from "@mui/material";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
  return (
    <Field
      name={name}
      render={({ meta }) =>
        meta.touched && <Typography color="error">{meta.error}</Typography>
      }
    />
  );
};

export default ErrorMessage;
