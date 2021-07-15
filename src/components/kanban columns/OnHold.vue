<template>
  <v-flex xs2 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="deep-orange accent-2">
        ON-HOLD
      </v-subheader>
      <draggable v-model="items1" :options="{group:'todos'}" @update="onUpdate" style="min-height: 50px">
        <template v-for="item in items1">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
    </v-list>
    <v-btn
      depressed
      color="#424242"
      class="grey--text pl-0 mt-4"
    >
      <v-icon left>mdi-plus</v-icon>
      Добавить карточку
    </v-btn>
  </v-flex>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      items1: this.$store.getters.onHoldList
    }
  }
}
</script>

<style>

</style>
