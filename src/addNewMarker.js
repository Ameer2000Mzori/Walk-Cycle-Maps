my location
52.3624756,5.2083721,21

// getting the user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    () => {
      var map = L.map('map').setView([52.3624756, 5.2083721, 21, 21], 13)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([52.3624756, 5.2083721, 21])
        .addTo(map)
        .bindPopup('Your current location <br> (this is added marker)')
        .openPopup()
    },
    () => {
      console.log('There is no location')
    }
  )
}
