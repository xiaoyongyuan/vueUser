<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

</style>
