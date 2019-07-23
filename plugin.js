import "./src/PolygonFillPattern.js";
import PolygonFillPattern from "./src/Vue2LeafletPolygonFillPattern.vue";

export default {
  install(Vue, options) {
    Vue.component("l-polygon-fill-pattern", PolygonFillPattern);
  }
};
