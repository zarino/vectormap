$(function(){

  var map = new jvm.Map({
    container: $('#map'),
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    zoomOnScroll: false,
    zoomButtons: false,
    panOnDrag: false,
    regionStyle: {
      initial: {
        fill: 'white',
        'fill-opacity': 0.5
      },
      hover: {
        'fill-opacity': 0.5,
        cursor: 'default'
      },
      selected: {},
      selectedHover: {}
    },
    markerStyle: {
      initial: {
        fill: 'white',
        stroke: 'none'
      },
      hover: {
        fill: '#de4c4f',
        stroke: 'white',
        'stroke-width': 4
      }
    },
    onRegionTipShow: function(e, el, code){
      // Prevent tooltip when hovering over a region
      e.preventDefault();
    },
    markers: [
      {latLng: [53.825, -2.421], name: 'UK'},
      {latLng: [58.238, -107.808], name: 'Canada'},
      {latLng: [44.204, 17.582], name: 'Bosnia'},
      {latLng: [33.993, 9.207], name: 'Tunisia'},
      {latLng: [-10.086, -52.292], name: 'Brazil'},
      {latLng: [-29.581, 24.283], name: 'South Africa'},
      {latLng: [-2.223, 30.026], name: 'Rwanda'},
      {latLng: [-38.303, -72.393], name: 'Chile'},
      {latLng: [42.630, 25.001], name: 'Bulgaria'},
      {latLng: [46.518, 2.507], name: 'France'},
      {latLng: [29.892, 70.467], name: 'Pakistan'},
      {latLng: [-25.590, 135.076], name: 'Australia'},
      {latLng: [4.952, 12.318], name: 'Cameroon'},
      {latLng: [44.398, 20.693], name: 'Serbia'},
      {latLng: [41.435, 21.650], name: 'Macedonia'},
      {latLng: [45.753, 25.479], name: 'Romania'},
      {latLng: [-32.835, -56.120], name: 'Uruguay'},
      {latLng: [1.366, 32.179], name: 'Uganda'},
      {latLng: [31.848, 35.290], name: 'Israel'},
      {latLng: [-0.309, 102.054], name: 'Malaysia'},
      {latLng: [39.820, -3.236], name: 'Spain'},
      {latLng: [50.616, 4.900], name: 'European Union (asktheeu.org)'},
      {latLng: [-43.338, 172.167], name: 'New Zealand'},
      {latLng: [46.708, 8.250], name: 'Switzerland'},
      {latLng: [64.051, 16.147], name: 'Sweden'},
      {latLng: [53.125, -8.022], name: 'Ireland'},
      {latLng: [46.898, 19.736], name: 'Hungary'},
      {latLng: [49.702, 15.429], name: 'Czech Republic'},
      {latLng: [49.148, 31.701], name: 'Ukraine'},
      {latLng: [62.533, 10.164], name: 'Norway'},
      {latLng: [0.170, 37.922], name: 'Kenya'},
      {latLng: [9.000, 7.053], name: 'Nigeria'},
      {latLng: [7.098, -1.322], name: 'Ghana'},
      {latLng: [-18.987, 29.786], name: 'Zimbabwe'},
      {latLng: [-34.329, -65.214], name: 'Argentina'},
      {latLng: [23.657, 120.958], name: 'Taiwan'},
      {latLng: [39.413, 21.890], name: 'Greece'},
      {latLng: [31.632, -7.544], name: 'Morocco'},
    ]
  });

  // For debugging
  map.container.click(function(e){
    var latLng = map.pointToLatLng(e.offsetX, e.offsetY);
    var markerId = latLng.lat + ',' + latLng.lng;
    var markerName = latLng.lat.toFixed(3) + ', ' + latLng.lng.toFixed(3);

    if (latLng) {
      map.addMarker(markerId, {
        latLng: [latLng.lat, latLng.lng],
        name: markerName
      });
      console.log(markerName);
    }
  });

})