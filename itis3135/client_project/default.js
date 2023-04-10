$(document).ready(function() {
    const pathname = String(location.pathname.split("/").splice(-1));
    if (pathname == "events.html") {
        var map = L.map('map').setView([35.03156, -80.62019], 16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var market = L.marker([35.03159, -80.61997]).addTo(map);
    }
});    