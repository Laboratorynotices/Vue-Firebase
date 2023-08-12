<template>
  <v-sheet width="400" class="mx-auto">
    <v-form validate-on="submit lazy" @submit.prevent="submit" class="mb-7">
      <v-text-field
        v-model="groupName"
        :rules="rulesGroupName"
        label="Название группы"
      ></v-text-field>
      <v-btn :loading="loading" type="submit" block class="mt-2"
        >Отправить</v-btn
      >
    </v-form>
    <v-divider></v-divider>
  </v-sheet>
</template>

<script setup lang="ts">
import { addGroup } from "@/firebase/groups";
import { Group } from "@/types";
import { ref } from "vue";

/**
 * Переменная для хранения названия группы.
 */
const groupName = ref("");

/**
 * Правила валидации поля "Названия группы"
 */
const rulesGroupName = [
  (value: string) => {
    if (value) return true;

    return "Вы должны ввести название группы.";
  },
];

/**
 * Переменная для обозначения загрузки
 * на кнопке отправки формы.
 */
const loading = ref(false);

/**
 * При прохождении проверки сохраняет данные в Firebase.
 *
 * @param event "Эвент" от формы, определить тип
 */
// eslint-disable-next-line
const submit = async (event: any): Promise<boolean> => {
  // Включаем заглушку
  loading.value = true;

  // Дожидаемся данных от эвента
  const results = await event;

  // Выключаем заглушку
  loading.value = false;

  // Тест на валидацию
  if (!results.valid) {
    return false;
  }

  // Сохраняем данные в Firebase
  addGroup({ name: groupName.value } as Group);

  return true;
};
</script>
