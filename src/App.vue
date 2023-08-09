<script setup lang="ts">
import { onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import LayoutMain from "@/layouts/constrained/LayoutMain.vue";

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "groups"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});
</script>

<template>
  <layout-main />
</template>
