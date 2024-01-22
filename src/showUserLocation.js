// import data
import { showMarkersLogic } from './showMarkersLogic.js'
// requesting data from the user
// getting the user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // getting locations
      // testing
      console.log(position.coords)

      const { latitude, longitude } = position.coords
      console.log(`This is your position: ${latitude}, ${longitude}`)

      // show user Location

      var map = L.map('map').setView([latitude, longitude], 13)
      let userPosationText =
        'Your current location <br> (this may not be your ex....)'

      showMarkersLogic(map, latitude, longitude, userPosationText)
    },
    () => {
      console.log('There is no location')
    }
  )
}
