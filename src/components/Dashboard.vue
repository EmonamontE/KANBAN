<template>
  <v-content class="backgroundColor">
    <v-container fluid>
      <v-layout align-start justify-center>
        <OnHold />
        <InProgress />
        <NeedsReview />
        <Approved />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import OnHold from './kanban columns/OnHold'
import InProgress from './kanban columns/InProgress'
import NeedsReview from './kanban columns/NeedsReview'
import Approved from './kanban columns/Approved'

export default {
  components: {
    OnHold,
    InProgress,
    NeedsReview,
    Approved
  }
}
</script>

<style>
.backgroundColor {
  background-color: #424242;
}
</style>
