type Field = {
  name: string;
  value: unknown;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  error?: string;
};

export type GetUseField = (name: string) => () => Field;
