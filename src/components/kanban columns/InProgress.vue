<template>
  <v-flex xs3 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="blue darken-2">
        IN-PROGRESS
      </v-subheader>
      <draggable v-model="inProgressList" :options="{group:'todos'}" style="min-height: 50px">
        <template v-for="item in inProgressList">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
      <div v-if="drawer">
        <v-text-field
          placeholder="Ввести заголовок для этой карточки"
          v-model="inProgressCase"
          rounded
        >
        </v-text-field>
        <v-btn
          class="ma-4"
          @click="addCase(inProgressCase)">Добавить карточку</v-btn>
        <v-btn
          icon
        >
          <v-icon
            left
            class="ml-2"
            @click="drawer = !drawer"
          >mdi-close</v-icon>
        </v-btn>
      </div>
    </v-list>
    <v-btn
      v-if="!drawer"
      depressed
      color="#424242"
      class="grey--text pl-0 mt-4"
      @click="drawer = !drawer"
    >
      <v-icon left>mdi-plus</v-icon>
      Добавить карточку
    </v-btn>
  </v-flex>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data () {
    return {
      inProgressCase: '',
      drawer: false,
      inProgressList: this.$store.getters.inProgressList
    }
  },

  methods: {
    addCase (value) {
      this.$store.commit('addCaseToInProgressColumn', value)
      this.$store.commit('incrementCurrentId')
      this.drawer = !this.drawer
      this.inProgressCase = ''
    }
  },

  components: {
    draggable
  }
}
</script>

<style>

</style>
