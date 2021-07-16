<template>
  <v-flex xs3 class="elevation-4 pa-3 ma-2">
    <v-list three-line dark>
      <v-subheader class="yellow darken-3">
        NEEDS-REVIEW
      </v-subheader>
      <draggable v-model="needsReviewList" :options="{group:'todos'}" style="min-height: 50px">
        <template v-for="item in needsReviewList">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
            <v-btn
              icon
              @click="deleteCase(item)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item>
        </template>
      </draggable>
      <div v-if="drawer">
        <v-text-field
          placeholder="Ввести заголовок для этой карточки"
          v-model="needsReviewCase"
          rounded
        >
        </v-text-field>
        <v-btn
          class="ma-4"
          @click="addCase(needsReviewCase)">Добавить карточку</v-btn>
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
      needsReviewCase: '',
      drawer: false,
      needsReviewList: this.$store.getters.needsReviewList
    }
  },

  methods: {
    addCase (value) {
      this.$store.commit('addCaseToNeedsReviewColumn', value)
      this.$store.commit('incrementCurrentId')
      this.drawer = !this.drawer
      this.onHoldCase = ''
    },

    deleteCase (item) {
      this.$store.commit('deleteCaseFromNeedsReviewColumn', item)
    }
  },

  components: {
    draggable
  }
}
</script>

<style>

</style>
