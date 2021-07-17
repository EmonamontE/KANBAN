import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentID: 1,
    onHoldState: [],
    inProgressState: [],
    needsReviewState: [],
    approvedState: []
  },

  plugins: [createPersistedState()],

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
    },

    deleteCaseFromOnHoldColumn (state, payload) {
      const currentArray = state.onHoldState
      const filteredArray = currentArray.filter((item) => item !== payload)
      const index = currentArray.length
      state.onHoldState.splice(0, index)
      filteredArray.map((item) => state.onHoldState.push(item))
    },

    deleteCaseFromInProgressColumn (state, payload) {
      const currentArray = state.inProgressState
      const filteredArray = currentArray.filter((item) => item !== payload)
      const index = currentArray.length
      state.inProgressState.splice(0, index)
      filteredArray.map((item) => state.inProgressState.push(item))
    },

    deleteCaseFromNeedsReviewColumn (state, payload) {
      const currentArray = state.needsReviewState
      const filteredArray = currentArray.filter((item) => item !== payload)
      const index = currentArray.length
      state.needsReviewState.splice(0, index)
      filteredArray.map((item) => state.needsReviewState.push(item))
    },

    deleteCaseFromApprovedColumn (state, payload) {
      const currentArray = state.approvedState
      const filteredArray = currentArray.filter((item) => item !== payload)
      const index = currentArray.length
      state.approvedState.splice(0, index)
      filteredArray.map((item) => state.approvedState.push(item))
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
