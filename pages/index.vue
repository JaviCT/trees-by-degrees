<template>
<v-layout style="height: 100%" align-content-center>
  <div class="viewer">
    <p class="title1 display-4">Trees By Degrees</p>
    <iframe class="viewer" src="https://jeromeetienne.github.io/threex.planets/examples/earth.html" frameborder="0"/>
    <div class="selector">
      <CitySelector />
    </div>
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
import cities from '~/assets/cities.json'
import config from "@/services/data.config"
import CitySelector from '@/components/CitySelector'

export default {
  components: {
    CitySelector
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
      this.$router.push("/map")
    }
  }
}
</script>
