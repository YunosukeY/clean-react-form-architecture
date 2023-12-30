import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";
import { ErrorMessageProps } from "../../form-ui/ComponentProps";
import { Typography } from "@mui/material";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <HookFormErrorMessage
      name={name}
      errors={errors}
      render={({ message }) => <Typography color="error">{message}</Typography>}
    />
  );
};

export default ErrorMessage;
