// add new marker function
export const showMarkersLogic = (latitude, longitude, markerText) => {
  let map = L.map('map').setView([latitude, longitude], 13)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  let redIcon = L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

  L.marker([latitude, longitude], { icon: redIcon })
    .addTo(map)
    .bindPopup(`${markerText}`)
    .openPopup()
}
// markerText
