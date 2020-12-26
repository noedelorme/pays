// Pointer le logo Google
// document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[12].style.display = "none";

// Initialisation de la map Google Maps
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.82, lng: 7.90 },
    disableDefaultUI: true,
    zoom: 3,
    minZoom: 3,
  });
}

// Gestion du bouton d'affichage
document.getElementById("lister").addEventListener("click", function(e){
  document.getElementById("pays-list").classList.toggle("hidded");
});

// Lien vers les pays
let paysBlock = document.querySelectorAll('.pays-block');
for(let i=0; i<paysBlock.length; i++){
  paysBlock[i].addEventListener("click", function(e){
    var request = {
      query: this.innerHTML.split(".png\"></span>")[1].split("</span>")[0],
      fields: ['name', 'geometry'],
    };

   var service = new google.maps.places.PlacesService(map);

   service.findPlaceFromQuery(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       map.setCenter(results[0].geometry.location);
       map.fitBounds(results[0].geometry.viewport);
     }
   });
  });
}

// Lien vers les capitales
let capitalesBlock = document.querySelectorAll('.capitale-block');
for(let i=0; i<capitalesBlock.length; i++){
  capitalesBlock[i].addEventListener("click", function(e){
    var request = {
      query: this.innerHTML.split("capitale\">")[1].split("</span>")[0],
      fields: ['name', 'geometry'],
    };

   var service = new google.maps.places.PlacesService(map);

   service.findPlaceFromQuery(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       map.setCenter(results[0].geometry.location);
       map.fitBounds(results[0].geometry.viewport);
     }
   });
  });
}