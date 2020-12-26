//Pointer le logo Google
//document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[12].style.display = "none";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.82, lng: 7.90 },
    disableDefaultUI: true,
    zoom: 3,
    minZoom: 3,
  });
}

document.getElementById("lister").addEventListener("click", function(e){
  if(this.dataset.state == "alphab"){
    this.dataset.state = "mental";
    document.getElementById("pays-alphab").classList.add("hidded");
    document.getElementById("pays-mental").classList.remove("hidded");
    this.innerHTML = "<i class=\"fas fa-sort-amount-down\"></i>";
  }else if(this.dataset.state == "mental"){
    this.dataset.state = "none";
    //document.getElementById("pays-alphab").classList.add("hidded");
    document.getElementById("pays-mental").classList.add("hidded");
    this.innerHTML = "<i class=\"fas fa-globe-americas\"></i>";
  }else{
    this.dataset.state = "alphab";
    document.getElementById("pays-alphab").classList.remove("hidded");
    //document.getElementById("pays-mental").classList.add("hidded");
    this.innerHTML = "<i class=\"fas fa-sort-alpha-down\"></i>";
  }
});

let lis = document.querySelectorAll('.continent ul .li-content');
for(let i=0; i<lis.length; i++){
  lis[i].addEventListener("click", function(e){
    var request = {
     query: this.innerHTML.split("</span>")[1],
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
