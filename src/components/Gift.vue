<template>
  <div class="col-4 mb-4 rounded rounded-5">
    <div v-if="false" class="p-4 d-flex justify-content-center align-items-center">
      <div class="bg-light elevation-3 pt-3 pb-1 px-4 d-flex flex-column align-items-center">
        <img :src="gift.img" alt="tag" class="img-fluid mb-2">
        <h3>REEE</h3>
      </div>
    </div>
    <div v-else class="bg-closed p-4 d-flex justify-content-center align-items-center">
      <div class="bg-light elevation-3 pt-3 pb-1 px-4 d-flex flex-column align-items-center">
        <h3 class="mb-2">REEE2</h3>
        <h6>Click to open!</h6>
      </div>
    </div>
  </div>
</template>


<script>
import { Gift } from "../models/Gift.js"
export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {}
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
</style>