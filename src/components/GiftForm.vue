<template>
  <form @submit.prevent="handleSubmit">
    <h4 class="my-3">TAG</h4>
    <div class="form-floating mb-3">
      <input type="tag" class="form-control" id="tag" name="tag" v-model="formValues.tag" required="true">
      <label for="tag">Tag</label>
    </div>
    <h4 class="my-3">URL</h4>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="url" name="url" v-model="formValues.url" required="true">
      <label for="url">Image Url</label>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-outline-light">Submit</button>
    </div>
  </form>
</template>


<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js';

export default {
  setup(){
    return {
      formValues: computed(()=> AppState.formValues),
      async handleSubmit() {
        try {
          console.log(this.formValues)
          await giftsService.addGift(this.formValues)
        } catch (error) {
          console.error("[Handling Submit]", error);
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>