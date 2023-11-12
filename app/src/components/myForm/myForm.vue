<script lang="ts" setup>
import { ref, computed } from "vue";
import { type DataTableType } from "../type";
import { defineProps, defineEmits } from "vue";
// описываем тип принимаемых пропсов
type PropsType = {
  users: DataTableType;
};
// регистрируем принмаемые промы с верхнего уровня
const props = defineProps<Partial<PropsType>>();
// значение которое будет применено если с верхнего уровня ничего не передано
const defaultValue: DataTableType = {
  name: "",
  lastName: "",
  experience: "",
  age: "",
  address: "",
};
// создаем реактивный элемент и проверяем на переданные просы ранее и используем спред для разрыва двухстороннего связывания
const model = ref<DataTableType>(
  props.users ? { ...props.users } : { ...defaultValue },
);
//emit для добавления нового юзера
const emit = defineEmits<{
  (e: "onSubmit:form", data: DataTableType): void;
}>();
// функция для обнуления значений инпутов
const onReset = () => {
  model.value = {
    name: "",
    lastName: "",
    experience: "",
    age: "",
    address: "",
  };
};
// маленькая простая валидация которая проверяет на пустоту отправляемой формы.
// если хотя бы 1 инпут заполнен то кнопка становить аткивной
const isEmptyModel = computed(() => {
  const values = Object.values(model.value);
  const check = values.reduce((a, b) => a + b);

  return check.length < 1;
});
// маленькая простая валидация которая проверяет на пустоту отправляемой формы.
// если инпуты пустые но функция ничего не отправляет
const onSubmit = () => {
  const values = Object.values(model.value);

  const check = values.reduce((a, b) => a + b);

  if (check.length < 1) return;

  emit("onSubmit:form", model.value);
  onReset();
};
</script>

<template>
  <form class="wrap">
    <h2>Form Window</h2>
    <label for="name">Name:</label>
    <input id="name" type="text" v-model="model.name" autocomplete="off" />

    <label for="lastName">Last Name:</label>
    <input
      id="lastName"
      type="text"
      v-model="model.lastName"
      autocomplete="off"
    />

    <label for="age">Age:</label>
    <input id="age" type="text" v-model="model.age" autocomplete="off" />

    <label for="experience">Experience:</label>
    <input
      id="experience"
      type="text"
      v-model="model.experience"
      autocomplete="off"
    />

    <label for="address">Address:</label>
    <input
      id="address"
      type="text"
      v-model="model.address"
      autocomplete="off"
    />
    <div class="wrap__button">
      <button type="submit" @click.prevent="onSubmit" :disabled="isEmptyModel">
        Submit
      </button>

      <button type="reset" @click="onReset" :disabled="isEmptyModel">
        Reset
      </button>
    </div>
  </form>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  padding: 10px 10%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 20px;
}
.wrap input {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 0;
  height: 30px;
  align-self: center;
}
.wrap label {
  text-align: left;
  color: orange;
}
.wrap__button {
  display: flex;
  justify-content: center;
}
.wrap button {
  margin: 20px;
  width: 20%;
  align-self: center;
  background-color: #f4c430;
  color: white;
}
.wrap button:hover {
  background-color: blue;
}
.wrap button:active {
  color: tomato;
}
</style>
