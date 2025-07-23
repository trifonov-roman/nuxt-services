import type { CheckboxOptions, CheckboxValues } from "../type";

export type CheckboxGroupObject = {
  [key: string]: unknown;
} & CheckboxOptions;
export type KeysWithPrimitiveValues<T> = {
  [K in keyof T]: T[K] extends CheckboxValues ? K : never;
}[keyof T];

export type CheckboxGroupProps<T, K extends keyof T> = {
  array: T[];
  optionValue: K;
  optionText: keyof T;
};
