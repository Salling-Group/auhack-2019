<template>
  <div class="scoreboard">
    <h1>Scoreboard</h1>
    <v-data-table
      :headers="headers"
      :items="games"
      :pagination.sync="pagination"
      item-key="name"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="rowClick(props.item.name)">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.wins }}</td>
          <td class="text-xs-left">{{ props.item.loses }}</td>
          <td class="text-xs-left">{{ props.item.draws }}</td>
          <td class="text-xs-left">{{ props.item.goals }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  methods: {
    rowClick(name) {
      this.selectedItem = name;
    }
  },
  data: function() {
    return {
      selectedItem: "Tom Cruise",
      pagination: {
        sortBy: "name"
      },
      headers: [
        {
          text: "Player",
          align: "left",
          sortable: false,
          value: "name",
          width: "20%"
        },
        { text: "wins", value: "wins", width: "20%" },
        { text: "loses", value: "loses", width: "20%" },
        { text: "draws", value: "draws", width: "20%" },
        { text: "goals", value: "goals", width: "20%" }
      ],
      games: [
        {
          name: "Thompson Walls",
          wins: 93,
          loses: 187,
          draws: 164,
          goals: 287
        },
        {
          name: "Mayer Richards",
          wins: 66,
          loses: 162,
          draws: 127,
          goals: 1025
        },
        {
          name: "Betsy Meadows",
          wins: 120,
          loses: 14,
          draws: 173,
          goals: 39
        },
        {
          name: "Avila Mcfadden",
          wins: 12,
          loses: 23,
          draws: 21,
          goals: 1551
        },
        {
          name: "Whitehead Rosario",
          wins: 91,
          loses: 154,
          draws: 129,
          goals: 758
        },
        {
          name: "Ellis Valenzuela",
          wins: 186,
          loses: 11,
          draws: 112,
          goals: 1122
        },
        {
          name: "Melinda Banks",
          wins: 93,
          loses: 84,
          draws: 189,
          goals: 496
        },
        {
          name: "Alberta Crawford",
          wins: 93,
          loses: 137,
          draws: 155,
          goals: 172
        },
        {
          name: "Acevedo Hudson",
          wins: 2,
          loses: 70,
          draws: 29,
          goals: 1593
        },
        {
          name: "Maldonado Gallegos",
          wins: 119,
          loses: 179,
          draws: 95,
          goals: 1190
        },
        {
          name: "Armstrong Noel",
          wins: 129,
          loses: 71,
          draws: 44,
          goals: 518
        },
        {
          name: "Odonnell Richard",
          wins: 43,
          loses: 46,
          draws: 63,
          goals: 801
        },
        {
          name: "Boyle Ward",
          wins: 177,
          loses: 185,
          draws: 181,
          goals: 1715
        },
        {
          name: "Claudia Osborne",
          wins: 42,
          loses: 139,
          draws: 42,
          goals: 859
        },
        {
          name: "Gladys Lara",
          wins: 165,
          loses: 128,
          draws: 67,
          goals: 528
        },
        {
          name: "Josefa Stokes",
          wins: 196,
          loses: 37,
          draws: 46,
          goals: 1656
        },
        {
          name: "Alma Ryan",
          wins: 31,
          loses: 37,
          draws: 66,
          goals: 714
        },
        {
          name: "Cooley Chavez",
          wins: 28,
          loses: 183,
          draws: 171,
          goals: 224
        },
        {
          name: "Catalina Moses",
          wins: 133,
          loses: 132,
          draws: 62,
          goals: 961
        },
        {
          name: "Delores Woods",
          wins: 136,
          loses: 157,
          draws: 200,
          goals: 1254
        },
        {
          name: "Deanna Lott",
          wins: 5,
          loses: 124,
          draws: 144,
          goals: 1069
        },
        {
          name: "Autumn Vazquez",
          wins: 116,
          loses: 21,
          draws: 18,
          goals: 1721
        },
        {
          name: "Elva Simpson",
          wins: 122,
          loses: 135,
          draws: 12,
          goals: 1295
        },
        {
          name: "Snow Macias",
          wins: 187,
          loses: 78,
          draws: 173,
          goals: 455
        },
        {
          name: "Penny Rojas",
          wins: 25,
          loses: 163,
          draws: 114,
          goals: 1841
        },
        {
          name: "Nichols Gibbs",
          wins: 63,
          loses: 141,
          draws: 23,
          goals: 903
        },
        {
          name: "Jayne Davenport",
          wins: 24,
          loses: 135,
          draws: 12,
          goals: 982
        },
        {
          name: "Rosario Shaffer",
          wins: 8,
          loses: 48,
          draws: 2,
          goals: 305
        },
        {
          name: "Kane Price",
          wins: 158,
          loses: 22,
          draws: 117,
          goals: 739
        },
        {
          name: "Sawyer Everett",
          wins: 183,
          loses: 200,
          draws: 70,
          goals: 516
        },
        {
          name: "Benita Walter",
          wins: 8,
          loses: 162,
          draws: 51,
          goals: 1674
        },
        {
          name: "Ross Duran",
          wins: 6,
          loses: 159,
          draws: 197,
          goals: 337
        },
        {
          name: "Natasha Riggs",
          wins: 94,
          loses: 101,
          draws: 21,
          goals: 308
        },
        {
          name: "Petersen Wade",
          wins: 121,
          loses: 5,
          draws: 23,
          goals: 1
        },
        {
          name: "Annie Solis",
          wins: 197,
          loses: 83,
          draws: 104,
          goals: 1350
        },
        {
          name: "Milagros Vasquez",
          wins: 94,
          loses: 160,
          draws: 166,
          goals: 1431
        },
        {
          name: "Bridges Chan",
          wins: 98,
          loses: 121,
          draws: 23,
          goals: 1564
        },
        {
          name: "Cruz Merrill",
          wins: 41,
          loses: 45,
          draws: 161,
          goals: 1382
        },
        {
          name: "Kinney Webb",
          wins: 181,
          loses: 146,
          draws: 36,
          goals: 520
        },
        {
          name: "Rush Newton",
          wins: 2,
          loses: 58,
          draws: 113,
          goals: 1609
        },
        {
          name: "Kathrine Vargas",
          wins: 103,
          loses: 101,
          draws: 167,
          goals: 1102
        },
        {
          name: "Lorna Holland",
          wins: 53,
          loses: 134,
          draws: 21,
          goals: 331
        },
        {
          name: "Martin Acevedo",
          wins: 56,
          loses: 188,
          draws: 48,
          goals: 854
        },
        {
          name: "Freida Guerra",
          wins: 63,
          loses: 196,
          draws: 35,
          goals: 1803
        },
        {
          name: "Park Gentry",
          wins: 26,
          loses: 44,
          draws: 58,
          goals: 1272
        },
        {
          name: "Erica Miller",
          wins: 56,
          loses: 50,
          draws: 14,
          goals: 63
        },
        {
          name: "Burks Hendricks",
          wins: 167,
          loses: 124,
          draws: 76,
          goals: 1874
        },
        {
          name: "Mcgowan Hogan",
          wins: 127,
          loses: 197,
          draws: 37,
          goals: 1395
        },
        {
          name: "Lesley Hinton",
          wins: 147,
          loses: 92,
          draws: 55,
          goals: 682
        },
        {
          name: "Bean Mcbride",
          wins: 120,
          loses: 169,
          draws: 80,
          goals: 1379
        },
        {
          name: "Walter William",
          wins: 109,
          loses: 0,
          draws: 102,
          goals: 181
        },
        {
          name: "Coleman Perkins",
          wins: 111,
          loses: 142,
          draws: 13,
          goals: 1776
        },
        {
          name: "Hewitt Webster",
          wins: 172,
          loses: 60,
          draws: 0,
          goals: 774
        },
        {
          name: "Matilda Hardy",
          wins: 98,
          loses: 165,
          draws: 149,
          goals: 341
        },
        {
          name: "Arline Levine",
          wins: 96,
          loses: 120,
          draws: 115,
          goals: 39
        },
        {
          name: "Daisy James",
          wins: 57,
          loses: 81,
          draws: 188,
          goals: 573
        },
        {
          name: "Margret Farmer",
          wins: 92,
          loses: 142,
          draws: 122,
          goals: 1283
        },
        {
          name: "Simone Odonnell",
          wins: 126,
          loses: 72,
          draws: 127,
          goals: 651
        },
        {
          name: "Marjorie Brewer",
          wins: 113,
          loses: 156,
          draws: 153,
          goals: 1734
        },
        {
          name: "Hester Gonzalez",
          wins: 182,
          loses: 161,
          draws: 118,
          goals: 1227
        },
        {
          name: "Tammi Gilmore",
          wins: 189,
          loses: 186,
          draws: 148,
          goals: 1281
        },
        {
          name: "Tyson Hill",
          wins: 13,
          loses: 153,
          draws: 89,
          goals: 1228
        },
        {
          name: "Marian Bean",
          wins: 50,
          loses: 28,
          draws: 90,
          goals: 588
        },
        {
          name: "Franks Grimes",
          wins: 68,
          loses: 117,
          draws: 11,
          goals: 385
        },
        {
          name: "Greta Ashley",
          wins: 200,
          loses: 71,
          draws: 198,
          goals: 495
        },
        {
          name: "Kristie Ferrell",
          wins: 172,
          loses: 168,
          draws: 61,
          goals: 1842
        },
        {
          name: "Theresa Potts",
          wins: 46,
          loses: 169,
          draws: 115,
          goals: 1702
        },
        {
          name: "Hebert Frye",
          wins: 109,
          loses: 58,
          draws: 105,
          goals: 460
        },
        {
          name: "Harvey Decker",
          wins: 119,
          loses: 108,
          draws: 117,
          goals: 11
        },
        {
          name: "Frye Carlson",
          wins: 69,
          loses: 99,
          draws: 145,
          goals: 273
        },
        {
          name: "Hicks Campos",
          wins: 94,
          loses: 96,
          draws: 95,
          goals: 822
        }
      ]
    };
  }
};
</script>
