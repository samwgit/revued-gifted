<template>
  <h4 class="mt-4">Search Gifs</h4>
  <form @submit="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <div class="d-flex mb-3">
            <div class="form-floating mb-3 pm-disable">
              <input type="text" class="form-control bg-dark text-light" id="search" name="search"
                v-model="editable.search" required="true" placeholder="Search Giphy">
              <label for="search">Search Giphy</label>
            </div>
          </div>
        </div>
        <div class="col-3">
          <button type="submit" class="btn btn-dark pm-disable">Search</button>
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
  .pm-disable {
    margin: 0;
    padding: 0;
  }

  .hw-100 {
    height: 100%;
    width: 100%;
  }
</style>