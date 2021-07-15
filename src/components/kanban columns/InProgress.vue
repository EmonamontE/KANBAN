<template>
  <v-flex xs3 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="light-blue accent-2">
        IN-PROGRESS
      </v-subheader>
      <draggable v-model="items2" :options="{group:'todos'}" @update="onUpdate" style="min-height: 50px">
        <template v-for="item in items2">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
    </v-list>
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
      items2: this.$store.getters.inProgressList
    }
  }
}
</script>

<style>

</style>
