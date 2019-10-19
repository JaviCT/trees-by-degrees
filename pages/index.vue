<template>
<v-layout style="height: 100%" align-content-center>
  <p class="title1 display-4">Trees By Degrees</p>
  <iframe class="viewer" src="https://jeromeetienne.github.io/threex.planets/examples/earth.html" frameborder="0"/>
  <div class="selector">
    <v-autocomplete
      v-model="country"
      :items="countries"
      item-value="value"
      item-text="name"
      label="Country"
      return-object
      style="float: left"
    />
    <v-autocomplete
      v-model="city"
      label="Cities"
      :items="cities"
      @change="goToCity"
    ></v-autocomplete>
  </div>
</v-layout>
</template>

<style scoped>
.viewer {
  width: 100%;
  height: 100%;
}
.title1 {
  position:absolute;
  z-index: 1;
  left: 30%;
}
.selector {
  position:absolute;
  z-index: 1;
  left: 40%;
  top: 50%
}
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import cities from '~/assets/cities.json'
import config from "@/services/data.config"

export default {
  components: {
    Logo,
    VuetifyLogo
  },
   data: function () {
    return {
      countries: null,
      country: "",
      city: ""
    }
  },
  computed: {
    cities() {
      return cities[`${this.country.name}`]
    }
  },
  mounted() {
    this.countries = config.countries
  },
  methods: {
    goToCity() {
      console.log(this.city);
      console.log(this.country);
      
    }
  }
}
</script>
