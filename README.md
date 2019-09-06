# vue2-leaflet-polygonfillpattern

This is a [polygon-fillPattern plugin](https://github.com/lwsu/leaflet-polygon-fillPattern) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

**Important 2.0.0 change:** The plugin needs to be imported with `Vue.use` as indicated below, and the component name has been enforced to `l-polygon-fill-pattern`.

## Install

    npm install --save vue2-leaflet-polygonfillpattern

## Demo

![demo gif](http://guillaumejounel.com/dev/vue2-leaflet-polygonfillpattern/demo.gif)

Check out the [live demo](http://guillaumejounel.com/dev/vue2-leaflet-polygonfillpattern/)

## Usage

In `main.js`:

    import PolygonFillpattern from "vue2-leaflet-polygonfillpattern";
    ...
    Vue.use(PolygonFillpattern);

In your component:

    <l-polygon-fill-pattern
      :lat-lngs="coordinates"
      ...
      fillPattern="IMAGE"
      imageScale="X"
    />

- `fillPattern` can be any image url or asset (e.g. `:fillPattern="require(...)"`)
- `imageScale` is a number that defines the image scale (e.g. `:imageScale="0.6"`)

## Author

[Guillaume Jounel](https://github.com/guillaumejounel/)

## License

MIT
polygon fillpattern plugin extension for vue2-leaflet package
