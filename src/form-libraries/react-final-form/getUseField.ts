import { useField } from "react-final-form";
import { GetUseField } from "../../form-ui/types";

export const getUseField: GetUseField = (name) => () => {
  const { input, meta } = useField(name);

  return {
    name,
    value: input.value,
    onChange: input.onChange,
    onBlur: input.onBlur,
    error: meta.touched ? meta.error : undefined,
  };
};
