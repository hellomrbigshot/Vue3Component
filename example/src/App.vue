<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Vue3Component/>
  <input ref="inputRef"/>
</template>

<script>
import { defineComponent, onMounted, nextTick, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    const inputRef = ref()
    onMounted(() => {
      console.log('example mounted')
      nextTick(() => {
        console.log('inputRef', inputRef.value)
      })
    })
    return {
      inputRef
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
