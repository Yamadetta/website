import { watch, reactive, ref } from "vue";
export function useField(field) {
  const valid = ref(true);
  const value = ref(field.value);
  const errors = reactive({});
  const touched = ref(false);

  function reassign(value) {
    for (const key in field.validators) {
      valid.value = true;

      const isValid = field.validators[key](value);
      errors[key] = !isValid;

      if (!isValid) {
        valid.value = false;
      }
    }
  }

  reassign(value.value);

  watch(value, (newValue) => {
    reassign(newValue);
  });

  return { value, valid, errors, touched, blur: () => (touched.value = true) };
}
