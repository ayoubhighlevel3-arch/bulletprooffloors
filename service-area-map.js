// Service Area Map Initialization
document.addEventListener('DOMContentLoaded', function () {
  // Initialize map centered on San Angelo, TX
  const sanAngeloCoords = [31.4638, -100.4370];

  const map = L.map('service-area-map', {
    center: sanAngeloCoords,
    zoom: 9,
    scrollWheelZoom: false,
    zoomControl: true
  });

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Add 100-mile radius circle (100 miles = 160934.4 meters)
  const serviceRadius = L.circle(sanAngeloCoords, {
    color: '#FF5F00',       // Impact Orange border
    fillColor: '#FF5F00',   // Impact Orange fill
    fillOpacity: 0.15,
    weight: 3,
    radius: 160934.4         // 100 miles in meters
  }).addTo(map);

  // Add center marker for San Angelo
  const marker = L.marker(sanAngeloCoords, {
    title: 'Bulletproof Floors - San Angelo, TX'
  }).addTo(map);

  // Add popup to marker
  marker.bindPopup('<b>Bulletproof Floors</b><br>San Angelo, TX').openPopup();

  // Fit map to show full circle
  map.fitBounds(serviceRadius.getBounds(), {
    padding: [20, 20]
  });
});
