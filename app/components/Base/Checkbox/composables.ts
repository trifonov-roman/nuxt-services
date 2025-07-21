import type {
  CheckboxGroupObject,
  KeysWithPrimitiveValues,
} from "./Group/type";

export const useCheckboxGroup = <
  T extends CheckboxGroupObject,
  K extends KeysWithPrimitiveValues<T>
>(
  array: Ref<T[]> | T[],
  valueKey: K
) => {
  const model = ref<T[K][]>([]);
  const enabledItems = computed(() =>
    unref(array).filter((item) => item.disabled !== true)
  );
  const indeterminate = computed(() => {
    const checkedCount = model.value.length;
    return checkedCount > 0 && checkedCount < enabledItems.value.length;
  });

  const checkAllModel = computed({
    get: () => model.value.length === enabledItems.value.length,
    set: (val: boolean) => {
      model.value = val ? enabledItems.value.map((item) => item[valueKey]) : [];
    },
  });
  return {
    model,
    array,
    value: valueKey,
    indeterminate,
    checkAllModel,
  };
};
