<template>
  <div style="display: none;">
    <slot v-if="ready" />
  </div>
</template>

<script>
import L from "leaflet";
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
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    this.mapObject.options.fillPattern = this.fillPattern;
    this.mapObject.options.imageScale = this.imageScale;
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(() => {
      this.$emit("ready", this.mapObject);
      this.mapObject._renderer &&
        this.mapObject._renderer._updateStyle(this.mapObject);
    });
  },
  watch: {
    imageScale(v) {
      this.mapObject.options.imageScale = v;
      this.mapObject._renderer &&
        this.mapObject._renderer._updateStyle(this.mapObject);
    }
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  }
};
</script>
