let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
    mapTypeId: "terrain",
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("You are right here.");
          infoWindow.open(map);
          map.setCenter(pos);
          document.getElementById("latitude").innerHTML =
            position.coords.latitude;
          document.getElementById("longitude").innerHTML =
            position.coords.longitude;

          // Use the ElevationService to display altitude
          const elevator = new google.maps.ElevationService();
          displayLocationElevation(pos, elevator);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function displayLocationElevation(location, elevator) {
  // Initiate the location request
  elevator.getElevationForLocations(
    {
      locations: [location],
    },
    (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          document.getElementById("altitude").innerHTML =
            results[0].elevation.toFixed(2) + " meters";
        } else {
          document.getElementById("altitude").innerHTML = "No data available";
        }
      } else {
        document.getElementById("altitude").innerHTML =
          "Elevation service failed due to: " + status;
      }
    }
  );
}

// Make the initMap function available globally
window.initMap = initMap;
 