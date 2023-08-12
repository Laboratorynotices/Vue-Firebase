<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent class="mb-7">
      <v-text-field
        v-model="groupName"
        :rules="rulesGroupName"
        label="Название группы"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Отправить</v-btn>
    </v-form>
    <v-divider></v-divider>
  </v-sheet>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const groupName = "";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rulesGroupName = [
  (value) => {
    if (value) return true;

    return "Вы должны ввести название группы.";
  },
];
</script>
