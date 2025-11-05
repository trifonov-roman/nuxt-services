import type {
  CheckboxGroupObject,
  KeysWithPrimitiveValues,
} from "./Group/type";

export const useCheckboxGroup = <
  T extends CheckboxGroupObject,
  K extends KeysWithPrimitiveValues<T>
>(
  array: Ref<T[]> | T[],
  valueKey: K,
  externalModel?: Ref<T[K][]>
) => {
  const model: Ref<Array<T[K]>> = externalModel ?? ref([]);

  const enabledItems = computed(() =>
    unref(array).filter((item) => item.disabled !== true)
  );
  const isAllDisabled = computed(() => enabledItems.value.length === 0);

  const indeterminate = computed(() => {
    const checkedCount = model.value.length;
    return checkedCount > 0 && checkedCount < enabledItems.value.length;
  });
const allEnabledValues = computed(() => enabledItems.value.map(item => item[valueKey]));

const checkAllModel = computed({
  get: () => {
    if (isAllDisabled.value) return false;
    // все ли enabled уже выбраны
    return allEnabledValues.value.every(v => model.value.includes(v));
  },
  set: (val: boolean) => {
    if (val) {
      // добавить все enabled, не трогая выбранные у disabled
      const set = new Set(model.value);
      for (const v of allEnabledValues.value) set.add(v);
      model.value = Array.from(set);
    } else {
      // убрать только enabled, оставив выбранные у disabled
      const enabled = new Set(allEnabledValues.value);
      model.value = model.value.filter(v => !enabled.has(v));
    }
  },
});
  /**
   * Сброс выбранных значений к начальному состоянию (пустой массив)
   */
  const reset = () => {
    model.value = [];
  };

  return {
    model,
    array,
    value: valueKey,
    indeterminate,
    checkAllModel,
    isAllDisabled,
    reset,
  };
};
