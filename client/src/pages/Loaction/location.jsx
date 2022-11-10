/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function nearLocation() {
  function Map() {
    window.location.href = 'https://www.google.com/maps/search/nearby+police+station/';
  }

  return (
    <div className="App">
      <button type="submit" onClick={Map}>🗺️</button>
    </div>
  );
}

export default nearLocation;

// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// var map;
// var infowindow;

// function Location(){
// function initialize() {
//   var latlon = new google.maps.LatLng(25.984602, 90.785091);
//   mapCanvas = document.getElementById('mapholder');
//   mapCanvas.style.height = '250px';
//   mapCanvas.style.width = '500px';

//   map = new google.maps.Map(document.getElementById('mapholder'), {
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     center: latlon,
//     zoom: 15
//   });

//   var currentMarker = new google.maps.Marker({
//     map: map,
//     position: latlon,
//     title: 'Current Location',
//     icon: {
//       url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png",
//       size: new google.maps.Size(7, 7),
//       anchor: new google.maps.Point(3.5, 3.5)
//     }
//   });

//   var request = {
//     location: latlon,
//     radius: 5000,
//     types: ['atm']
//   };
//   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     document.getElementById('status').innerHTML = results.length + " places found";
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   } else
//     alert("Status not OK");
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

//  return google.maps.event.addDomListener(window, 'load', initialize);
// }

// export default Location;
