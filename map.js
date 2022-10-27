let id;
let target;
let options;
let home;
let homeAddr;

var map = L.map('map').setView([51.505, -0.09], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([51.505, -0.09], {
    color: 'rgb(0, 98, 179)',
    fillColor: 'rgb(0, 98, 179)',
    fillOpacity: 0.5,
    radius: 1
}).addTo(map);

map.addEventListener('zoom', () => {
    map.setZoom(23);
})

function success(pos) {
    const crd = pos.coords;
    map.panTo([crd.latitude, crd.longitude])
    circle.remove();
    circle = L.circle([crd.latitude, crd.longitude], {
        color: 'rgb(0, 98, 179)',
        fillColor: 'rgb(0, 98, 179)',
        fillOpacity: 0.5,
        radius: 2
    }).addTo(map);
    if (iOS()) {
        home.href = `http://maps.apple.com/?saddr=${crd.latitude},${crd.longitude}&daddr=${encodeURIComponent(homeAddr)}`
    } else {
        home.href = `https://www.google.com/maps/dir/?api=1&origin=${crd.latitude},${crd.longitude}&destination=${encodeURIComponent(homeAddr)}`
    }
    console.log("penis received");
}
  
function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
}

function getLocation() {
    navigator.geolocation.watchPosition(success, error, options);
    console.log("penis");
}

getLocation();
setInterval(getLocation, 5000);

var mouseTimer;
function mouseDown() { 
    mouseUp();
    console.log("penis?????")
    mouseTimer = window.setTimeout(execMouseDown, 3000); //set timeout to fire in 2 seconds when the user presses mouse button down
}

function mouseUp() { 
    console.log("eat shit!!!!!")
    if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
}

function execMouseDown() { 
    console.log("penis!!!!!")
    document.getElementById("call-the-police").click();
}

var div = document.getElementById("help-me");
div.addEventListener("touchstart", mouseDown);
document.body.addEventListener("touchend", mouseUp);
document.addEventListener('contextmenu', event => event.preventDefault());

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
home = document.getElementById("home-button");
homeAddr = "39C, Lot 59, Sedco Light Industrial Estate, Phs 2, Jalan Kilang, Kolombong, Inanam, 88450 Kota Kinabalu, Sabah, Malaysia"