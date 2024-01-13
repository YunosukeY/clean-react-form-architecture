import { useController, useFormContext } from "react-hook-form";
import { GetUseField } from "../../form-ui/props";

export const getUseField: GetUseField = (name) => () => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
  });

  return {
    name,
    value: field.value,
    onChange: field.onChange,
    onBlur: field.onBlur,
    error: fieldState.error?.message,
  };
};
