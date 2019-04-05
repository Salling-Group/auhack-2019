import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/players",
      name: "players",
      component: () =>
        import(/* webpackChunkName: "players" */ "./views/Players.vue")
    },
    {
      path: "/scoreboard",
      name: "scoreboard",
      component: () =>
        import(/* webpackChunkName: "scoreboard" */ "./views/Scoreboard.vue")
    },
    {
      path: "/history",
      name: "history",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/History.vue")
    }
  ]
});
