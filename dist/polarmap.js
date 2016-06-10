/*
 PolarMap.js 1.2.0 (4ead999)
 (c) 2014-2016 Arctic Connect, Geo Sensor Web Lab
*/
!function(t,a,o,e){"undefined"==typeof o&&(o={}),o.PolarMap={version:"1.2.0",Control:{},Util:{}},"object"==typeof module&&"object"==typeof module.exports?module.exports=o.PolarMap:"function"==typeof define&&define.amd&&define(o.PolarMap),o.PolarMap.Control.Rotation=o.Control.extend({options:{position:"topright",cwText:"&orarr;",cwTitle:"Rotate Clockwise",ccwText:"&olarr;",ccwTitle:"Rotate Counter-Clockwise"},onAdd:function(t){var a="leaflet-control-rotation",e=o.DomUtil.create("div",a+" leaflet-bar"),n=this.options;return this._cwButton=this._createButton(n.cwText,n.cwTitle,a+"-cw",e,this._rotateCW),this._ccwButton=this._createButton(n.ccwText,n.ccwTitle,a+"-ccw",e,this._rotateCCW),o.DomEvent.disableClickPropagation(e),o.Browser.touch||o.DomEvent.disableScrollPropagation(e),e},_rotateCW:function(){this.options.onRotateCW&&this.options.onRotateCW()},_rotateCCW:function(){this.options.onRotateCCW&&this.options.onRotateCCW()},_createButton:function(t,a,e,n,i){var s=o.DomUtil.create("a",e,n);return s.innerHTML=t,s.href="#",s.title=a,o.DomEvent.on(s,"mousedown dblclick",o.DomEvent.stopPropagation).on(s,"click",o.DomEvent.stop).on(s,"click",i,this).on(s,"click",this._refocusOnMap,this),s}}),o.PolarMap.Control.rotation=function(t){return new o.PolarMap.Control.Rotation(t)},o.PolarMap.TileLayer=o.TileLayer.extend({}),o.PolarMap.tileLayer=function(t,a){return new o.PolarMap.TileLayer(t,a)};var n=o.Projection.Mercator.R_MAJOR*Math.PI;o.PolarMap.LAEATileLayer=o.PolarMap.TileLayer.extend({options:{name:null,crs:null,minZoom:0,maxZoom:18,tms:!1,origin:[-n,n],maxResolution:(n- -n)/256,projectedBounds:o.bounds(o.point(-n,n),o.point(n,-n)),center:[90,0],zoom:4,continuousWorld:!1,noWrap:!0,attribution:'Map &copy; <a href="http://arcticconnect.org">ArcticConnect</a>. Data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}}),o.PolarMap.laeaTileLayer=function(t,a){return new o.PolarMap.LAEATileLayer(t,a)},o.PolarMap.layer3571=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3571/{z}/{x}/{y}.png",{name:"ac_3571",crs:"EPSG:3571",proj4def:"+proj=laea +lat_0=90 +lon_0=180 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.layer3572=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3572/{z}/{x}/{y}.png",{name:"ac_3572",crs:"EPSG:3572",proj4def:"+proj=laea +lat_0=90 +lon_0=-150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.layer3573=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3573/{z}/{x}/{y}.png",{name:"ac_3573",crs:"EPSG:3573",proj4def:"+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.layer3574=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3574/{z}/{x}/{y}.png",{name:"ac_3574",crs:"EPSG:3574",proj4def:"+proj=laea +lat_0=90 +lon_0=-40 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.layer3575=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3575/{z}/{x}/{y}.png",{name:"ac_3575",crs:"EPSG:3575",proj4def:"+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.layer3576=o.PolarMap.laeaTileLayer("//{s}.tiles.arcticconnect.org/osm_3576/{z}/{x}/{y}.png",{name:"ac_3576",crs:"EPSG:3576",proj4def:"+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"}),o.PolarMap.Util.Hash=o.Class.extend({options:{map:null,lastHash:null,movingMap:!1,changeDefer:100,changeTimeout:null,isListening:!1,hashChangeInterval:null,getBaseLayer:null,setBaseLayer:null},initialize:function(a,n){n=o.setOptions(this,n),this.HAS_HASHCHANGE=function(){var a=t.documentMode;return"onhashchange"in t&&(a===e||a>7)}(),this.onHashChange=o.Util.bind(this.onHashChange,this),this.map=a,this.options.lastHash=null,this.onHashChange(),this.options.isListening||this.startListening()},formatHash:function(t){var a=[],o=t.getCenter(),e=t.getZoom(),n=Math.max(0,Math.ceil(Math.log(e)/Math.LN2));return null!==this.options.getBaseLayer&&a.push(this.options.getBaseLayer()),a.push(e,o.lat.toFixed(n),o.lng.toFixed(n)),"#"+a.join("/")},onHashChange:function(){if(!this.options.changeTimeout){var t=this;this.options.changeTimeout=setTimeout(function(){t.update(),t.options.changeTimeout=null},this.options.changeDefer)}},onMapMove:function(){if(this.options.movingMap||!this.map._loaded)return!1;var t=this.formatHash(this.map);this.options.lastHash!=t&&(location.replace(t),this.options.lastHash=t)},parseHash:function(t){0===t.indexOf("#")&&(t=t.substr(1));var a,e,n,i=t.split("/");if(4===i.length){var s=i[0];return a=parseInt(i[1],10),e=parseFloat(i[2]),n=parseFloat(i[3]),""===s||isNaN(a)||isNaN(e)||isNaN(n)?!1:{baseLayer:s,center:new o.LatLng(e,n),zoom:a}}return 3===i.length?(a=parseInt(i[0],10),e=parseFloat(i[1]),n=parseFloat(i[2]),isNaN(a)||isNaN(e)||isNaN(n)?!1:{center:new o.LatLng(e,n),zoom:a}):!1},removeFrom:function(t){this.options.changeTimeout&&clearTimeout(this.options.changeTimeout),this.options.isListening&&this.stopListening(),this.map=null},startListening:function(){this.map.on("moveend",this.onMapMove,this),this.HAS_HASHCHANGE?o.DomEvent.addListener(t,"hashchange",this.onHashChange):(clearInterval(this.options.hashChangeInterval),this.options.hashChangeInterval=setInterval(this.onHashChange,50)),this.options.isListening=!0},stopListening:function(){this.map.off("moveend",this.onMapMove,this),this.HAS_HASHCHANGE?o.DomEvent.removeListener(t,"hashchange",this.onHashChange):clearInterval(this.options.hashChangeInterval),this.options.isListening=!1},update:function(){var t=location.hash;if(t!==this.options.lastHash){var a=this.parseHash(t);a?(this.options.movingMap=!0,a.baseLayer!==e&&this.options.setBaseLayer(a.baseLayer),this.map.setView(a.center,a.zoom),this.options.movingMap=!1):this.onMapMove(this.map)}}}),o.PolarMap.Util.hash=function(t,a){return new o.PolarMap.Util.Hash(t,a)},o.PolarMap.Map=o.Map.extend({options:{changingMap:!1,fadeAnimation:!0,trackResize:!0,markerZoomAnimation:!0,center:o.latLng([90,0]),zoom:1},initialize:function(t,a){a=o.setOptions(this,a),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.center&&a.zoom!==e&&this.setView(o.latLng(a.center),a.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this.callInitHooks(),this.on("baselayerchange",function(t){this._update(t.layer)}),this._update(a.baseLayer)},loadTileProjection:function(t){return this.options.changingMap?!1:void(this._usingTileProjection(t)?console.log("That tile layer is already active."):(this._dropTileLayers(),this._update(t)))},remove:function(){for(var t in this._layers)this.removeLayer(this._layers[t]);return o.Map.prototype.remove.call(this),this},_defineMapCRS:function(t,a){for(var e=[],n=a.minZoom;n<=a.maxZoom;n++)e.push(a.maxResolution/Math.pow(2,n));return new o.Proj.CRS(t,a.proj4def,{origin:a.origin,resolutions:e,bounds:a.projectedBounds})},_dropTileLayers:function(){var t=this;t.eachLayer(function(a){a instanceof o.TileLayer&&t.removeLayer(a)})},_setMapCRS:function(t,a){switch(t){case"EPSG:3857":return o.CRS.EPSG3857;case"EPSG:3395":return o.CRS.EPSG3395;case"EPSG:4326":return o.CRS.EPSG4326;default:return this._defineMapCRS(t,a)}},_update:function(t){if(this.options.changingMap)return!1;this.options.changingMap=!0;var a=this.getCenter(),o=this.getZoom();this._updateCRSAndLayers(t.options),this.addLayer(t,!0),this.setView(a,o,{reset:!0}),this.setMaxBounds(t.options.bounds),this.options.changingMap=!1},_updateAllLayers:function(t){var a=this;t.eachLayer?t.eachLayer(function(t){a._updateAllLayers(t)}):t.redraw?t.redraw():t.update?t.update():console.log("Don't know how to update",t)},_updateCRSAndLayers:function(t){this.options.crs=this._setMapCRS(t.crs,t),this._updateAllLayers(this)},_usingTileProjection:function(t){var a=!1,o=this._layers;for(var e in o)if(o.hasOwnProperty(e)&&(a=o[e]===t))break;return a}}),o.PolarMap.map=function(t,a){return new o.PolarMap.Map(t,a)};for(var i={attribution:'Map &copy; <a href="http://arcticconnect.org">ArcticConnect</a>. Data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',locationDetectionError:"Location detection error: "},s={"EPSG:3571 Bering Sea":o.PolarMap.layer3571,"EPSG:3572 Alaska":o.PolarMap.layer3572,"EPSG:3573 Canada":o.PolarMap.layer3573,"EPSG:3574 Atlantic":o.PolarMap.layer3574,"EPSG:3575 Europe":o.PolarMap.layer3575,"EPSG:3576 Russia":o.PolarMap.layer3576},r=function(t){for(var a in s)if(s.hasOwnProperty(a)&&-1!==a.indexOf(t))return s[a];return null},l=Object.keys(s).sort(),h=0;h<l.length;h++){var c=0===h?5:h-1,p=5===h?0:h+1,u=s[l[h]];u.prev=s[l[c]],u.next=s[l[p]]}t.PolarMap=o.Class.extend({options:{geosearch:!1,locate:!1,permalink:!0},statics:{VERSION:o.PolarMap.version},initialize:function(t,a){var e=this;o.Util.setOptions(this,a),this.tiles=s,this.layersControl=o.control.layers(this.tiles,null),this.rotationControls=o.PolarMap.Control.rotation({onRotateCW:function(){e.map.loadTileProjection(e.getBaseLayer().next)},onRotateCCW:function(){e.map.loadTileProjection(e.getBaseLayer().prev)}}),this.map=o.PolarMap.map(t,{baseLayer:this.tiles["EPSG:3573 Canada"],center:[90,0],zoom:4}),this.layersControl.addTo(this.map),this.rotationControls.addTo(this.map),this.options.geosearch&&this._initGeosearch(),this.options.locate&&this._initLocate(),this.options.permalink&&this._initPermalink()},addLayer:function(t,a){this.map.addLayer(t),"undefined"!=typeof a&&a.switcher&&this.layersControl.addOverlay(t,a.name)},getBaseLayer:function(){var t=null;for(var a in this.tiles)this.tiles.hasOwnProperty(a)&&this.map.hasLayer(this.tiles[a])&&(t=this.tiles[a]);return t},_initGeosearch:function(){new o.Control.GeoSearch({provider:new o.GeoSearch.Provider.OpenStreetMap,showMarker:!1}).addTo(this.map)},_initLocate:function(){var t=this,a=o.circle();this.map.on("locationfound",function(o){a.setLatLng(o.latlng),a.setRadius(o.accuracy),t.map.hasLayer(a)||a.addTo(t.map),t._setProjectionForLongitude(o.longitude)}),this.map.on("locationerror",function(t){console.warn(i.locationDetectionError,t)}),this.map.locate()},_initPermalink:function(){var t=this;this.hash=o.PolarMap.Util.hash(this.map,{getBaseLayer:function(){return t.getBaseLayer().options.name},setBaseLayer:function(a){t._setBaseLayer(a)}})},_setBaseLayer:function(t){var a=this;for(var o in this.tiles)this.tiles.hasOwnProperty(o)&&this.tiles[o].options.name===t&&a.map.loadTileProjection(this.tiles[o])},_setProjectionForLongitude:function(t){var a;a=t>=-180&&-165>=t?"EPSG:3571":t>-165&&-125>=t?"EPSG:3572":t>-125&&-70>=t?"EPSG:3573":t>-70&&-15>=t?"EPSG:3574":t>-15&&50>=t?"EPSG:3575":t>50&&135>=t?"EPSG:3576":"EPSG:3571",this.map.loadTileProjection(r(a))}}),t.polarMap=function(a,o){return new t.PolarMap(a,o)}}(window,document,L);