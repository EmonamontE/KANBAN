<template>
  <v-flex xs3 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="deep-orange accent-2">
        ON-HOLD
      </v-subheader>
      <draggable v-model="items1" :options="{group:'todos'}" @update="onUpdate" style="min-height: 50px">
        <template v-for="item in items1">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
      <v-navigation-drawer
        v-model="drawer"
        class="ml-5"
        width=90%
        floating
      >
        <v-text-field
          placeholder="Ввести заголовок для этой строчки"
          filled
        >
        </v-text-field>
        <v-btn class="ma-4">Добавить карточку</v-btn>
        <v-btn
          icon
        >
          <v-icon
            left
            class="ml-2"
          >mdi-close</v-icon>
        </v-btn>
      </v-navigation-drawer>
    </v-list>
    <v-btn
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
      drawer: false,
      items1: this.$store.getters.onHoldList
    }
  },

  methods: {
    awawa () {}
  },

  components: {
    draggable
  }
}
</script>

<style>

</style>
