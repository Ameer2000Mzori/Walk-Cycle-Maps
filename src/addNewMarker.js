// importing function
import { showMarkersLogic } from './showMarkersLogic.js'

// 52.3624756,5.2083721,21

// getting the user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    () => {
      let exampleText = `example text here`
      showMarkersLogic(52.3624756, 5.2083721, exampleText)
    },
    () => {
      console.log('There is no location')
    }
  )
}
