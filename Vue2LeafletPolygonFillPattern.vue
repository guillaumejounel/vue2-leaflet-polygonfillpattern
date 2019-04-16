<template>
  <div style="display: none;">
    <slot v-if="ready" />
  </div>
</template>

<script>
import L from "leaflet";
import "./PolygonFillPattern.js";
import { LPolygon, propsBinder, findRealParent } from "vue2-leaflet";

const props = {
  fillPattern: {
    type: String,
    default: null
  },
  latLngs: {
    type: Array,
    default: () => []
  },
  imageScale: {
    type: Number,
    default: 1
  }
};

export default {
  name: "PolygonFillPattern",
  mixins: [LPolygon],
  props,
  mounted() {
    this.polygonOptions.fillPattern = this.fillPattern;
    this.polygonOptions.imageScale = this.imageScale;
    this.mapObject = L.polygon(this.latLngs, this.polygonOptions);
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
  },
  watch: {
    imageScale(v) {
      this.mapObject.options.imageScale = v;
      this.mapObject._renderer._updateStyle(this.mapObject);
    }
  }
};
</script>
