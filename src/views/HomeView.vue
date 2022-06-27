<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { onMounted } from "vue";
import { auth } from "@/stores/auth";

onMounted(() => {
  const store = auth();
  console.log(store.state);
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
