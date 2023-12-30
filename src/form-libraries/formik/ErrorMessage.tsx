import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";
import { ErrorMessageProps } from "../../form-ui/ComponentProps";
import { Typography } from "@mui/material";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
  return (
    <FormikErrorMessage
      name={name}
      render={(message) => <Typography color="error">{message}</Typography>}
    />
  );
};

export default ErrorMessage;
