<template>
  <form @submit.prevent="handleSubmit">
    <h4 class="my-3">TAG</h4>
    <div class="form-floating mb-3">
      <input type="tag" class="form-control" id="tag" name="tag" v-model="editable.tag" required="true" placeholder="name@example.com">
      <label for="tag">Tag</label>
    </div>
    <h4 class="my-3">URL</h4>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="url" name="url" v-model="editable.url" required="true" placeholder="Image Url">
      <label for="url">Image Url</label>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-outline-light">Submit</button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService.js';

export default {
  setup(){
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          console.log(editable.value)
          await giftsService.addGift(editable.value)
        } catch (error) {
          logger.error("[Handling Submit]", error);
          console.error("[Handling Submit]", error);
          Pop.error(error);
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>