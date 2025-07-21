export type CheckboxValues = string | number;

export type CheckboxProps<T extends CheckboxValues> = {
  value?: T;
  text?: string;
  disabled?: boolean;
  indeterminate?: boolean;
};
