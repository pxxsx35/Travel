let map;
let marker;

function initMap() {
    const defaultLocation = { lat: 13.7563, lng: 100.5018 }; // Bangkok

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: defaultLocation,
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "You are here"
    });
}

function goToLocation(lat, lng) {
    const newLocation = { lat: lat, lng: lng };

    map.setCenter(newLocation);
    map.setZoom(10);

    marker.setPosition(newLocation);
}