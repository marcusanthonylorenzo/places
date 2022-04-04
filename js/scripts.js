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
let paris = new Place('Paris', 'France', '1942');
let rome = new Place('Rome', 'Italy', '1922');
let london = new Place('London', 'UK', '2004');

function Place(city, country, timeOfYear) {
  this.city = city;
  this.country= country;
  this.timeOfYear= timeOfYear;
}

Place.prototype.wholePlace = function() {
  return this.city + " " + this.country + " " + this.timeOfYear;
};


//User Interface Logic

$(document).ready(function(){

    //UI selectors
  const parisSelect = $("#one");
  const romeSelect = $("#two");
  const londonSelect = $("#three");

  //UI expressions
  let cityAndCountryAndDate = paris.wholePlace();
  let romeVacation = rome.wholePlace();
  let londonVacation = london.wholePlace();

  parisSelect.click(function(event) {
    event.preventDefault();
    //click to show
    parisSelect.text(cityAndCountyAndDate);
    romeSelect.hide();
    $("#three").hide();
  });
  romeSelect.click(function(event) {
    event.preventDefault();
    //click to show
    romeSelect.text(romeVacation);
    $("#one").hide();
    $("#three").hide();
  });
  londonSelect.click(function(event) {
    event.preventDefault();
    //click to show
    londonSelect.text(londonVacation);
    $("#one").hide();
    $("#two").hide();
  });

});