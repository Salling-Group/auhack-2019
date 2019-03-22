<template>
  <v-container class="home" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <img alt="Vue logo" src="../assets/s-group_logo.svg" />
      </v-flex>
      <v-flex xs12 md6>
        <AUHack msg="Crash course in Vue.js and Netlify" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import AUHack from "@/components/AUHack.vue";

export default {
  name: "home",
  components: {
    AUHack
  }
};
</script>

<style lang="scss">
img {
  width: 100%;
}
</style>
