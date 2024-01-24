// import data
// import { showMarkersLogic } from './showMarkersLogic.js'

let map
let markers = []

// test object
let locationsData = [
  { lati: 51.505, long: -0.09 },
  { lati: 41.505, long: -0.19 },
]

// Function to initialize the map
function initializeMap(latitude, longitude) {
  map = L.map('map').setView([latitude, longitude], 13)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Attach the click event listener to the map after initializing it
  map.on('click', onMapClick)
}

// Function to remove all markers from the map
function removeAllMarkers() {
  markers.forEach((marker) => {
    marker.remove()
  })
  markers = []
}

// Function to show locations on the map
function showLocationsOnMap() {
  removeAllMarkers()

  locationsData.forEach((location) => {
    const marker = L.marker([location.lati, location.long])
      .addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup()
    markers.push(marker)
  })
}

// Function to get the user's location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        console.log(`This is your position: ${latitude}, ${longitude}`)
        initializeMap(latitude, longitude)
        showLocationsOnMap()
      },
      () => {
        console.log('There is no location')
      }
    )
  }
}

// Function to handle map click
function onMapClick(e) {
  const newLocation = { lati: e.latlng.lat, long: e.latlng.lng }
  locationsData.push(newLocation)
  showLocationsOnMap()
}

// Initialize map and show locations on page load
getUserLocation()
