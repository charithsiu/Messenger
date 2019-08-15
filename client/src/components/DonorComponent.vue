<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<template>
<div id="app">
   <h1 style="text-align: center;">THE SIH FOUNDATION CELEBRATES OUR DONORS</h1>
    <p style="text-align: center;">The SIH Foundation is the charitable arm of Southern Illinois Healthcare (SIH) and was established in 2010 to receive philanthropic gifts on behalf of Herrin Hospital, Memorial Hospital of Carbondale and St. Joseph Memorial Hospital of Murphysboro. The funds raised are used to enhance and support the SIH mission of improving the health and well-being of all the people in the communities we serve. What sets us apart is our commitment to direct 100% of your gift/donation to the charitable area you designate. The SIH Foundation does not take out any administrative fees from your gift.</p>
     <h2 style="text-align: center; line-height: 58px; font-size: 33px;">Yearly Donors – 2019</h2>
  <!-- Columns: <input v-model.number="numberOfColumns">   class="card-list" class="card-item" -->
 
  <ul :style="gridStyle"  class="card-list" >
    
    <li v-for="(card, index) in cards" class="card-item" v-bind:key="cards">
      <div v-if=" index % 2 == 0" class="div-item">
        {{ card['name'] }}
      </div>
      <div v-else class="div-odd-item">
        {{ card['name'] }}
      </div>
    </li>
  </ul>
  <!-- <button @click="addCard">Add card</button> -->
  <h2 style="text-align: center; line-height: 58px; font-size: 33px;">Yearly Donors – 2018</h2>

  <ul :style="gridStyle"  class="card-list" >
    
    <li v-for="(card, index) in cards2" class="card-item" v-bind:key="cards2">
      <div v-if=" index % 2 == 0" class="div-item">
        {{ card['name'] }}
      </div>
      <div v-else class="div-odd-item">
        {{ card['name'] }}
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import DonorService from '@/services/DonorService'
export default {
  
data() {
    return {
      cards: [],
      cards2: [],
      numberOfColumns: 4,
      year:''
    }
  },
  async created(){
    try {
      this.year = "2019"
      this.cards = await DonorService.getDonors(this.year);
      this.cards2 = await DonorService.getDonorsOld();
    } catch (error) {
      this.error = error.message;
    }
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
      }
    },
  },
  methods: {
    addCard() {
      this.cards.push('new-card')
    },
  }
}
</script>

<style scoped>
.card-list {
  display: grid;
  grid-gap: 2px;
}

.card-item {
  background-color: #e9ecef;
  padding: 0 em;
}
.div-item {
  background-color: #e9ebef94;
  padding: 0 em;
  font-family:'Trebuchet MS', Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #004471;
    font-size: 16px;
}
.div-odd-item {
  background-color: #75ecc9;
  padding: 0 em;
  font-family:'Trebuchet MS', Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #004471;
    font-size: 16px;
}

body {
  background: #20262E;
  padding: 10px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.2s;
}

ul {
  list-style-type: none;
}

h1 h2 {
    font-family:'Trebuchet MS', Helvetica, sans-serif;
    line-height: 48px;
    font-weight: 400;
    font-style: normal;
    color: #004471;
    font-size: 40px;
}
</style>