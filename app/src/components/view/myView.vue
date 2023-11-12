<script lang="ts" setup>
import MyTable from "../table/myTable.vue";
import popup from "../popup/popup.vue";
import { useToggle } from "../hooks/useToggle";
import MyForm from "../myForm/myForm.vue";

import {
  users,
  setToggleRow,
  changeUserByIndex,
  addUser,
  getUserByIndex,
  deleteUserByIndex,
} from "../model/model";

const toggle = useToggle(false);
</script>
<!-- общее окно так называемое view-->
<template>
  <!-- форма которая принимает emit на добавление нового юзера -->
  <MyForm
    @onSubmit:form="
      (data) => {
        addUser(data);
      }
    "
  />
  <!-- таблица которая отображает всех юзеров.  -->
  <!-- usersArray массив юзеров  -->
  <!-- event:delete emit на удаление юзера из таблица через индекс и slice  -->
  <!-- open:popup emit для работы с модальным окном  -->
  <!-- setToggleRow(a) функция для получения индекса строки -->
  <!-- toggle.onActive() кастомный хук для управления состояние модального окна  -->
  <MyTable
    :usersArray="users"
    @event:delete="(index) => deleteUserByIndex(index)"
    @open:popup="
      (a) => {
        setToggleRow(a);
        toggle.onActive();
      }
    "
  />
  <!-- модальное окно для которое принмает булевое состояние и хук на закрытие  -->
  <popup :isActive="toggle.isAction.value" @close:popup="toggle.offActive">
    <!-- переиспользуем форму которая принимает emit на изменение информации юзера и хук для закрытия модального окна -->
    <MyForm
      :users="getUserByIndex()"
      @on-submit:form="
        (data) => {
          toggle.offActive();
          changeUserByIndex(data);
        }
      "
    />
  </popup>
</template>

<style scoped></style>
