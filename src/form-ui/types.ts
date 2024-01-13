import React from "react";

type Field = {
  name: string;
  value: unknown;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
  error?: string;
};

export type GetUseField = (name: string) => () => Field;
