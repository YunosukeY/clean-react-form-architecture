export type FieldRenderProps = {
  name: string;
  value: unknown;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  error?: string;
};
