<script lang="ts" setup>
import { ElTable, ElTableColumn } from "element-plus";
import { DataTableType } from "../type";
// описываем тип принимаемых пропсов
type PropsType = {
  usersArray: DataTableType[];
};
// регистрируем принмаемые промы с верхнего уровня
const props = defineProps<PropsType>();
// создание emits
const emit = defineEmits<{
  (e: "open:popup", index: number): void;
  (e: "event:delete", index: number): void;
}>();
//emit открытие модального окна с передачей индекса для получения определенного юзера
const onEdit = (index: number) => {
  emit("open:popup", index);
};
//emit на удаление юзера из таблицы по индексу
const onDelete = (index: number) => {
  emit("event:delete", index);
};
</script>
<!--таблица из ui библиотке -->
<template>
  <div class="wrap-table">
    <el-table class="table" :data="props.usersArray">
      <el-table-column
        label-class-name="my-label"
        fixed
        label="Name"
        prop="name"
        width="140"
      />
      <el-table-column
        label-class-name="my-label"
        prop="lastName"
        label="Last Name"
        width="140"
      />
      <el-table-column
        label-class-name="my-label"
        prop="experience"
        label="Experience"
        width="140"
      />
      <el-table-column
        label-class-name="my-label"
        prop="age"
        label="Age"
        width="140"
      />
      <el-table-column
        label-class-name="my-label"
        prop="address"
        label="Address"
        width="140"
      />
      <el-table-column
        label-class-name="my-label"
        fixed="right"
        label="Operations"
        width="140"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="onEdit(scope.$index)"
            >Edit</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="onDelete(scope.$index)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.table {
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  color: black;
  border-radius: 20px;
  margin: 20px;
}
:deep(.cell) {
  padding: 10px;
  text-align: center;
}
:deep(.el-button) {
  color: #093be9;
}
:deep(.my-label) {
  color: #992121 !important;
}
:deep(.el-table__inner-wrapper) {
  text-align: -webkit-center;
}
</style>
