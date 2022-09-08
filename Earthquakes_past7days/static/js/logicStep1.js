// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  // tileSize: 512,
  maxZoom: 18,
  // zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  // tileSize: 512,
  maxZoom: 18,
  // zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
});



// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// d3.json(torontoHoods).then(function (data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature(feature, layer) {
//       layer.bindPopup("<h3> Neighborhood:" + feature.properties.AREA_NAME + "</h3>"
//       );
//     }
//   }).addTo(map);
// });
