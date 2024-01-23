// import data
import { showMarkersLogic } from './showMarkersLogic.js'

// requesting data from the user // getting the user location

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // getting locations
      const { latitude, longitude } = position.coords
      console.log(`This is your position: ${latitude}, ${longitude}`)

      // show user Location
      let userPosationText =
        'Your current location <br> (this may not be your ex....)'

      // passing the data to showMarkersLogic function
      showMarkersLogic(latitude, longitude, userPosationText)
    },
    () => {
      console.log('There is no location')
    }
  )
}
