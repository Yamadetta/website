<template>
  <basic-card>
    <form class="form" @submit.prevent="sumbit">
      <h1>Авторизация</h1>

      <details>
        <summary>Объект формы</summary>
        <pre>{{ form }}</pre>
      </details>

      <div
        class="form__control"
        :class="{ invalid: !form.email.valid && form.email.touched }"
      >
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email.value"
          @blur="form.email.blur"
        />
        <small
          class="error-description"
          v-if="form.email.errors.required && form.email.touched"
        >
          Вы не ввели email
        </small>
        <small
          class="error-description"
          v-else-if="form.email.errors.emailValid && form.email.touched"
        >
          Значение не является адресом электронной почты
        </small>
      </div>

      <div
        class="form__control"
        :class="{ invalid: !form.password.valid && form.password.touched }"
      >
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          v-model="form.password.value"
          @blur="form.password.blur"
        />
        <small
          class="error-description"
          v-if="form.password.errors.required && form.password.touched"
        >
          Вы не ввели пароль
        </small>
        <small
          class="error-description"
          v-else-if="form.password.errors.minLength && form.password.touched"
        >
          Пароль меньше 8 символов
        </small>
      </div>

      <button class="btn light-2" type="submit" :disabled="!form.valid">
        Войти
      </button>
    </form>
  </basic-card>
</template>

<script setup>
import { useForm } from "@/use/form.js";

const required = (val) => !!val,
  minLength = function (num) {
    return function (val) {
      return val.length >= num;
    };
  },
  emailValid = function (value) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  };

const form = useForm({
  email: {
    value: "",
    validators: { required, emailValid },
  },
  password: {
    value: "",
    validators: { required, minLength: minLength(8) },
  },
});

function sumbit() {
  alert("Вы были авторизованы");
}
</script>

<style lang="scss" scoped>
.card {
  margin: 5rem auto;
  max-width: 700px;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    transition: background-color 0.2s ease-out;

    &.invalid {
      input {
        outline: 1px solid red;
        background-color: #ff00003d;
      }
    }

    label {
      font-size: 1.2rem;
    }

    .error-description {
      color: #ff5d5d;
      font-size: 0.9rem;
    }
  }
}

.btn {
  font-size: 1.2rem;
}
</style>
