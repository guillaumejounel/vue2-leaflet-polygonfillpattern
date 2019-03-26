# vue2-leaflet-polygonfillpattern

This is a [polygon-fillPattern plugin](https://github.com/lwsu/leaflet-polygon-fillPattern) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## Install

    npm install --save vue2-leaflet-polygonfillpattern

## Demo

![demo gif](http://guillaumejounel.com/dev/vue2-leaflet-polygonfillpattern/demo.gif)
Check out the [live demo](http://guillaumejounel.com/dev/vue2-leaflet-polygonfillpattern/)

## Usage

In `main.js`:

    import PolygonFillpattern from "vue2-leaflet-polygonfillpattern";
    ...
    Vue.component("l-polygon-fill-pattern", PolygonFillpattern);


In your component:

    <l-polygon-fill-pattern
      :lat-lngs="coordinates"
      ...
      fillPattern="IMAGE"
    />

Where `IMAGE` can be any image url or asset (using `:fillPattern="require(...)"`).

## Author

[guillaumejounel](https://github.com/guillaumejounel/)


## License

MIT
polygon fillpattern plugin extension for vue2-leaflet package
