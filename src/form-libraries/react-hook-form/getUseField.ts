import { useController, useFormContext } from "react-hook-form";
import { GetUseField } from "../../form-ui/types";

export const getUseField: GetUseField = (name) => () => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
  });

  return {
    input: {
      name,
      value: field.value,
      onChange: field.onChange,
      onBlur: field.onBlur,
    },
    error: fieldState.error?.message,
  };
};
