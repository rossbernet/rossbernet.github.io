

// Initializing the map and loading geoJSON of the trail

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 5
});

var centerMap = function()
 {
   map.setView(new L.LatLng(39.9522, -75.1639), 5);
 };


L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

var dataset = "https://gist.githubusercontent.com/rossbernet/c39c14923cdf369ca5069ee16e82eaa7/raw/fe741f64eb668994bfb541faa1955821d197ffa0/at_centerline.geojson";


var parsedData;
var featureGroup;

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: regionStyle,
      //filter: myFilter
    }).addTo(map);
  });
});


//console.log(featureGroup)





//Default state and newState
var state = 0;
var newState = [0];
console.log("current state is " + state);

//Default sidebar text
$("#text-title").text(array[0].title);
$("#text-subtitle").text(array[0].subTitle);
// $("#text-block").text(array[1].title);

//Next button function
nextFunc = function(j){
$("#text-block").show().text(array[j].text);
$("#text-title").text(array[j].title);
$("#text-subtitle").text(array[j].subTitle);
};

//Previous button function
prevFunc = function(j){
$("#text-block").show().text(array[j].text);
$("#text-title").text(array[j].title);
$("#text-subtitle").text(array[j].subTitle);
};

//NEXT BUTTON
$("#button-next").click(function(){
  // map.removeLayer(featureGroup);
  state++;
  newState.push(state);
  if (state == array.length-1){
    $("#button-next").hide();
  }
  $("#button-prev").show().text("Previous");
  $("#text-subtitle").show();
        if (state == 1){
          nextFunc(state);
        }
        else if  (state == _.max(newState)){
          nextFunc(state);
        }

        // featureGroup = L.geoJson(parsedData, {
        //   style: defaultStyle,
        // });
        // map.addLayer(featureGroup);
  map.setView(array[state].latLng, array[state].zoom);
  console.log("current state is " + state);
});

//PREVIOUS BUTTON=
$("#button-prev").click(function(){
  // map.removeLayer(featureGroup);
  state--;
  if(state > 0){
    newState.pop(state);
  }
  $("#button-next").show();
if (state == _.max(newState)){
  prevFunc(state);
}
else if (state === 0){
  $("#text-block").hide();
  $("#text-title").text(array[state].title);
  $("#text-subtitle").hide();
  $("#button-prev").hide();
}
  map.setView(array[state].latLng, array[state].zoom);
  console.log("current state is " + state);

  // featureGroup = L.geoJson(parsedData, {
  //   style: regionStyle,
  // });
  // map.addLayer(featureGroup);

});





//adding some popups

$("#button-next").mouseenter(function(){
    if (state == 0) {
      var popup1 = L.popup()
          .setLatLng([34.627060, -84.194503])
          .setContent('<p>Welcome to Georgia. Starting point for most Thru-hikers.</p>')
          .openOn(map);
    }
    else if (state == 1) {

      var popup2 = L.popup({autoPan: false})
          .setLatLng([45.904061, -68.921801])
          .setContent('<p>Welcome to Maine. Ending point for most Thru-hikers.</p>')
          .openOn(map);
      //map.panTo([45.904061, -68.921801], {animate: true, duration: 10.0});
      centerMap();
    }
});
