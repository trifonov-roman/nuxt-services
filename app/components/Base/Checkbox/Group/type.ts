import type { CheckboxValues } from "../type";

export type CheckboxGroupObject = {
  [key: string]: unknown;
  disabled?: boolean;
};
export type KeysWithPrimitiveValues<T> = {
  [K in keyof T]: T[K] extends CheckboxValues ? K : never;
}[keyof T];

export type CheckboxGroupProps<T, K extends keyof T> = {
  modelValue: T[K][];
  array: T[];
  optionValue: K;
  optionText: keyof T;
};
