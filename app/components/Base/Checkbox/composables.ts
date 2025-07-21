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
  const model: Ref<Array<T[K]>> = ref([]);
  const enabledItems = computed(() =>
    unref(array).filter((item) => item.disabled !== true)
  );
  const isAllDisabled = computed(() => enabledItems.value.length === 0);

  const indeterminate = computed(() => {
    const checkedCount = model.value.length;
    return checkedCount > 0 && checkedCount < enabledItems.value.length;
  });

  const checkAllModel = computed({
    get: () => {
      if (isAllDisabled.value) return false;
      return enabledItems.value.every((item) =>
        model.value.includes(item[valueKey])
      );
    },
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
    isAllDisabled,
  };
};
