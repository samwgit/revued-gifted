<template>
  <div class="col-12 mb-4">
    <img @click="fillForm" :src="giphy?.url" :alt="giphy?.tag" class="img-fluid selectable" :title="giphy?.tag">
  </div>
</template>


<script>
import { Giphy } from '../models/Giphy.js';
import { FormValues } from '../models/FormValues.js'
import { giftsService } from '../services/GiftsService.js';

export default {
  props: {
    giphy: { type: Giphy, required: true }
  },
  setup(props) {
    return {
      async fillForm() {
        console.log(props.giphy)
        const formData = new FormValues(props.giphy)
        console.log(formData)
        await giftsService.fillForm(formData)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>