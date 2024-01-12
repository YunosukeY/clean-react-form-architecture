import { useController, useFormContext } from "react-hook-form";
import { FieldProps } from "../../form-ui/props";
import { get } from "lodash";

export const useField = (name: string): FieldProps => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    control,
    name,
  });

  return {
    value: field.value,
    onChange: field.onChange,
    error: get(errors, name) as string | undefined,
  };
};
