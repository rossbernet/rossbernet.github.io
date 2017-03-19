// styles colors
var regionStyle = function(feature) {
        switch (feature.properties.atc_region) {
            case 'Mid-Atlantic': return {color: "green"};
            case 'New England': return {color: "red"};
            case 'South': return {color: "yellow"};
            case 'Virginia': return {color: "blue"};
        }
    };

  var defaultStyle = function(feature) {
    return feature;
  };

  var surfaceStyle = function(feature) {
    if (feature.properties.surface === 'Native') {
      return {color: "green"};
    }
    else return {color: "red"};
      };

//IMAGES

var smallRocks = 'https://cloud.githubusercontent.com/assets/8103418/23975284/1c02a87c-09b6-11e7-914f-c29b6ddd87b4.png';
var bigRocks = 'https://static.rootsrated.com/image/upload/s--CVH5FBzR--/t_rr_large_natural/ylh0atflhlzftoqb7xts.jpg';

var smallStart = 'https://cloud.githubusercontent.com/assets/8103418/23975342/709c1bde-09b6-11e7-877a-895d6aea41dc.png';
var bigStart = 'http://www.cnyhiking.com/ATinGA-ApproachArch32.jpg';

var smallEnd = 'https://cloud.githubusercontent.com/assets/8103418/23975363/8723fee4-09b6-11e7-8cdc-02ae85342ca8.png';
var bigEnd = 'https://cloud.githubusercontent.com/assets/8103418/23975374/9e546c84-09b6-11e7-9bf5-07d8ab1bbd7b.png';





/* ================================
Week 6 Assignment: Slide Model
================================ */
var obj0 = {title: "2,200 miles, 14 states, and 2 million visitors per year, the Appalachian Trail is an Amerian treasure.",
 text: "",
 zoom: 5,
 latLng: [40.052664, -75.051316],
 style: defaultStyle,
 smallLink: smallRocks,
 bigLink: bigRocks};

var obj1 = {title: "Starting point",
  subTitle: "Most people start the trail in Georgia",
  text: "Most thru-hikers walk northward from Georgia to Maine, and generally start out in early spring and follow the warm weather as it moves north. 'North-bounders' are  called NOBO (NOrthBOund), while those heading in the opposite direction are termed 'south-bounders' (SOBO)",
  zoom: 9,
  latLng: [34.627060, -84.194503],
  style: defaultStyle,
  smallLink: smallStart,
  bigLink: bigStart};

var obj2 = {title: "This is where the trail ends",
 subTitle: "Mt katadin ME",
 text: "The trail ends at Mount Katadin in Maine",
 zoom: 9,
 latLng: [45.904061, -68.921801],
 style: defaultStyle,
 smallLink: smallEnd,
 bigLink: bigEnd};

var obj3 = {title: "Regions along the trail",
  subTitle: "Four distinct regions",
  text: "The trail passes through four distinct regions: The South, 'Virginia', Mid-atlantic, and the North East" ,
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: regionStyle,
  smallLink: smallRocks,
  bigLink: bigRocks};


var obj4 = {title: "Most of the trail is outdoors",
  subTitle: "Most of the trail is natural / dirt",
  text: "But there are a number of sections where it crosses over a bridge, through a town or along a highway",
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: surfaceStyle,
  smallLink: smallRocks,
  bigLink: bigRocks};

var obj5 = {title: "Thanks for joining for the AT tour",
  subTitle: "",
  text: "Hope you learned something about the AT!",
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: defaultStyle,
  smallLink: smallRocks,
  bigLink: bigRocks};

var array = [obj0, obj1, obj2, obj3, obj4, obj5];
// console.log(array);
