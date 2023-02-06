import { computed, reactive } from "vue";
import { useField } from "@/use/field";

export function useForm(init = {}) {
  const form = reactive({});

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);

    if (!form[key].valid) form.valid = false;
  }

  form.valid = computed(() => {
    let flag = true;
    for (const key in form) {
      if (key === "valid") continue;

      if (!form[key].valid) {
        flag = false;
        break;
      }
    }
    return flag;
  });

  return form;
}
