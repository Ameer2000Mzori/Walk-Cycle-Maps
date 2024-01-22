// importing function
import { showMarkersLogic } from './showMarkersLogic.js'

// getting the user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    () => {
      let exampleText = `example text here`
      showMarkersLogic(3624756, 5.2083721, 21, exampleText)
    },
    () => {
      console.log('There is no location')
    }
  )
}

// my location
// 52.3624756,5.2083721,21
