<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "List",
  setup(props, ctx) {
    const dataArr = ref<any[]>([]);

    const fetchData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        dataArr.value = await data.json();
      } catch (error) {
        return error;
      }
    }
    onMounted(fetchData);

    return {dataArr};
  },
})

</script>

<template>
  <ul>
    <li v-for="data in dataArr">
      {{ data?.name }}
    </li>
  </ul>
</template>
