<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="history">
    <h1>Game history</h1>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel inset>
          <v-expansion-panel-content v-for="(item, i) in 5" :key="i">
            <template v-slot:header>
              <v-chip>
                <v-avatar>
                  <img
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="trevor"
                  />
                </v-avatar>
                Trevor Hansen
              </v-chip>
              <v-icon large>loop</v-icon>
              <v-chip>
                <v-avatar>
                  <img
                    src="https://randomuser.me/api/portraits/men/36.jpg"
                    alt="trevor"
                  />
                </v-avatar>
                Big John
              </v-chip>
            </template>
            <v-card>
              <v-card-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</v-card-text
              >
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script></script>
