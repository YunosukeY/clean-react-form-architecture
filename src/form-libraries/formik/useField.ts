import { useField as useFormikField } from "formik";
import { FieldRenderProps } from "../../form-ui/props";

export const useField = (name: string): FieldRenderProps => {
  const [field, meta] = useFormikField(name);
  return {
    name,
    value: field.value,
    onChange: field.onChange,
    onBlur: field.onBlur,
    error: meta.touched ? meta.error : undefined,
  };
};
