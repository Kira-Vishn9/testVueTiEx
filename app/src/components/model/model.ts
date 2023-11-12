import { DataTableType } from "../type";
import { ref } from "vue";

// создаем реактивный элемент для отображения в таблице
// модель
export const users = ref<DataTableType[]>([
  {
    name: "Kira",
    lastName: "Bush",
    experience: "3",
    age: "27",
    address: "Tbilisi",
  },
  {
    name: "Vika",
    lastName: "Bush",
    experience: "5",
    age: "29",
    address: "Minsk",
  },
  {
    name: "Mikalai",
    lastName: "Bush",
    experience: "10",
    age: "33",
    address: "Moskoy",
  },
]);

// Якобы это контроллер

//переменная для записи индекса переданной строки
let indexRow = 0;
//геттре возвращающий информацию по юзеру по индексу
export const getUserByIndex = () => {
  return users.value[indexRow];
};
//сеттер для изменения индекса выбранной строки
export const setToggleRow = (index: number) => {
  indexRow = index;
};
//функция для редактирования информации в юзере
export const changeUserByIndex = (data: DataTableType) => {
  users.value[indexRow] = data;
};
//функция для удаления юзера по индексу
export const deleteUserByIndex = (index: number) => {
  users.value.splice(index, 1);
};
//функция для добавления юзера
export const addUser = (item: DataTableType) => {
  users.value.push(item);
};
