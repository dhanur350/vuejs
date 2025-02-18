<template>
  <header>{{ message }}</header>
</template>

<script lang="ts">
export default {
  name: "HeaderComponent",
  props: {
    message: String,
  }
}
</script>
