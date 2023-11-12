import { ref } from "vue";
//кастомный хук для работы с состоянием моадльного окна
export const useToggle = (arg: boolean) => {
  const isAction = ref<boolean>(arg);

  const onActive = () => {
    isAction.value = true;
  };
  const offActive = () => {
    isAction.value = false;
  };

  return { isAction, onActive, offActive };
};
