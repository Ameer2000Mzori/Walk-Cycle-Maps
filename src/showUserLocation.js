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

      // my location
      // 52.3624756,5.2083721,21

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      var redIcon = L.icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

      L.marker([latitude, longitude], { icon: redIcon })
        .addTo(map)
        .bindPopup('Your current location <br> (this may not be your ex....)')
        .openPopup()
    },
    () => {
      console.log('There is no location')
    }
  )
}
