<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 bg-info">
        <GiftForm />
        <div class="border border-dark mt-5 pm-disable"></div>
        <GiphyForm />
        <div class="mt-2 row">
          <Giphys v-for="g in giphys" :giphy="g" />
        </div>
      </div>
      <div class="col-9">
        <div class="row p-3">
          <Gift v-for="g in gifts" :gift="g" />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Terraria goes hard -->
<script>
import Gift from '../components/Gift.vue';
import Pop from '../utils/Pop.js';
import { giftsService } from "../services/GiftsService.js"
import { AppState } from "../AppState.js"
import { computed } from "@vue/reactivity"
import GiftForm from '../components/GiftForm.vue';
import GiphyForm from '../components/GiphyForm.vue';
import Giphys from '../components/Giphys.vue';

export default {
    setup() {
        async function getGifts() {
            try {
              await giftsService.getGifts();
            }
            catch (error) {
              console.error("[Getting Gifts]", error);
            }
        }
        getGifts();
        return {
          gifts: computed(() => AppState.gifts),
          giphys: computed(()=> AppState.giphys)
        };
    },
    components: { GiftForm, GiphyForm, Giphys }
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
