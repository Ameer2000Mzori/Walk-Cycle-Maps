// import data
// import { showMarkersLogic } from './showMarkersLogic.js'

// test object
const locationsData = [
  {
    lati: 51.505,
    long: -0.09,
  },
  {
    lati: 41.505,
    long: -0.19,
  },
]

// requesting data from the user // getting the user location

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // getting locations
      const { latitude, longitude } = position.coords
      console.log(`This is your position: ${latitude}, ${longitude}`)

      var map = L.map('map').setView([latitude, latitude], 13)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      locationsData.forEach((location) => {
        L.marker([location.lati, location.long])
          .addTo(map)
          .bindPopup('A pretty CSS popup.<br> Easily customizable.')
          .openPopup()
      })
    },
    () => {
      console.log('There is no location')
    }
  )
}
