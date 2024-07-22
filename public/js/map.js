mapboxgl.accessToken = mapToken

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12", //style URL
    center: [77.5946, 12.9716], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

// console.log(coordinates);

// // const marker = new mapboxgl.Marker()
// //     .setLngLat() // Listing.geomerty.cordinates
// //     .addTo(map);


// document.addEventListener('DOMContentLoaded', (event) => {
//     if (typeof coordinates !== 'undefined' && Array.isArray(coordinates) && coordinates.length === 2) {
//         const lngLat = { lng: coordinates[0], lat: coordinates[1] };

//         // Initialize Mapbox with the token
//         mapboxgl.accessToken = mapToken;
//         const map = new mapboxgl.Map({
//             container: 'map', // ID of the container element
//             style: 'mapbox://styles/mapbox/streets-v11', // Style URL
//             center: lngLat, // Starting position [lng, lat]
//             zoom: 9 // Starting zoom level
//         });

//         // Add a marker at the lngLat position
//         new mapboxgl.Marker({ color: 'red' })
//             .setLngLat(lngLat)
//             .setPopup(new mapboxgl.Popup({ offset: 25 })
//                 .setHTML(`<p> Exact Location will be provided after bookiing</p>`)
//                 .setMaxWidth("300px"))
//             .addTo(map);
//     } else {
//         console.error('Invalid coordinates:', coordinates);
//     }
// });