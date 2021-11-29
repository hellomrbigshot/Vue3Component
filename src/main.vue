<template>
  <div>
    <div @click="clickDiv">{{ 1 }}</div>
    <div ref="divRef"></div>
  </div>
</template>
<script>
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Vue3Component',
  mounted () {
    console.log('component mounted')
  },
  setup() {
    const divRef = ref()
    const clickDiv = () => {
      console.log('divRef', divRef)
    }
    onMounted(() => {
      console.log('component onMounted')
    })
    return {
      a: ref(1),
      clickDiv,
      divRef
    }
  },
})
</script>
