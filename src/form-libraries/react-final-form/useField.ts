import { useField as useFinalFormField } from "react-final-form";
import { FieldProps } from "../../form-ui/props";

export const useField = (name: string): FieldProps => {
  const { input, meta } = useFinalFormField(name);

  return {
    value: input.value,
    onChange: input.onChange,
    error: meta.touched ? meta.error : undefined,
  };
};
