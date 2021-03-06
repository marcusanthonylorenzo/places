// Business Logic for Places ---------
function Places() {
  this.place = {};
  this.currentId = 0;
}

Places.prototype.addPlace = function(place) {
  beenPlaces.id = this.assignId();
  this.places[place.id] = place;
};

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Places.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

Places.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business Logic for Specific Place---------

let par = {
  name: "Paris",
  landmarks: ["Eiffel Tower 65", "Arc de Triomphe"],
};
let bor = {
   name: "Bordeaux", 
  landmarks: ["place de la Bourse","The Water Mirror"],
};
let lyo = { 
  name: "Lyon",
  landmarks: ["The Odeon", "The Grand Theater"],
 };

 let france = {
  name: "France",
  cities: [par, bor, lyo],
  allCities: function() {
    return this.cities[0].name + " " + this.cities[1].name + " " +  this.cities[2].name;
  },
  // allLandmarks: function(){
  //   return this.landmarks[0].name + " " + this.landmarks[1].name;
  // },
};


let rom = {
  name: "Rome",
  landmarks: ["Colosseum", "Pantheon"]
};
let mil = {
   name: "Milan", 
  landmarks: ["Duomo di Milano","Galleria Vittorio Emanuele II"]
};
let ven = { 
  name: "Venice",
  landmarks: ["Saint Mark's Basilica", "Doge's Palace"],
 };
let italy = {
  name: "Italy",
  cities: [rom, mil, ven],
  allCities: function() {
    return this.cities[0].name + " " + this.cities[1].name + " " +  this.cities[2].name;
  },
  // wholePlace: function(){
  //   return this.name + " " + this.cities[0] + " " + this.cities.landmarks;
  // }
};

let lon = {
  name: "London",
  landmarks: ["Big Ben", "Picadilly Circus"]
};
let liv  = {
   name: "Liverpool", 
  landmarks: ["Anfield Stadium","Liverpool Cathedral"]
};
let bir = { 
  name: "Birmingham",
  landmarks: ["Railroad Park", "Leigon Field"],
 };
let uk = {
  name: "United Kingdom",
  cities: [lon, liv, bir],
  allCities: function() {
    return this.cities[0].name + " " + this.cities[1].name + " " +  this.cities[2].name;
  },
 
};

// let rome = new Place('Italy', 'Rome', 'Colosseum');
// let london = new Place('UK','london','Big ben');

// function Place(country, city, landmark) {
//   this.country = country;
//   this.city = city;
//   this.landmark= landmark;
// }

// Place.prototype.wholePlace = function() {
//   return this.country + " " + this.city + " " + this.landmark;
// };


//User Interface Logic

const eiffel = france.cities[0].landmarks[0];

$(document).ready(function(){

  // const birm = uk.cities[2].landmarks[0];
  //structure of grabbing values in object:
    //key.key[index]
  //nested objects:
    //key.key[index].key[index]

    //UI selectors
  const franceSelect = $("#one");
  const italySelect = $("#two");
  const ukSelect = $("#three");
  const cityPicker = $(".city-picker");
  const pariPicker = $('#pari-picker')

  let eiffel2 = eiffel;

  //UI expressions
  let franceVacation = france.allCities();
  // let franceMarks = france.allLandmarks();
  let italyVacation = italy.allCities();
  let ukVacation = uk.allCities();

  franceSelect.click(function(event) {
    event.preventDefault();
    //click to show
    cityPicker.prepend("<div id='pari-pic'><h4>Paris</h4><input type= 'image' id='france1' img src='https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs='></input></div>");
    cityPicker.prepend("<div id='bordeaux-pic'><h4>Bordeaux</h4><input type= 'image' id='france2' img src='https://www.azamara.com/sites/default/files/heros/bordeaux-france.jpg'></input></div>");
    cityPicker.prepend("<div id='lyon-pic'><h4>lyon</h4><input type= 'image' id='france3' img src='https://media.istockphoto.com/photos/architecture-in-lyon-picture-id1176558435?k=20&m=1176558435&s=612x612&w=0&h=gnf56ysjLJ4W5gzhkxMKN7CX9ogLn0YSEZt9d95zhJU='></input></div>");
    franceSelect.text(franceVacation);
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
  });

  cityPicker.click(function(event){
    event.preventDefault();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#pari-pic").hide();
    $("#bordeaux-pic").hide();
    $("#lyon-pic").hide();
    cityPicker.prepend("<div id='tower-pic'><h4>"+ eiffel +"</h4><input type= 'image' id='france1' img src='https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_3x4.jpg'></input></div>");
   cityPicker.text(franceMarks);
  });
  
  italySelect.click(function(event) {
    event.preventDefault();
    //click to show
    italySelect.text(italyVacation);
    $("#one").hide();
    $("#three").hide();
  });
  ukSelect.click(function(event) {
    event.preventDefault();
    //click to show
    ukSelect.text(ukVacation);
    $("#one").hide();
    $("#two").hide();
  });

});
