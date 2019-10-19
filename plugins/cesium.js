import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
})