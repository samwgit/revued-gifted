<template>
  <section class="container-fluid">
    <section class="row">
      <div class="col-3 bg-info">
        <!-- form separate here -->
        <h4 class="mt-3">TAG</h4>
        <input type="text" class="bg-dark text-light">
        <h4 class="mt-3">URL</h4>
        <input type="text" class="bg-dark text-light">
        <button class="ms-2 btn btn-dark">Submit</button>
        <div class="border border-dark mt-5 pm-disable"></div>
        <!-- search gif separate here -->
        <h4 class="mt-4">Search Gifs</h4>
        <input type="text" class="bg-dark text-light"><button class="btn btn-dark ms-2">Search</button>
      </div>
      <div class="col-9">
        <!-- show gifts here -->
        <div class="row p-3">
          <Gift />
          <Gift />
          <Gift />
          <Gift />
          <Gift />
          <Gift />
          <Gift />
          <Gift />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Gift from '../components/Gift.vue';
export default {
  name: "Home",
  components: { Gift }
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
