<template>
  <h4 class="mt-4">Search Gifs</h4>
  <form @submit.prevent="handleSubmit">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9 pm-disable d-flex flex-column justify-content-center align-items-stretch">
          <div class="form-floating align-items-stretch">
            <input type="text" class="form-control bg-dark text-light" id="search" name="search"
              v-model="editable.search" required="true" placeholder="Search Giphy">
            <label for="search">Search Giphy</label>
          </div>
        </div>
        <div class="col-3 pm-disable d-flex align-items-stretch">
          <button type="submit" class="btn btn-outline-light">Search</button>
        </div>
      </div>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService.js'


export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          console.log(editable.value)
          await giftsService.getGiphy(editable.value)
        } catch (error) {
          console.error("[Handling Submit]", error);
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .pm-disable {
    margin: 0;
    padding: 0;
  }

  .hw-100 {
    height: 100%;
    width: 100%;
  }
</style>