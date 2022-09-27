<template>
  <section class="container-fluid">
    <section class="row">
      <div class="col-3 bg-info">
        <!-- form separate here -->
        <form @submit.prevent="">
          <div class="input-group">
            <h4 class="mt-3">TAG</h4>
            <input type="text" class="bg-dark text-light">
          </div>
          <div class="input-group">
            <h4 class="mt-3">URL</h4>
            <input type="text" class="bg-dark text-light">
          </div>
          <div class="input-group">
            <button class="ms-2 btn btn-dark">Submit</button>
          </div>
        </form>
        <div class="border border-dark mt-5 pm-disable"></div>
        <!-- search gif separate here -->
        <h4 class="mt-4">Search Gifs</h4>
        <input type="text" class="bg-dark text-light"><button class="btn btn-dark ms-2">Search</button>
      </div>
      <div class="col-9">
        <!-- show gifts here -->
        <div class="row p-3">
          <Gift v-for="g in gifts" :gift="g" />
        </div>
      </div>
    </section>
  </section>
</template>
<!-- Terraria goes hard -->
<script>
import Gift from '../components/Gift.vue';
import Pop from '../utils/Pop.js';
import { giftsService } from "../services/GiftsService.js"
import { AppState } from "../AppState.js"
import { computed } from "@vue/reactivity"

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error('[Getting Gifts]', error)
        console.error("[Getting Gifts]", error)
        Pop.error(error)
      }
    }
    getGifts()
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }


  .pm-disable {
    margin: 0;
    padding: 0;
  }
}
</style>
