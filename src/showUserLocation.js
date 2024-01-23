// import data
// import { showMarkersLogic } from './showMarkersLogic.js'

// test object
const locationData = [
  {
    latitude: 51.505,
    longitude: -0.09,
  },
  {
    latitude: 41.505,
    longitude: -0.19,
  },
]

// requesting data from the user // getting the user location

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // getting locations
      const { latitude, longitude } = position.coords
      console.log(`This is your position: ${latitude}, ${longitude}`)

      var map = L.map('map').setView([51.505, -0.09], 13)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)
    },
    () => {
      console.log('There is no location')
    }
  )
}
