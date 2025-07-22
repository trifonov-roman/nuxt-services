export type CheckboxValues = string | number;

export type CheckboxOptions = {
  disabled?: boolean;
  indeterminate?: boolean;
};
export type CheckboxProps<T extends CheckboxValues> = {
  value?: T;
  text?: string;
} & CheckboxOptions;
