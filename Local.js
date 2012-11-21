;(function(MapOnJS, Leaflet) {

  var Local = MapOnJS.Local = function(geoJson) {
    this.geoJson = geoJson;
  };
  Local.fn = Local.prototype;

  var styleFeature = {
    "color": "#dd0000",
    "weight": 4,
    "opacity": 0.80
  };

  var stylePoint = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  Local.fn.addTo = function (map) {
    Leaflet.geoJson(this.geoJson, {
      style: styleFeature,
      pointToLayer: function (feature, latlng) {
        return Leaflet.circleMarker (latlng, stylePoint);
      },
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.popupContent)
          layer.bindPopup(feature.properties.popupContent);
      }
    }).addTo(map);
  };

  Local.evolutio = new Local({
    "type": "Feature",
    "properties": {
      "name": "Evolutio",
      "amenity": "Local de trabalho",
      "popupContent": "Aqui é a Evolutio."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.989073, -21.251152]
    }
  });

  Local.shopping = new Local({
    "type": "Feature",
    "properties": {
      "name": "Lavras Shopping",
      "amenity": "Local de lazer",
      "popupContent": "Aqui é o shopping de Lavras."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.990285, -21.248087]
    }
  });

  Local.casaDoBahia = new Local({
    "type": "Feature",
    "properties": {
      "name": "Residência do Igor (Baiano)",
      "amenity": "Residência",
      "popupContent": "Aqui é a residência do senhor Baiano."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.991186, -21.247572]
    }
  });

  Local.casaDaGleyce = new Local({
    "type": "Feature",
    "properties": {
      "name": "Residência da Gleycia",
      "amenity": "Residência",
      "popupContent": "Aqui é a residência da querida Gleycinha."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.987082, -21.236952]
    }
  });

  Local.lemaf = new Local({
    "type": "Feature",
    "properties": {
      "name": "Leboratório de projetos em manejos florestais",
      "amenity": "Local de Trabalho",
      "popupContent": "Aqui é o Lemaf do DCF/UFLA."
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.974208, -21.226194]
    }
  });

})(window.MapOnJS, L);
