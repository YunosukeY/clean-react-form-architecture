import { useField } from "formik";
import { GetUseField } from "../../form-ui/types";

export const getUseField: GetUseField = (name) => () => {
  const [field, meta] = useField(name);
  return {
    input: {
      name,
      value: field.value,
      onChange: field.onChange,
      onBlur: field.onBlur,
    },
    error: meta.touched ? meta.error : undefined,
  };
};
