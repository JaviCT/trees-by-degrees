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
import "wrld.js"
import CitySelector from '@/components/CitySelector'
import data from '~/assets/london.json'

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
    var key = '68fc6881bbfee411f30452ab9a919dcc'
    var map = L.Wrld.map('map', key, {
        center: [ 51.509, -0.08 ],
        zoom: 15
    });
    var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 95],
        iconAnchor:   [22, 94],
      }
    });
    var trees = [ 
        new LeafIcon( {iconUrl: require ('@/assets/img/trees/tree1.png') } ), 
        new LeafIcon( {iconUrl: require ('@/assets/img/trees/tree2.png') } ), 
        new LeafIcon( {iconUrl: require ('@/assets/img/trees/tree3.png') } )
    ];
    var less_trees = 10;
    for (var i = 0; i < less_trees * data.length - 1; i += less_trees) {
      if (data[i]) {
        let tree = data[i];
        let lat = tree.latitude;
        let long = tree.longitude;
        let icon = trees[Math.floor(Math.random() * trees.length)]; // random tree
        L.marker( [ lat, long ], { icon: icon } ).addTo(map);
      }
    };
  },
  methods: {
  }
}
</script>
