import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onHoldState: [
      {
        id: 1,
        avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg',
        title: 'Brunch this life?',
        subtitle: 'Subtitle 1'
      },
      {
        id: 2,
        avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg',
        title: 'Winter Lunch',
        subtitle: 'Subtitle 2'
      },
      {
        id: 3,
        avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: 'Subtitle 3'
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
