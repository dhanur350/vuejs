<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent ({
  name: "HeaderComponent",
  props: {
    message: String,
  },
  setup(props, ctx) {

    const refCount = ref(true);

    const handleclick = (event: MouseEvent) => {
      refCount.value = !refCount.value;
      console.log("header", event);
    };

    return { refCount, handleclick};
  },
});
</script>

<template>
  <header>{{ message }}</header>
  <span>{{ refCount }}</span>
  <button @click="handleclick">Header Button</button>
</template>


