<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { getGroups } from "@/firebase/groups";
import { Group } from "@/types";
import GroupAddForm from "@/components/GroupAddForm.vue";

// Указатель на хранилище групп
const groups: Ref = ref<Group[]>([]);

onMounted(() => {
  getGroups(groups);
});
</script>

<template>
  <group-add-form></group-add-form>
  <v-card
    v-for="group in groups"
    :key="group.id"
    width="400"
    class="mx-auto my-6"
  >
    <v-card-item>
      <v-card-title>{{ group.name }}</v-card-title>
    </v-card-item>

    <v-card-text>Текст</v-card-text>
    <v-card-actions>Действия</v-card-actions>
  </v-card>
</template>
