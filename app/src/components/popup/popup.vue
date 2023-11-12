<script lang="ts" setup>
// описываем тип принимаемых пропсов
type PropsType = {
  isActive: boolean;
};
// регистрируем принмаемые промы с верхнего уровня
const props = defineProps<PropsType>();
// создание emit на закрытие
const emit = defineEmits<{
  (e: "close:popup"): void;
}>();
// функция проверяющая где был клик для закрытия модального окна если клик был не по контенту
const onClick = (e: Event) => {
  const target = e.target;
  if (!(target instanceof HTMLDivElement)) return;
  if (target.closest(".modal__content")) return;

  emit("close:popup");
};
</script>

<template>
  <!-- если окно было закрыто уничтажаем элемент что бы он не хранил в себе локальные пропсы -->
  <div class="modal" v-if="props.isActive" @click="onClick">
    <div class="modal__content">
      <!--      передаем сюда дочерние элементы-->
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: -webkit-center;

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 1999;
  background-color: rgba(255, 255, 255, 0.3);
}
.modal__content {
  width: 70%;
}
.modal__content :slotted(*) {
  display: flex;
  flex-direction: column;
}
.modal__content :slotted(.wrap) {
  background-color: rgba(0, 0, 0, 0.95);
  width: 79%;
}
</style>
