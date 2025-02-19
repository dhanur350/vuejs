<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "List",
  setup(props, ctx) {
    const dataArr = ref<any[]>([]);
    const count = ref<number>(1);

    const fetchData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        dataArr.value = await data.json();
      } catch (error) {
        return error;
      }
    }

    const onClick = () => {
      count.value++;
    }
    onMounted(fetchData);
    watch(count, fetchData);
    watch(dataArr, (prev:any, newValue:any)=>{
      console.log(prev.map((item:any)=> item.name), newValue);
    },{deep: true})

    return {dataArr, onClick};
  },
})

</script>

<template>
  <button @click="onClick">Click to render the API</button>
  <ul>
    <li v-for="data in dataArr">
      {{ data?.name }}
    </li>
  </ul>
</template>
