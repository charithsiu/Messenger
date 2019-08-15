<template>
  <div id="app">
    <b-carousel
      height="300px"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/512/240/?image=1"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/512/240/?image=0">
        <h1>Can add text here!!!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/512/240/?image=1029"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          src="https://picsum.photos/512/240/?image=1067"
          alt="image slot"
        >
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      /*onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }*/
    }
  }
</script>
<style>
.carousel-inner{
  width:100%;
  max-height: 600px !important ;
}
#app {
  padding: 20px;
}

</style>