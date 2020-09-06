// Create the script tag, set the appropriate attributes
var script = document.createElement('script');

script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.KEY}&callback=initMap`;
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    // JS API is loaded and available
    let cba = {lat: -31.4091212, lng: -64.1913447};
    let infowindow = new google.maps.InfoWindow();
    let geocoder = new google.maps.Geocoder();
    let marker;
    
    map = new google.maps.Map(document.getElementById("fromMap"), {
        center: cba,
        zoom: 13
    });
    map.addListener("click", event => {
        marker.setMap(null);
        marker = addMarker(geocoder, map, infowindow, event.latLng);
        console.log(event.latLng);
        geocodeLatLng(geocoder, map, infowindow, event.latLng, marker);
    });
    marker = addMarker(geocoder, map, infowindow, cba);
    $("#fromStreet").val("La Rioja");
    $("#fromNumber").val(645);
    $('#fromCity').val("Capital");
    infowindow.setContent("La Rioja 645, X5000 EVI, Córdoba, Argentina");
    infowindow.open(map, marker);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

function addMarker(geocoder, map, infowindow, location) {
    let marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
    });
    marker.addListener("dragend", event => {
        var position = marker.getPosition();
        console.log(position.toString());
        geocodeLatLng(geocoder, map, infowindow, position, marker);
    });
    return marker;
}

function geocodeLatLng(geocoder, map, infowindow, position, marker) {
    let data;
    const latlng = position;
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
            data = results[0];
            if (data) {
                infowindow.setContent(data.formatted_address);
                console.log(data);
                infowindow.open(map, marker);
                setToInputs(data.address_components);
            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

function setToInputs(addressComponents){
    let number = addressComponents[0].long_name;
    let street = addressComponents[1].long_name;
    let city = addressComponents[3].long_name;
    if (!($.isNumeric(number))){
        city = street;
        street = number;
        number = 0;
    }
    $("#fromStreet").val(street);
    $("#fromNumber").val(number);
    $('#fromCity').val(city);
/*    $("#fromCity option").filter(function() {
        console.log($(this).text());
        return $(this).text() == city;
    }).prop('selected', true);*/
}
