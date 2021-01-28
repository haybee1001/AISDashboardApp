
function ShowAlert() {
    alert("This is pure java script called");
}


function LoadGoogleBaseMAP(lat, lng)
{


    const myLatLng = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    };


    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 19,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Incidence Map",
    });
}


function buttonclick() {
    var pagebutton = document.getElementById("selfclick");
    pagebutton.click();
}



function Mapbox(lat, lng) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia29sbGdpcyIsImEiOiJjanN2eXo4MHYwN25oNDl0M2Y2aGFsbGZnIn0.Q7g4B0k9soDgbu9VHvt1wA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kollgis/ck1gcbw5f4zcl1cp1fqhcd9lj',
        center: [lng, lat],
        zoom: 19
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
}


if (document.getElementById('xxx').checked) {
    document.getElementById('totalCost').value = 10;
} else {
    calculate();
}




