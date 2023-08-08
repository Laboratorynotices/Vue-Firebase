<template>
  <div class="home">
    <v-container class="d-flex justify-center">
      <v-card
        class="bg-red"
        width="400"
        title="This is a title"
        subtitle="This is a subtitle"
        text="This is content"
      ></v-card>
    </v-container>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
