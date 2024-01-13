import React from "react";

type Input = {
  name: string;
  value: unknown;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
};

export type Field = {
  input: Input;
  error?: string;
};

export type GetUseField = (name: string) => () => Field;
