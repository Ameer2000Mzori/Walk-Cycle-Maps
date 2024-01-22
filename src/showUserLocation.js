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

      var map = L.map('map').setView([latitude, longitude, 21], 13)

      // my location
      // 52.3624756,5.2083721,21

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([latitude, longitude, 21])
        .addTo(map)
        .bindPopup('your current location')
        .openPopup()
    },
    () => {
      console.log('There is no location')
    }
  )
}
