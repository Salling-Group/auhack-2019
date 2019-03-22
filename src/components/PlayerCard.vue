<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ name }}</h3>
            <div>{{ description }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Stats</v-btn>
          <v-btn flat color="orange">History</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
};
</script>
