console.log('hallo world')

// getting the user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords)
      const { latitude, longitude } = position.coords
      console.log(`This is your position: ${latitude}, ${longitude}`)
    },
    () => {
      console.log('There is no location')
    }
  )
}

//
var map = L.map('map').setView([52.3624756, 5.2083721, 21], 13)

// my location
// 52.3624756,5.2083721,21

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

L.marker([52.3624756, 5.2083721, 21])
  .addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup()
