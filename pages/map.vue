<template>
<v-layout style="height: 100%" align-content-center>
    <CitySelector class="selector" />
  <div id="map" style="height: 100%; width: 100%"></div>
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
  top: 5px;
  left: 5px;
}
</style>

<script>
import L from "wrld.js"
import CitySelector from '@/components/CitySelector'

export default {
  components: {
    Map,
    CitySelector
  },
   data: function () {
    return {
    }
  },
  mounted() {
    L.map('map', "68fc6881bbfee411f30452ab9a919dcc", {
      center: [51.517327, -0.120005],
      zoom: 15
    });

  },
  methods: {
  }
}
</script>
