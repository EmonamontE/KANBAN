import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentID: 1,
    onHoldState: [],
    inProgressState: [],
    needsReviewState: [],
    approvedState: []
  },

  mutations: {
    incrementCurrentId (state) {
      state.currentID = this.state.currentID + 1
    },

    addCaseToOnHoldColumn (state, payload) {
      state.onHoldState.push({
        id: this.state.currentID,
        text: payload
      })
    },

    addCaseToInProgressColumn (state, payload) {
      state.inProgressState.push({
        id: this.state.currentID,
        text: payload
      })
    },

    addCaseToNeedsReviewColumn (state, payload) {
      state.needsReviewState.push({
        id: this.state.currentID,
        text: payload
      })
    },

    addCaseToApprovedColumn (state, payload) {
      state.approvedState.push({
        id: this.state.currentID,
        text: payload
      })
    }
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
