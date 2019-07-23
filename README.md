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
      className="PolygonFillPattern"
      fillPattern="IMAGE"
      imageScale="X"
    />

- `fillPattern` can be any image url or asset (e.g. `:fillPattern="require(...)"`)
- `imageScale` is a number that defines the image scale (e.g. `:imageScale="0.6"`)
- Any polygon for which `PolygonFillPattern` is specified as part of `className` will be removed if it does not have a `fillPattern` property. This is a workaround to fix the issue specified in the next section.

## Known Issue

For some reasons, both a `Polygon` (default, without fill pattern) and a `PolygonFillpattern` are sometimes being rendered simultaneously. It may be an issue if `PolygonFillpattern` is dynamically hidden since the other `Polygon` will still be displayed. To tackle this problem, `PolygonFillPattern` can be included in the `className` property. Any `Polygon` that has a `PolygonFillPattern` `className` property but no `fillPattern` option will be removed.

If you understand this issue and know how to fix it properly, you are more than welcome to contribute.

## Author

[Guillaume Jounel](https://github.com/guillaumejounel/)

## License

MIT
polygon fillpattern plugin extension for vue2-leaflet package
