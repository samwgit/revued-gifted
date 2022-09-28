<template>
  <div class="col-4 mb-4 rounded rounded-5 height">
    <div v-if="gift.opened" class="p-4 d-flex justify-content-center align-items-center">
      <div class="bg-light elevation-3 pt-3 pb-1 px-4 d-flex flex-column align-items-center">
        <img :src="gift.url" :alt="gift.tag" class="img-fluid mb-2">
        <h3>{{gift.tag}}</h3>
      </div>
    </div>
    <div v-else class="bg-closed p-4 d-flex justify-content-center align-items-center">
      <div class="bg-light elevation-3 pt-3 pb-1 px-4 d-flex flex-column align-items-center selectable" @click="show(gift.id)">
        <h3 class="no-select mb-2">{{gift.tag}}</h3>
        <h6 class="no-select">Click to open!</h6>
      </div>
    </div>
  </div>
</template>


<script>
import { Gift } from "../models/Gift.js"
import { giftsService } from "../services/GiftsService.js"
import { giphyApi, giftApi, api } from "../services/AxiosService.js"
export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {
      async show(id) {
        try {
          console.log(id);
          const res = await giftsService.showGift(id)
        } catch (error) {
          logger.error('[Getting Gifts]', error)
          console.error("[Getting Gifts]", error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-closed {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1qpq1YJIN3BCDNpH3-_abA5UhKK82fXRlQ&usqp=CAU);
  // height: 512px;
  background-position: center center;
  background-size: cover;
}

.b-spec {
  border-radius: 5rem !important;
}

.height {
  min-height: 15vh;
}
</style>