<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/auhack_logo.png" />
  </div>
</template>

<script>
export default {
  name: "AUHack",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
}
</style>
