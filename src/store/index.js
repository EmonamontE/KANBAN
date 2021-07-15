import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onHoldState: [
      {
        id: 1,
        text: 'First ToDoshka'
      },
      {
        id: 2,
        text: 'Second ToDoshka'
      },
      {
        id: 3,
        text: 'Third ToDoshka'
      }
    ],
    inProgressState: [],
    needsReviewState: [],
    approvedState: []
  },

  getters: {
    onHoldList: state => {
      return state.onHoldState
    },

    inProgressList: state => {
      return state.inProgressState
    },

    needsReviewList: state => {
      return state.needsReviewState
    },

    approvedList: state => {
      return state.approvedState
    }
  }
})
