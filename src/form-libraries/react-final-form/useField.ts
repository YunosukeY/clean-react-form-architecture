import { useField as useFinalFormField } from "react-final-form";
import { FieldRenderProps } from "../../form-ui/props";

export const useField = (name: string): FieldRenderProps => {
  const { input, meta } = useFinalFormField(name);

  return {
    name,
    value: input.value,
    onChange: input.onChange,
    onBlur: input.onBlur,
    error: meta.touched ? meta.error : undefined,
  };
};
