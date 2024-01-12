import { useField as useFormikField } from "formik";
import { FieldProps } from "../../form-ui/props";

export const useField = (name: string): FieldProps => {
  const [field, meta] = useFormikField(name);
  return {
    value: field.value,
    onChange: field.onChange,
    error: meta.touched ? meta.error : undefined,
  };
};
