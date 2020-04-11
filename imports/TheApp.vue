<template>
  <div>
    Limit: <input type="number" min="0" v-model.number="limit">
    Skip: <input type="number" min="0" v-model.number="skip">
    <br>
    Items numbers:
    <div v-for="item in items" :key="item.number">
      {{ item.number }}
    </div>
  </div>
</template>

<script>
import { Items } from './items'


export default {
  data() {
    return {
      limit: 10,
      skip: 0
    }
  },
  meteor: {
    $subscribe: {
      items() {
        return [{}, { skip: this.skip, limit: this.limit }]
      }
    },
    items() {
      return Items.find()
    }
  },
}
</script>