import { useController, useFormContext } from "react-hook-form";
import { GetUseField } from "../../form-ui/props";
import { get } from "lodash";

export const getUseField: GetUseField = (name) => () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    control,
    name,
  });

  return {
    name,
    value: field.value,
    onChange: field.onChange,
    onBlur: field.onBlur,
    error: get(errors, name)?.message as string | undefined,
  };
};
