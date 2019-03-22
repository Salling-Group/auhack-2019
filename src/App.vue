<template>
  <div id="app">
    <v-container>
      <router-view />
    </v-container>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn to="scoreboard" color="teal" flat value="scoreboard">
        <span>Scoreboard</span>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn to="history" color="teal" flat value="history">
        <span>Game history</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn to="players" color="teal" flat value="players">
        <span>Players</span>
        <v-icon>people</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Arial Regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
