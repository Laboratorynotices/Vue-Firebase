<script setup lang="ts">
/**
 * Структура данных отдельного пунка (основной) навигации.
 * Позже будет перенесён в отдельный файл для типов (структур).
 */
interface RouterLink {
  // Отображаемое название в навигации
  name: string;
  // Относительный путь
  to: string;
}

/**
 * Данные для основной навигации.
 * Позже будут перенесены в отдельный файл,
 * чтобы от туда маршрутизатор брал информацию для настроек.
 */
const navElements: Array<RouterLink> = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
];
</script>

<template>
  <nav>
    <v-btn
      v-for="(navElement, i) in navElements"
      :key="i"
      variant="text"
      :to="navElement.to"
    >
      {{ navElement.name }}
    </v-btn>
  </nav>
</template>
