<template>
  <div class="about">
    <h1>All Players</h1>
    <player-card
      name="John Wayne"
      description="Old school gamer!"
    ></player-card>
  </div>
</template>

<script>
import PlayerCard from "../components/PlayerCard.vue";

export default {
  components: {
    PlayerCard
  }
};
</script>
