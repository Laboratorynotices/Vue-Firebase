<script setup lang="ts">
import { navElements } from "@/menu-elements";
</script>

<template>
  <nav>
    <v-btn
      v-for="(navElement, i) in navElements"
      :key="i"
      variant="text"
      :to="navElement.path"
    >
      {{ navElement.nameMenu }}
    </v-btn>
  </nav>
</template>
