function email() {
    var a = document.getElementById("search").value;
    if (a === "b.rondo@orange.fr") {
        window.open("Scylla.html")
    }
}


function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Impossible d avoir votre localisation';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocalisation est impossible sur votre navigateur';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
document.querySelector('#find-me').addEventListener('click', geoFindMe);


