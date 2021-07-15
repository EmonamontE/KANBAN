<template>
  <v-flex xs2 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="amber accent-2">
        NEEDS-REVIEW
      </v-subheader>
      <draggable v-model="items3" :options="{group:'todos'}" @update="onUpdate" style="min-height: 50px">
        <template v-for="item in items3">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
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
      items3: this.$store.getters.needsReviewList
    }
  }
}
</script>

<style>

</style>
